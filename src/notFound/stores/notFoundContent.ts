import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { NotFoundContent } from "../interface/NotFoundContent";

const NOT_FOUND_QUERY = /* groq */ `*[_id == "notFoundPage"][0]{title, text, buttonLabel}`;

export const useNotFoundStore = defineStore("notFound", () => {
  const content = ref<NotFoundContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<NotFoundContent | null>(NOT_FOUND_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page « introuvable » impossible", error);
    }
  }

  return { content, load };
});
