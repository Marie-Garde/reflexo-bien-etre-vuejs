import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { LegalNoticeContent } from "../interface/LegalNoticeContent";

const LEGAL_QUERY = /* groq */ `*[_id == "legalNoticePage"][0]{
  title,
  sections[]{_key, title, body, warning}
}`;

export const useLegalNoticeStore = defineStore("legalNotice", () => {
  const content = ref<LegalNoticeContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<LegalNoticeContent | null>(LEGAL_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement des mentions légales impossible", error);
    }
  }

  return { content, load };
});
