<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { CarouselSlide } from "../interface/Carousel";
import BaseCarousel from "@/general/components/BaseCarousel.vue";
import HomePresentation from "../components/HomePresentation.vue";
import HomeDifficulties from "../components/HomeDifficulties.vue";
import HomeSolution from "../components/HomeSolution.vue";
import HomeAppointment from "../components/HomeAppointment.vue";

const slidesData: Ref<CarouselSlide[]> = ref([]);

onMounted(async () => {
  slidesData.value = await sanityClient.fetch(`*[_type == "carouselItem"]{
    _id,
    title,
    description,
    image,
    link
  }`);
});
</script>

<template>
  <BaseCarousel :slides="slidesData" ariaLabel="Carrousel d'images" />
  <div class="container">
    <HomePresentation />
    <HomeDifficulties />
    <HomeSolution />
    <HomeAppointment />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
