<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import BaseCarousel from "@/general/components/BaseCarousel.vue";
import HomePresentation from "../components/HomePresentation.vue";
import HomeDifficulties from "../components/HomeDifficulties.vue";
import HomeSolution from "../components/HomeSolution.vue";
import HomeAppointment from "../components/HomeAppointment.vue";
import HomeArticles from "../components/HomeArticles.vue";
import { useHomeContentStore } from "../stores/homeContent";

const store = useHomeContentStore();
const { content, slides, latestArticles } = storeToRefs(store);

// Au build : grave le contenu dans le HTML. Au chargement : récupère les
// dernières modifications faites dans Sanity.
onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <h1 v-if="content" class="visually-hidden">{{ content.pageHeading }}</h1>
  <BaseCarousel
    :slides="slides"
    :link-label="content?.carouselLinkLabel ?? ''"
    ariaLabel="Carrousel d'images"
  />
  <div class="container" v-if="content">
    <HomePresentation :section="content.presentation" />
    <HomeDifficulties :section="content.difficulties" />
    <HomeSolution :section="content.solution" />
    <HomeAppointment :section="content.appointment" />
    <HomeArticles :section="content.latestArticles" :articles="latestArticles" />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
