<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { PropType } from "vue";
import type { CarouselSlide } from "../interface/Carousel";
import { urlFor } from "@/sanityClient";
import { useI18n } from "vue-i18n";

const props = defineProps({
  slide: { type: Object as PropType<CarouselSlide>, required: true },
  currentSlide: { type: Number, required: true },
  index: { type: Number, required: true },
  direction: { type: String, required: true },
});

const { direction } = toRefs(props);

const { t } = useI18n();

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
      <img :src="urlFor(slide.image).url()" />
      <img :src="slide.image" />
      <div class="carousel-item-informations">
        <h2 class="red">{{ slide.title }}</h2>
        <p class="red">{{ slide.description }}</p>
        <a v-if="slide.link" :href="`${slide.link}`" class="carousel-item-link">{{
          t("home.carousel.link")
        }}</a>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &-informations {
    width: 100%;
    height: 30%;
    background: rgba(38, 38, 38, 0.8);
    color: $white-soft;
    padding: 1em;
    position: absolute;
    transform: translate(-50%);
    left: 50%;
    bottom: 0;
    z-index: 2;
  }

  &-link {
    text-decoration: underline 1px;
    cursor: pointer;
    color: $white;
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
  transform: translateX(-100%);
}
</style>
