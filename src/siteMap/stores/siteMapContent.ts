import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { SiteMapContent } from "../interface/SiteMapContent";

const SITEMAP_QUERY = /* groq */ `*[_id == "siteMapPage"][0]{
  title,
  entries[]{_key, label, destination, children[]{_key, label, destination}}
}`;

export const useSiteMapContentStore = defineStore("siteMapContent", () => {
  const content = ref<SiteMapContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<SiteMapContent | null>(SITEMAP_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement du plan du site impossible", error);
    }
  }

  return { content, load };
});
