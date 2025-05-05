<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps({
  background: { type: String, required: true },
});

const { t } = useI18n();

const title = t("seasons.season.subtitles.recipes");
</script>

<template>
  <div :class="['container', `${background}`]">
    <h2>{{ title }}</h2>
    <p class="red">Liste de recettes</p>
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
}

.yellow {
  background-color: $orange-light;
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
