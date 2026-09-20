import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { SiteSettings } from "../interface/SiteSettings";

const SETTINGS_QUERY = /* groq */ `*[_id == "siteSettings"][0]{
  topBar{address, phone},
  navItems[]{_key, label, destination, mobileOnly},
  appointmentLabel,
  social{title, instagramUrl, facebookUrl},
  footer{
    warning, name, societyName, phone, email, address,
    legal{copyright, siteMapLabel, legalPageLabel, creatorLabel, creatorUrl}
  }
}`;

/**
 * Menu et pied de page. Présents sur toutes les pages, ils sont chargés une
 * seule fois depuis App.vue.
 */
export const useSiteSettingsStore = defineStore("siteSettings", () => {
  const settings = ref<SiteSettings | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<SiteSettings | null>(SETTINGS_QUERY);
      if (result) settings.value = result;
    } catch (error) {
      console.error("Chargement du menu et du pied de page impossible", error);
    }
  }

  return { settings, load };
});
