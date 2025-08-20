<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import { sanityClient } from "@/sanityClient";
import type { CarouselSlide } from "../interface/Carousel";
import Carousel from "@/general/components/Carousel.vue";
import HomePresentation from "../components/HomePresentation.vue";
import HomeDifficulties from "../components/HomeDifficulties.vue";
import HomeSolution from "../components/HomeSolution.vue";
import HomeAppointment from "../components/HomeAppointment.vue";
import HomeFeedbacks from "../components/HomeFeedbacks.vue";

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
  <Carousel :slides="slidesData" />
  <div class="container">
    <HomePresentation />
    <HomeDifficulties />
    <HomeSolution />
    <HomeAppointment />
    <HomeFeedbacks />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>