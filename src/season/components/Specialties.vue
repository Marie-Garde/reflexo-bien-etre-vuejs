<script setup lang="ts">
import type { PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import type { SeasonContent } from "../interface/SeasonContent";

const props = defineProps({
  section: { type: Object as PropType<SeasonContent["specialties"]>, required: true },
  background: { type: String, required: true },
});
</script>

<template>
  <div :class="['specialties', `${props.background}`]">
    <h2>{{ props.section.title }}</h2>
    <PortableText as="div" :blocks="props.section.body" paragraph-class="specialties-text" />
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
  // Paragraphes rendus par PortableText : :deep() est nécessaire.
  :deep(.specialties-text) {
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
    :deep(.specialties-text) {
      max-width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
