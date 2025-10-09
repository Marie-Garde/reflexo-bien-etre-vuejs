<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
import { contactRoutesName } from "@/contact/routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

const selectedOption = ref<string>("");

const options = tm("appointment.select.list");

function openCalendly(url: string) {
  (window as any).Calendly.initPopupWidget({ url });
}

function goToContact() {
  router.push({ name: contactRoutesName.HOME });
}
</script>

<template>
  <div class="select-container">
    <h2>Sélectionnez une option :</h2>
    <select v-model="selectedOption" class="select">
      <option value="">-</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
    </select>

    <div v-if="selectedOption === '1'" class="text-block">
      <h3>{{ tm("appointment.select.list")[0].label }}</h3>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Button
        label="Première séance"
        color="brown-dark"
        @click="openCalendly('https://calendly.com/contact-reflexo-bien-etre/30min')"
      />
      <Button
        label="Séance de suivi"
        color="orange-light"
        @click="
          openCalendly(
            'https://calendly.com/contact-reflexo-bien-etre/reflexologie-et-energetique-chinoise-seance-de-suivi'
          )
        "
      />
    </div>
    <div v-if="selectedOption === '2'" class="text-block">
      <h3>{{ tm("appointment.select.list")[1].label }}</h3>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Button
        label="Première séance"
        color="brown-dark"
        @click="
          openCalendly(
            'https://calendly.com/contact-reflexo-bien-etre/reflexologie-et-energetique-chinoise-1ere-sea-clone'
          )
        "
      />
      <Button
        label="Séance de suivi"
        color="orange-light"
        @click="
          openCalendly(
            'https://calendly.com/contact-reflexo-bien-etre/reflexologie-et-energetique-chinoise-seance-d-clone'
          )
        "
      />
    </div>
    <div v-if="selectedOption === '3'" class="text-block">
      <h3>{{ tm("appointment.select.list")[2].label }}</h3>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Button
        label="Première séance"
        color="brown-dark"
        @click="
          openCalendly('https://calendly.com/contact-reflexo-bien-etre/massage-tuina-1ere-seance')
        "
      />
      <Button
        label="Séance de suivi"
        color="orange-light"
        @click="
          openCalendly(
            'https://calendly.com/contact-reflexo-bien-etre/massage-tuina-seance-de-suivi'
          )
        "
      />
    </div>
    <div v-if="selectedOption === '4'" class="text-block">
      <h3>{{ tm("appointment.select.list")[3].label }}</h3>
      <p>{{ tm("appointment.select.qiGong") }}</p>
      <Button label="Contactez-moi" @click="goToContact()" />
    </div>
    <div v-if="selectedOption === '5'" class="text-block">
      <h3>{{ tm("appointment.select.list")[4].label }}</h3>
      <p>{{ tm("appointment.select.qiGong") }}</p>
      <Button label="Contactez-moi" @click="goToContact()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.select-container {
  font-family: sans-serif;
  max-width: 1280px;
  margin: 60px auto;

  // @media (max-width: 1200px) and (min-width: 769px) {
  //   margin: 0 auto 5rem 40px;
  // }
}

.select {
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
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
}
</style>
