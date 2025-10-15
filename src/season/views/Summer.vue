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
        <h1 class="title">{{ t("seasons.season.summer.title") }}</h1>
        <p>{{ t("seasons.season.summer.subtitle") }}</p>
      </div>
    </div>
  </div>

  <div class="container">
    <Specialties season="summer" background="yellow" />

    <AdvicesSeasons season="summer" />

    <Recipes season="summer" background="orange" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/illustrations/ete.jpg");
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

@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 100px 0 0 0;
    display: flex;
    align-items: flex-end;

    &-container {
      width: 100%;
    }

    &-overlay {
      width: 100%;
      margin-bottom: 0;
      text-align: center;
      border-radius: 0;
      background: rgba(255, 255, 255, 0.6);

      h1 {
        margin: 0 auto 20px auto;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .header {
    &-overlay {
      width: 70%;
      margin: 0 auto 2vw auto;
      border-radius: 10px;
      text-align: center;
    }
  }
}
</style>
