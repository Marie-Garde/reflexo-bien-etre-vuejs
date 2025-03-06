import { createI18n } from "vue-i18n";
import fr from "@/i18n/fr.json";

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "fr",
  messages: { fr },
});

export default i18n;
