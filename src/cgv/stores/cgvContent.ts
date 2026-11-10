import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { CgvContent } from "../interface/CgvContent";

const CGV_QUERY = /* groq */ `*[_id == "cgvPage"][0]{
  title,
  intro,
  sections[]{_key, title, body, warning},
  updatedAt
}`;

export const useCgvStore = defineStore("cgv", () => {
  const content = ref<CgvContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<CgvContent | null>(CGV_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement des conditions générales de vente impossible", error);
    }
  }

  return { content, load };
});
