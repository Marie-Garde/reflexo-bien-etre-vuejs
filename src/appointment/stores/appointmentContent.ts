import { defineStore } from "pinia";
import { ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { AppointmentContent } from "../interface/AppointmentContent";

const APPOINTMENT_QUERY = /* groq */ `*[_id == "appointmentPage"][0]{
  header{title, description},
  selectLabel,
  options[]{_key, label, kind, bookings[]{_key, label, url}, message, buttonLabel}
}`;

export const useAppointmentContentStore = defineStore("appointmentContent", () => {
  const content = ref<AppointmentContent | null>(null);

  async function load() {
    try {
      const result = await sanityClient.fetch<AppointmentContent | null>(APPOINTMENT_QUERY);
      if (result) content.value = result;
    } catch (error) {
      console.error("Chargement de la page Prendre rendez-vous impossible", error);
    }
  }

  return { content, load };
});
