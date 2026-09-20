<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import AboutHeader from "../components/AboutHeader.vue";
import AboutApproach from "../components/AboutApproach.vue";
import AboutCTA from "../components/AboutCTA.vue";
import AboutCareer from "../components/AboutCareer.vue";
import AboutTraining from "../components/AboutTraining.vue";
import { useAboutContentStore } from "../stores/aboutContent";

const store = useAboutContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <main class="about" v-if="content">
    <AboutHeader :section="content.header" />
    <AboutApproach :section="content.approach" />
    <AboutCTA :section="content.cta" />
    <AboutCareer :section="content.career" />
    <AboutTraining :section="content.training" />
  </main>
</template>
