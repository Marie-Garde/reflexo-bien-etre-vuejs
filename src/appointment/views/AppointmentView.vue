<script setup lang="ts">
import AppointmentHeader from "../components/AppointmentHeader.vue";
import AppointmentSelect from "../components/AppointmentSelect.vue";
</script>

<template>
  <AppointmentHeader />

  <main>
    <AppointmentSelect />
  </main>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;
</style>
