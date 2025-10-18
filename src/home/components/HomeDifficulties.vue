<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BodyPainImage from "@/assets/icons/Body-pain.png";
import HeadacheImage from "@/assets/icons/Headache.png";
import IsomniaImage from "@/assets/icons/Isomnia.png";
import DigestiveSystemPainImage from "@/assets/icons/Digestive-system-pain.png";
import StressImage from "@/assets/icons/Stress.png";
import DiseaseImage from "@/assets/icons/Disease.png";

const { t, tm } = useI18n();

const difficultiesList = tm("home.difficulties.list");

const difficulties = [
  {
    image: BodyPainImage,
    text: difficultiesList[0],
  },
  {
    image: HeadacheImage,
    text: difficultiesList[1],
  },
  {
    image: IsomniaImage,
    text: difficultiesList[2],
  },
  {
    image: DigestiveSystemPainImage,
    text: difficultiesList[3],
  },
  {
    image: StressImage,
    text: difficultiesList[4],
  },
  {
    image: DiseaseImage,
    text: difficultiesList[5],
  },
];
</script>

<template>
  <div class="difficulties">
    <h2 class="difficulties-title">{{ t("home.difficulties.title") }}</h2>
    <p>{{ t("home.difficulties.subtitle") }}</p>

    <div class="difficulties-list">
      <div v-for="(difficulty, index) in difficulties" :key="index" class="difficulties-list-item">
        <img class="difficulties-list-item-img" :src="difficulty.image" />
        <p>{{ difficulty.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.difficulties {
  max-width: 1200px;
  margin: 60px auto;
  text-align: center;
  h2 {
    margin-bottom: 30px;
  }
  &-list {
    margin-top: 60px;
    display: flex;
    justify-content: space-around;

    &-item {
      width: 16%;
      &-img {
        height: 70px;
      }
    }
  }
}

@media (max-width: 768px) {
  .difficulties {
    width: 100%;
    p {
      max-width: 90%;
      margin: 0 auto;
    }
  }

  .difficulties-list {
    flex-wrap: wrap;
    > * {
      flex: 1 1 160px;
    }
  }
}
</style>
