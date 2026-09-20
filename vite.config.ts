import { writeFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import type { ViteSSGOptions } from "vite-ssg";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import svgLoader from "vite-svg-loader";

const SITE_URL = "https://reflexo-bien-etre.fr";
const SITE_NAME = "Réflex'ô Bien-être Corrèze";
const SOCIAL_IMAGE = `${SITE_URL}/logo-robe-green.png`;
const SANITY_API_VERSION = "2021-06-07";

function escapeAttribute(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function stripTags(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Récupère les adresses des articles publiés. vite-ssg ne génère pas les routes
 * à paramètre : sans cette liste, `/articles/mon-article` n'existerait pas en
 * HTML et ne serait donc lu par aucun moteur de recherche.
 */
async function fetchArticlePaths(projectId: string) {
  if (!projectId) return [];

  const query = '*[_type == "article" && defined(slug.current)].slug.current';
  const url = `https://${projectId}.api.sanity.io/v${SANITY_API_VERSION}/data/query/production?query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);
    const { result } = (await response.json()) as { result?: string[] };
    const slugs = result ?? [];
    console.log(`[articles] ${slugs.length} article(s) à générer`);
    return slugs.map((slug) => `/articles/${slug}`);
  } catch (error) {
    // Mieux vaut un site sans les pages d'articles qu'un build cassé.
    console.warn("[articles] slugs introuvables, pages d'articles ignorées :", error);
    return [];
  }
}

/**
 * Précharge la première image du carrousel, et seulement sur les pages qui en
 * ont une. L'adresse est relue dans le HTML déjà rendu : le préchargement vise
 * donc forcément le fichier que la page affiche.
 */
function buildCarouselPreload(html: string) {
  const carouselStart = html.indexOf('class="carousel-item');
  if (carouselStart === -1) return "";

  const image = /<img\b[^>]*>/.exec(html.slice(carouselStart));
  if (!image) return "";

  const attribute = (name: string) => new RegExp(`${name}="([^"]*)"`).exec(image[0])?.[1] ?? "";

  const href = attribute("src");
  if (!href) return "";

  const srcset = attribute("srcset");
  const sizes = attribute("sizes");

  return [
    `<link rel="preload" as="image" fetchpriority="high" href="${href}"`,
    srcset ? ` imagesrcset="${srcset}"` : "",
    sizes ? ` imagesizes="${sizes}"` : "",
    " />",
  ].join("");
}

/**
 * Un article ne peut pas porter son titre dans la définition de sa route : il
 * est le même pour tous. On le relit donc dans la page rendue.
 */
function articleMeta(html: string) {
  const heading = /<h1[^>]*class="[^"]*article__title[^"]*"[^>]*>([\s\S]*?)<\/h1>/.exec(html);
  if (!heading) return null;

  const paragraph = /<p[^>]*class="[^"]*article__paragraph[^"]*"[^>]*>([\s\S]*?)<\/p>/.exec(html);
  const summary = paragraph ? stripTags(paragraph[1]) : "";

  return {
    title: `${stripTags(heading[1])} — ${SITE_NAME}`,
    description: summary.length > 160 ? `${summary.slice(0, 157).trimEnd()}…` : summary,
  };
}

/**
 * Écrit le titre, la description et les balises sociales de chaque page dans le
 * HTML généré. Sans ça, les pages partent avec le titre générique de
 * index.html : le navigateur les corrige au chargement, mais pas les moteurs de
 * recherche ni les aperçus de lien.
 */
function injectPageMeta(route: string, html: string, meta: Record<string, unknown>) {
  const fromArticle = articleMeta(html);
  const title = fromArticle?.title ?? (meta.title as string) ?? SITE_NAME;
  const description = (fromArticle?.description || (meta.description as string)) ?? "";
  const canonical = `${SITE_URL}${route === "/" ? "/accueil" : route}`;
  const preload = buildCarouselPreload(html);

  const tags = [
    `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
    `<meta property="og:type" content="${fromArticle ? "article" : "website"}" />`,
    `<meta property="og:site_name" content="${escapeAttribute(SITE_NAME)}" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:title" content="${escapeAttribute(title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttribute(SOCIAL_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeAttribute(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(SOCIAL_IMAGE)}" />`,
    preload,
  ]
    .filter(Boolean)
    .join("\n    ");

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[\s\S]*?"\s*\/?>/,
      `<meta name="description" content="${escapeAttribute(description)}" />`,
    )
    .replace("</head>", `  ${tags}\n  </head>`);
}

/**
 * Écrit le plan du site à partir des pages réellement générées. Le fichier
 * était maintenu à la main : chaque nouvel article y aurait manqué.
 */
async function writeSitemap(routes: string[]) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = routes
    .filter((route) => route !== "/")
    .sort()
    .map(
      (route) =>
        `  <url>\n    <loc>${SITE_URL}${encodeURI(route)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile("dist/sitemap.xml", xml, "utf-8");
  console.log(`[sitemap] ${routes.length - 1} URL(s) écrites`);
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  let generatedRoutes: string[] = [];

  return {
    plugins: [vue(), vueDevTools(), svgLoader()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    base: "/",
    ssgOptions: {
      async includedRoutes(paths) {
        const articlePaths = await fetchArticlePaths(env.VITE_SANITY_PROJECT_ID);
        // Les routes à paramètre ne se génèrent pas telles quelles : on les
        // remplace par les adresses réelles des articles.
        const staticPaths = paths.filter((path) => !path.includes(":") && !path.includes("*"));
        generatedRoutes = [...staticPaths, ...articlePaths];
        return generatedRoutes;
      },
      onPageRendered(route, html, appCtx) {
        const resolved = appCtx.router.resolve(route);
        return injectPageMeta(route, html, resolved.meta ?? {});
      },
      async onFinished() {
        await writeSitemap(generatedRoutes);
      },
    } satisfies ViteSSGOptions,
  };
});
