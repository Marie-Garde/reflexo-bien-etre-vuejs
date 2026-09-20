import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { SeasonContent, SeasonKey, SeasonsContent } from "../interface/SeasonContent";

const SEASONS_QUERY = /* groq */ `*[_id == "seasonsPage"][0]{
  header{title, sectionTitle, body},
  circle{title, body, tiles[]{_key, label, destination, position, image}, centerLabel}
}`;

const SEASON_QUERY = /* groq */ `*[_id == $id][0]{
  title,
  subtitle,
  headerImage,
  specialties{title, body},
  advices{
    title,
    image{..., "naturalWidth": asset->metadata.dimensions.width},
    items[]{_key, title, body}
  },
  recipes{title, placeholder, items}
}`;

export const useSeasonsPageStore = defineStore("seasonsPage", () => {
  const content = ref<SeasonsContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<SeasonsContent | null>(SEASONS_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Saisons et conseils impossible", error);
    }
  }

  return { content, load };
});

/**
 * Une entrée par saison. Chaque page de saison charge la sienne, et le cache
 * partagé évite de rejouer la requête en revenant sur une page déjà vue.
 */
export const useSeasonStore = defineStore("season", () => {
  const seasons = ref<Partial<Record<SeasonKey, SeasonContent>>>({});

  async function load(season: SeasonKey) {
    if (seasons.value[season]) return;
    try {
      const result = await sanityClient.fetch<SeasonContent | null>(SEASON_QUERY, {
        id: `season-${season}`,
      });
      if (result) seasons.value = { ...seasons.value, [season]: result };
    } catch (error) {
      console.error(`Chargement de la saison ${season} impossible`, error);
    }
  }

  return { seasons, load };
});
