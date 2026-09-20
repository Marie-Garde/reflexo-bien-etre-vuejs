<script lang="ts">
import { computed, defineComponent, h } from "vue";
import { storeToRefs } from "pinia";
import { useSiteSettingsStore } from "../stores/siteSettings";

const SITE_URL = "https://reflexo-bien-etre.fr";

/**
 * Décrit le cabinet au format schema.org. C'est ce que lisent Google et les
 * annuaires pour afficher une fiche (adresse, téléphone, horaires) dans les
 * résultats de recherche locale.
 */
export default defineComponent({
  name: "StructuredData",
  setup() {
    const { settings } = storeToRefs(useSiteSettingsStore());

    const jsonLd = computed(() => {
      const value = settings.value;
      if (!value) return null;

      return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        name: value.footer.societyName,
        founder: { "@type": "Person", name: value.footer.name },
        url: SITE_URL,
        image: `${SITE_URL}/logo-robe-green.png`,
        telephone: value.footer.phone,
        email: value.footer.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "7 place de l'église Saint Julien",
          postalCode: "19600",
          addressLocality: "Nespouls",
          addressRegion: "Corrèze",
          addressCountry: "FR",
        },
        areaServed: ["Corrèze", "Dordogne", "Lot"],
        sameAs: [value.social.instagramUrl, value.social.facebookUrl].filter(Boolean),
      });
    });

    return () =>
      jsonLd.value ? h("script", { type: "application/ld+json", innerHTML: jsonLd.value }) : null;
  },
});
</script>
