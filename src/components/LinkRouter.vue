<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  label: { type: String, required: true },
  to: { type: String, required: true },
  isUnderline: { type: Boolean, default: false },
});
</script>

<template>
  <RouterLink :class="['router-link', { underline: isUnderline }]" :to="{ name: to }">{{
    label
  }}</RouterLink>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.router-link {
  text-decoration: none;
  cursor: pointer;
  color: $brown-dark;
}
.underline {
  text-decoration: underline;
}
</style>
