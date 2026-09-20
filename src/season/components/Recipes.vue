<script setup lang="ts">
import type { PropType } from "vue";
import type { SeasonContent } from "../interface/SeasonContent";

const props = defineProps({
  section: { type: Object as PropType<SeasonContent["recipes"]>, required: true },
  background: { type: String, required: true },
});
</script>

<template>
  <div :class="['container', `${props.background}`]">
    <h2>{{ props.section.title }}</h2>
    <!-- La liste de recettes est saisie dans le Studio mais pas encore affichée. -->
    <p>{{ props.section.placeholder }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  padding: 60px 0;
  color: $white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding-bottom: 20px;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    width: 90%;
    max-width: 1280px;
    li {
      margin-bottom: 10px;
    }
  }
}

.yellow {
  background-color: $orange-white;
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

@media (max-width: 768px) {
  .container {
    text-align: center;
  }
}
</style>
