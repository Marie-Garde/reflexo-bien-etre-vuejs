<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Specialties from "@/season/components/Specialties.vue";
import AdvicesSeasons from "@/season/components/AdvicesSeasons.vue";
import Recipes from "@/season/components/Recipes.vue";

const { t } = useI18n();
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-overlay">
        <h1 class="title">{{ t("seasons.season.winter.title") }}</h1>
        <p class="red">{{ t("seasons.season.winter.subtitle") }}</p>
      </div>
    </div>
  </div>

  <div class="container">
    <Specialties season="winter" background="yellow" />

    <AdvicesSeasons season="winter" />

    <Recipes season="winter" background="brown" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/illustrations/winter.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 5px 5px $dark-grey;
  display: flex;
  justify-content: center;

  &-container {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  &-overlay {
    width: 50%;
    max-width: 600px;
    padding: 2rem;
    margin-bottom: 5rem;
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
