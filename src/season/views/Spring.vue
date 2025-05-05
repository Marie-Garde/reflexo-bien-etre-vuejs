<script setup lang="ts">
import { useI18n } from "vue-i18n";
import topImage from "@/assets/illustrations/spring.jpg";
import Specialties from "../components/Specialties.vue";
import AdvicesSeasons from "../components/AdvicesSeasons.vue";
import type { Accordion } from "../interface/Accordion";
import Recipes from "../components/Recipes.vue";

const { t, tm } = useI18n();

const specialitiesText = t("seasons.season.spring.specialties");

const advicesList: Accordion[] = tm("seasons.season.spring.advices");
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("seasons.season.spring.title") }}</h1>
      <p class="red">{{ t("seasons.season.spring.subtitle") }}</p>
    </div>
  </div>

  <div class="container">
    <Specialties :text="specialitiesText" background="yellow" />

    <AdvicesSeasons :advices-list="advicesList" />

    <Recipes background="green" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/illustrations/spring.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0px 5px 5px $dark-grey;
  &-overlay {
    position: absolute;
    bottom: 5%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    text-align: left;
  }
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
