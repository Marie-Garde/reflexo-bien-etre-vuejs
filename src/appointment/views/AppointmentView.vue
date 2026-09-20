<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import AppointmentHeader from "../components/AppointmentHeader.vue";
import AppointmentSelect from "../components/AppointmentSelect.vue";
import { useAppointmentContentStore } from "../stores/appointmentContent";

const store = useAppointmentContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <template v-if="content">
    <AppointmentHeader :section="content.header" />

    <main>
      <AppointmentSelect :label="content.selectLabel" :options="content.options" />
    </main>
  </template>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;
</style>
