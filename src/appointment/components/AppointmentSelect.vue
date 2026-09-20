<script setup lang="ts">
import { computed, ref, type PropType } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import { contactRoutesName } from "@/contact/routes/routesName";
import type { AppointmentOption } from "../interface/AppointmentContent";

interface Calendly {
  initPopupWidget: (options: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly: Calendly;
  }
}

const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array as PropType<AppointmentOption[]>, required: true },
});

const router = useRouter();

const selectedKey = ref<string>("");

const selectedOption = computed(
  () => props.options.find((option) => option._key === selectedKey.value) ?? null,
);

// Le premier bouton est mis en avant, les suivants en second plan.
function buttonColor(index: number) {
  return index === 0 ? "brown-dark" : "orange-light";
}

function openCalendly(url: string) {
  window.Calendly.initPopupWidget({ url });
}

function goToContact() {
  router.push({ name: contactRoutesName.HOME });
}
</script>

<template>
  <div class="select-container">
    <label for="appointment-select">{{ props.label }}</label>
    <select v-model="selectedKey" id="appointment-select" class="select">
      <option value="">-</option>
      <option v-for="option in props.options" :key="option._key" :value="option._key">
        {{ option.label }}
      </option>
    </select>

    <div v-if="selectedOption" class="text-block">
      <h3>{{ selectedOption.label }}</h3>

      <template v-if="selectedOption.kind === 'booking'">
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Button
          v-for="(booking, index) in selectedOption.bookings"
          :key="booking._key"
          :label="booking.label"
          :color="buttonColor(index)"
          @click="openCalendly(booking.url)"
        />
      </template>

      <template v-else>
        <p>{{ selectedOption.message }}</p>
        <Button :label="selectedOption.buttonLabel ?? ''" @click="goToContact()" />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.select-container {
  font-family: sans-serif;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    margin: 40px auto 5rem 40px;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
  }
}

label {
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 769px) {
    text-align: center;
  }
}

.select {
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;

  @media (max-width: 769px) {
    width: 90%;
    margin: 0 auto;
  }
}

.text-block {
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 30px;
  }

  @media (max-width: 769px) {
    width: 90%;
    margin: 30px auto;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 90%;
  }
}

.text-block h3 {
  margin-top: 0;
}

.text-block .btn-brown-dark,
.text-block .btn-orange-light {
  margin-right: 10px;
}

button {
  padding: 20px 40px;
  font-size: 1.2rem;

  @media (max-width: 769px) {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
