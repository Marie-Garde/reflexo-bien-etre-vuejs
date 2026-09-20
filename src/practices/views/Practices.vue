<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { practicesRoutesName } from "../routes/routesName";

import Header from "../components/practices/Header.vue";
import Benefits from "../components/practices/Benefits.vue";
import Pillars from "../components/practices/Pillars.vue";
import SessionProgress from "../components/practices/SessionProgress.vue";
import { usePracticesContentStore } from "../stores/practicesContent";

const router = useRouter();
const store = usePracticesContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);

function GoToInsideCare() {
  router.push({ name: practicesRoutesName.OFFICE });
}

function GoToOutsideCare() {
  router.push({ name: practicesRoutesName.OUTSIDE });
}
</script>

<template>
  <template v-if="content">
    <Header :section="content.header" />
    <Benefits :section="content.benefits" />
    <Pillars
      :section="content.pillars"
      :goToInsideCare="GoToInsideCare"
      :goToOutsideCare="GoToOutsideCare"
    />
    <SessionProgress :section="content.sessionProgress" />
  </template>
</template>
