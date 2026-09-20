import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { Article, ArticleSummary, ArticlesPageContent } from "../interface/ArticleContent";

const IMAGE = `{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height}`;

const LIST_QUERY = /* groq */ `{
  "page": *[_id == "articlesPage"][0]{title, headerImage, intro, emptyMessage},
  "articles": *[_type == "article" && defined(slug.current)] | order(publishedAt desc){
    _id, title, "slug": slug.current, publishedAt, coverImage${IMAGE}
  }
}`;

const ARTICLE_QUERY = /* groq */ `*[_type == "article" && slug.current == $slug][0]{
  _id, title, "slug": slug.current, publishedAt, coverImage${IMAGE}, body
}`;

interface ListPayload {
  page: ArticlesPageContent | null;
  articles: ArticleSummary[];
}

export const useArticlesStore = defineStore("articles", () => {
  const page = ref<ArticlesPageContent | null>(null);
  const articles = ref<ArticleSummary[]>([]);

  async function loadList() {
    try {
      const payload = await sanityClient.fetch<ListPayload>(LIST_QUERY);
      if (payload?.page) page.value = payload.page;
      if (payload?.articles) articles.value = payload.articles;
    } catch (error) {
      console.error("Chargement de la liste des articles impossible", error);
    }
  }

  return { page, articles, loadList };
});

/**
 * Les articles déjà lus sont gardés en mémoire : revenir sur un article ne
 * relance pas de requête.
 */
export const useArticleStore = defineStore("article", () => {
  const bySlug = ref<Record<string, Article>>({});

  async function load(slug: string) {
    if (bySlug.value[slug]) return;
    try {
      const result = await sanityClient.fetch<Article | null>(ARTICLE_QUERY, { slug });
      if (result) bySlug.value = { ...bySlug.value, [slug]: result };
    } catch (error) {
      console.error(`Chargement de l'article ${slug} impossible`, error);
    }
  }

  return { bySlug, load };
});
