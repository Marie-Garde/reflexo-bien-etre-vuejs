import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { PracticesContent } from "../interface/PracticesContent";

const PRACTICES_QUERY = /* groq */ `*[_id == "practicesPage"][0]{
  header{title, sectionTitle, body},
  benefits{
    title,
    subtitle,
    image{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height},
    mobileImage{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height},
    items[]{_key, title, body},
    conclusion
  },
  pillars{
    title,
    body,
    officeLabel,
    officeImage,
    outsideLabel,
    outsideImage
  },
  sessionProgress{title, steps[]{_key, title, description}}
}`;

/**
 * Contenu de la page Mes accompagnements. Rempli au build puis rafraîchi dans
 * le navigateur, comme les autres pages.
 */
export const usePracticesContentStore = defineStore("practicesContent", () => {
  const content = ref<PracticesContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<PracticesContent | null>(PRACTICES_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement du contenu de la page Mes accompagnements impossible", error);
    }
  }

  return { content, load };
});
