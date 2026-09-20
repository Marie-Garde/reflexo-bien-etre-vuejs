import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { HomeContent } from "../interface/HomeContent";
import type { CarouselSlide } from "../interface/Carousel";
import type { ArticleSummary } from "@/articles/interface/ArticleContent";

const HOME_QUERY = /* groq */ `{
  "content": *[_id == "homePage"][0]{
    pageHeading,
    carouselLinkLabel,
    difficulties{title, subtitle, items[]{_key, label, icon}},
    solution{
      title,
      intro,
      practices[]{_key, name, description},
      outro,
      buttonLabel,
      image{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height}
    },
    presentation{title, body, buttonLabel, image},
    appointment{title, description, buttonLabel, backgroundImage},
    latestArticles{title, linkLabel}
  },
  "slides": *[_type == "carouselItem"] | order(_createdAt asc){
    _id, title, description, image, link
  },
  "latestArticles": *[_type == "article" && defined(slug.current)] | order(publishedAt desc)[0...3]{
    _id, title, "slug": slug.current, publishedAt, coverImage
  }
}`;

interface HomePayload {
  content: HomeContent | null;
  slides: CarouselSlide[];
  latestArticles: ArticleSummary[];
}

/**
 * Contenu de la page d'accueil.
 *
 * Rempli une première fois pendant la génération statique (onServerPrefetch),
 * ce qui met le texte dans le HTML livré à Google, puis rafraîchi côté
 * navigateur pour que les modifications faites dans Sanity soient visibles
 * sans redéployer.
 */
export const useHomeContentStore = defineStore("homeContent", () => {
  const content = ref<HomeContent | null>(null);
  const slides = ref<CarouselSlide[]>([]);
  const latestArticles = ref<ArticleSummary[]>([]);

  async function load() {
    try {
      const payload = await sanityClient.fetch<HomePayload>(HOME_QUERY);
      if (payload?.content) content.value = payload.content;
      if (payload?.slides) slides.value = payload.slides;
      if (payload?.latestArticles) latestArticles.value = payload.latestArticles;
    } catch (error) {
      // Sanity injoignable : on garde ce qui a été gravé au build plutôt que
      // de vider la page.
      console.error("Chargement du contenu de la page d'accueil impossible", error);
    }
  }

  return { content, slides, latestArticles, load };
});
