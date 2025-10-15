<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Specialties from "@/season/components/Specialties.vue";
import AdvicesSeasons from "@/season/components/AdvicesSeasons.vue";
import Recipes from "@/season/components/Recipes.vue";

const { t, tm } = useI18n();

const specialtiesTitle = t("seasons.season.interSeason.specialties.title");
const specialtiesText = tm(`seasons.season.interSeason.specialties.text`);
</script>

<template>
  <div class="header">
    <div class="header-container">
      <div class="header-overlay">
        <h1 class="title">{{ t("seasons.season.interSeason.title") }}</h1>
        <p>{{ t("seasons.season.interSeason.subtitle") }}</p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="specialties">
      <h2>{{ specialtiesTitle }}</h2>

      <div v-for="(paragraph, index) in specialtiesText" :key="index" class="specialties-text">
        <div v-html="paragraph"></div>
      </div>
    </div>

    <AdvicesSeasons season="interSeason" />

    <Recipes season="interSeason" background="yellow" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/illustrations/inter-saison.png");
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

.specialties {
  text-align: center;
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $orange-white;
  h2 {
    padding-bottom: 20px;
  }
  &-text {
    max-width: 1280px;
    margin-bottom: 20px;
  }
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
      background: rgba(255, 255, 255, 0.7);

      h1 {
        margin: 0 auto 20px auto;
      }
    }
  }

  .specialties {
    width: 100%;
    p {
      max-width: 90%;
      margin: 0 auto;
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
