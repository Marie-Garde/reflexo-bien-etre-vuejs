<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import BaseCarousel from "@/general/components/BaseCarousel.vue";
import HomePresentation from "../components/HomePresentation.vue";
import HomeDifficulties from "../components/HomeDifficulties.vue";
import HomeSolution from "../components/HomeSolution.vue";
import HomeAppointment from "../components/HomeAppointment.vue";
import { useHomeContentStore } from "../stores/homeContent";

const store = useHomeContentStore();
const { content, slides } = storeToRefs(store);

// Au build : grave le contenu dans le HTML. Au chargement : récupère les
// dernières modifications faites dans Sanity.
onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
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
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
