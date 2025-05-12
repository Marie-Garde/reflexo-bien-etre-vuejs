<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRefs, toRef } from "vue";
import type { PropType } from "vue";
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicatorsText from "./CarouselIndicatorsText.vue";
import type { CarouselSlideText } from "../interface/Carousel";
import CarouselItemText from "./CarouselItemText.vue";

const props = defineProps({
  slides: { type: Array as PropType<CarouselSlideText[]>, required: true },
});

const { slides } = toRefs(props);

const currentSlide = ref(0);
const slideInterval = ref(0);
const direction = ref("");

onMounted(() => {
  startSlideTimer();
});

onBeforeUnmount(() => {
  stopSlideTimer();
});

function startSlideTimer() {
  stopSlideTimer();
  slideInterval.value = setInterval(() => {
    _next();
  }, 5000);
}

function stopSlideTimer() {
  clearInterval(slideInterval.value);
}

function setCurrentSlide(index: number): void {
  currentSlide.value = index;
}

function _next() {
  const index = currentSlide.value < slides.value.length - 1 ? currentSlide.value + 1 : 0;
  setCurrentSlide(index);
  direction.value = "right";
}

function switchSlide(index: number) {
  currentSlide.value = index;
  startSlideTimer();
}
</script>

<template>
  <div class="carousel">
    <div class="carousel-inner">
      <CarouselItemText
        v-for="(slide, index) in slides"
        :key="`item-${index}`"
        :slide="slide"
        :current-slide="currentSlide"
        :index="index"
        :direction="direction"
        @mouse-enter="stopSlideTimer"
        @mouse-Leave="startSlideTimer"
      />
      <CarouselIndicatorsText
        :total="slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.carousel {
  display: flex;
  justify-content: center;

  .carousel-inner {
    position: relative;
    width: 100%;
    height: 25vh;
    overflow: hidden;
  }
}
</style>
