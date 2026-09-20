import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { AboutContent } from "../interface/AboutContent";

const ABOUT_QUERY = /* groq */ `*[_id == "aboutPage"][0]{
  header{title, subtitle},
  approach{
    title,
    body,
    image{..., "naturalWidth": asset->metadata.dimensions.width},
    gallery[]{_key, caption, image}
  },
  cta{title, description, buttonLabel},
  career{
    title,
    body,
    image{..., "naturalWidth": asset->metadata.dimensions.width},
    mobileImage{..., "naturalWidth": asset->metadata.dimensions.width}
  },
  training{title, items[]{_key, date, title, subtitle}}
}`;

/**
 * Contenu de la page Présentation. Même fonctionnement que la page d'accueil :
 * rempli au build pour que le texte parte dans le HTML, rafraîchi ensuite dans
 * le navigateur pour refléter les modifications faites dans Sanity.
 */
export const useAboutContentStore = defineStore("aboutContent", () => {
  const content = ref<AboutContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<AboutContent | null>(ABOUT_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement du contenu de la page Présentation impossible", error);
    }
  }

  return { content, load };
});
