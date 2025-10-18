<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
  season: { type: String, required: true },
  background: { type: String, required: true },
});

const { t, tm } = useI18n();

const title = t("seasons.season.subtitles.specialties");
const text = tm(`seasons.season.${props.season}.specialties`);
</script>

<template>
  <div :class="['specialties', `${background}`]">
    <h2>{{ title }}</h2>
    <div v-for="(paragraph, index) in text" :key="index" class="specialties-text">
      <div v-html="paragraph"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.specialties {
  text-align: center;
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding-bottom: 20px;
  }
  &-text {
    max-width: 1280px;
    margin-bottom: 20px;
  }
  &-first-line {
    margin-bottom: 20px;
  }
}

.yellow {
  background-color: $orange-white;
}

.orange {
  background-color: $orange;
}

.green {
  background-color: $green;
}

.brown {
  background-color: $brown-dark;
}

@media (max-width: 768px) {
  .specialties {
    width: 100%;
    &-text {
      max-width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
