import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { OfficeSessionContent, OutsideSessionContent } from "../interface/PracticesContent";

const OFFICE_QUERY = /* groq */ `*[_id == "officeSessionPage"][0]{
  header{title, subtitle, backgroundImage},
  why{cards[]{_key, title, body, image}},
  summary{title, headers, rows[]{_key, cells}, backgroundImage},
  sessions[]{
    _key,
    title,
    first{title, body, quote, image, imagePosition},
    second{title, body, quote, image, imagePosition},
    rhythm{title, body, points, buttonLabel}
  },
  checkup{title, body, backgroundImage},
  after{title, body, items[]{_key, title, description}}
}`;

const OUTSIDE_QUERY = /* groq */ `*[_id == "outsideSessionPage"][0]{
  header{title, subtitle, backgroundImage},
  buttonLabel,
  practice{title, body, image{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height}},
  session{title, body, image{..., "naturalWidth": asset->metadata.dimensions.width, "naturalHeight": asset->metadata.dimensions.height}},
  why{title, body, reasons},
  who{title, text, people[]{_key, label, image}},
  how{title, infos[]{_key, text, icon}}
}`;

export const useOfficeSessionStore = defineStore("officeSession", () => {
  const content = ref<OfficeSessionContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<OfficeSessionContent | null>(OFFICE_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Séances au cabinet impossible", error);
    }
  }

  return { content, load };
});

export const useOutsideSessionStore = defineStore("outsideSession", () => {
  const content = ref<OutsideSessionContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<OutsideSessionContent | null>(OUTSIDE_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Séances extérieures impossible", error);
    }
  }

  return { content, load };
});
