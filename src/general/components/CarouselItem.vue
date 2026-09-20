<script setup lang="ts">
import { computed, toRefs } from "vue";
import type { PropType } from "vue";
import { RouterLink } from "vue-router";
import type { CarouselSlide } from "../../home/interface/Carousel";
import { urlFor } from "@/sanityClient";

const props = defineProps({
  slide: { type: Object as PropType<CarouselSlide>, required: true },
  currentSlide: { type: Number, required: true },
  index: { type: Number, required: true },
  direction: { type: String, required: true },
  total: { type: Number, required: true },
  linkLabel: { type: String, default: "" },
});

const { direction } = toRefs(props);

const emit = defineEmits(["mouseEnter", "mouseLeave"]);

const transitionEffect = computed(() => {
  return direction.value === "right" ? "slide-out" : "slide-in";
});

const IMAGE_WIDTHS = [640, 1024, 1600, 2000];

function imageUrl(width: number) {
  return urlFor(props.slide.image).width(width).format("webp").quality(80).url();
}

const imageSrc = computed(() => imageUrl(1600));

const imageSrcset = computed(() =>
  IMAGE_WIDTHS.map((width) => `${imageUrl(width)} ${width}w`).join(", "),
);

const isFirstSlide = computed(() => props.index === 0);
</script>

<template>
  <Transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="emit('mouseEnter')"
      @mouseout="emit('mouseLeave')"
      role="group"
      aria-roledescription="slide"
      :aria-label="`Slide ${index + 1} de ${total}`"
    >
      <img
        :src="imageSrc"
        :srcset="imageSrcset"
        sizes="100vw"
        :alt="slide.description"
        :fetchpriority="isFirstSlide ? 'high' : 'low'"
        decoding="async"
      />
      <div class="carousel-item-informations">
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
        <RouterLink v-if="slide.link" :to="slide.link" class="carousel-item-link">{{
          props.linkLabel
        }}</RouterLink>
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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

    @media (max-width: 768px) {
      height: 40%;
    }
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
