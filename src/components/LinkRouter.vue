<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  label: { type: String, required: true },
  to: { type: String, required: true },
});
</script>

<template>
  <RouterLink class="router-link" :to="{ name: to }">{{ label }}</RouterLink>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.router-link {
  text-decoration: none;
  cursor: pointer;
  color: $brown-dark;
}
</style>
