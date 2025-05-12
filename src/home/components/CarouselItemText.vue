<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { PropType } from "vue";
import type { CarouselSlideText } from "../interface/Carousel";

const props = defineProps({
  slide: { type: Object as PropType<CarouselSlideText>, required: true },
  currentSlide: { type: Number, required: true },
  index: { type: Number, required: true },
  direction: { type: String, required: true },
});

const { direction } = toRefs(props);

const emit = defineEmits(["mouseEnter", "mouseLeave"]);

const transitionEffect = computed(() => {
  return direction.value === "right" ? "slide-out" : "slide-in";
});
</script>

<template>
  <Transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="emit('mouseEnter')"
      @mouseout="emit('mouseLeave')"
    >
      <div class="carousel-item-informations">
        <p class="red text">"{{ slide.text }}"</p>
        <p class="red">{{ slide.subText }}</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;
.carousel-item {
  position: absolute;
  width: 100%;
  top: 25%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;

  &-informations {
    width: 50%;
    height: 30%;
    color: $brown-dark;
    padding: 1em;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 50%;
    z-index: 2;

    .text {
      margin-bottom: 20px;
    }
  }
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%);
}

.slide-in-leave-to {
  transform: translateX(100%);
}

.slide-out-enter-from {
  transform: translateX(100%);
}

.slide-out-leave-to {
  transform: translateX(-150%);
}
</style>
