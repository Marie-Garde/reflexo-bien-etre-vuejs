<script setup lang="ts">
import type { PropType } from "vue";
import BodyPainImage from "@/assets/icons/Body-pain.webp";
import HeadacheImage from "@/assets/icons/Headache.webp";
import IsomniaImage from "@/assets/icons/Isomnia.webp";
import DigestiveSystemPainImage from "@/assets/icons/Digestive-system-pain.webp";
import StressImage from "@/assets/icons/Stress.webp";
import DiseaseImage from "@/assets/icons/Disease.webp";
import type { DifficultiesSection, SymptomIcon } from "../interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<DifficultiesSection>, required: true },
});

// Les fichiers d'icônes restent dans le code ; Sanity choisit laquelle afficher.
const ICONS: Record<SymptomIcon, string> = {
  bodyPain: BodyPainImage,
  headache: HeadacheImage,
  insomnia: IsomniaImage,
  digestive: DigestiveSystemPainImage,
  stress: StressImage,
  fatigue: DiseaseImage,
};
</script>

<template>
  <div class="difficulties">
    <h2 class="difficulties-title">{{ props.section.title }}</h2>
    <p>{{ props.section.subtitle }}</p>

    <div class="difficulties-list">
      <div v-for="item in props.section.items" :key="item._key" class="difficulties-list-item">
        <img
          class="difficulties-list-item-img"
          :src="ICONS[item.icon]"
          :alt="item.label"
          loading="lazy"
        />
        <p>{{ item.label }}</p>
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
