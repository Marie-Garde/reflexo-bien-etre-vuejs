import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { PriceContent } from "../interface/PriceContent";

const PRICE_QUERY = /* groq */ `*[_id == "pricePage"][0]{
  header{title, subtitle},
  reflexo{
    title,
    groups[]{_key, title, items[]{_key, title, time, price, description, image}},
    buttonLabel
  },
  tuina{title, items[]{_key, title, time, price, description, image}, buttonLabel},
  qiGong{title, faceToFaceLabel, onlineLabel, items[]{_key, title, faceToFace, online, image}, buttonLabel}
}`;

export const usePriceContentStore = defineStore("priceContent", () => {
  const content = ref<PriceContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<PriceContent | null>(PRICE_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Tarifs impossible", error);
    }
  }

  return { content, load };
});
