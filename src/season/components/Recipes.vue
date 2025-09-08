<script setup lang="ts">
import { useI18n } from "vue-i18n";

const props = defineProps({
  background: { type: String, required: true },
  season: { type: String, required: true },
});

const { t, tm } = useI18n();

const title = t("seasons.season.subtitles.recipes");
const recipes = tm(`seasons.season.${props.season}.recipes`);
</script>

<template>
  <div :class="['container', `${background}`]">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(recipe, index) in recipes" :key="index">{{ recipe }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  padding: 60px;
  color: $white;
  h2 {
    padding-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
    }
  }
}

.yellow {
  background-color: $orange-light;
  color: $black;
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
</style>
