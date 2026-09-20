import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { ContactContent } from "../interface/ContactContent";

const CONTACT_QUERY = /* groq */ `*[_id == "contactPage"][0]{
  title,
  office{title, address, phone, email, mapEmbedUrl},
  form{title, lastName, firstName, mail, phone, subject, message, messagePlaceholder, send},
  errors{lastName, firstName, mailOrPhone, mail, phone, subject, message},
  feedback{success, error}
}`;

export const useContactContentStore = defineStore("contactContent", () => {
  const content = ref<ContactContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<ContactContent | null>(CONTACT_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Contact impossible", error);
    }
  }

  return { content, load };
});
