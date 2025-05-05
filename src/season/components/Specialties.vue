<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps({
  text: { type: String, required: true },
});

const { t } = useI18n();

const title = t("seasons.season.subtitles.specialties");
</script>

<template>
  <div class="specialties">
    <h2>{{ title }}</h2>
    <p class="red">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.specialties {
  text-align: center;
  width: 100%;
  background-color: $orange-light;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding-bottom: 20px;
  }
  p {
    max-width: 1200px;
  }
}
</style>
