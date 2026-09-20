<script setup lang="ts">
import type { PropType } from "vue";
import { urlFor } from "@/sanityClient";
import type { PriceContent } from "../interface/PriceContent";
import type { SanityImage } from "@/home/interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<PriceContent["qiGong"]>, required: true },
});

function cardStyle(image: SanityImage) {
  const url = urlFor(image).width(900).format("webp").quality(80).url();
  return { "--card-image": `url("${url}")` };
}
</script>

<template>
  <div class="price-type">
    <div class="type">
      <h2>{{ props.section.title }}</h2>
      <div class="cards-container">
        <div
          v-for="item in props.section.items"
          :key="item._key"
          class="card"
          :style="cardStyle(item.image)"
        >
          <h3>{{ item.title }}</h3>
          <p class="label">{{ props.section.faceToFaceLabel }}</p>
          <p class="price">{{ item.faceToFace }}</p>
          <p class="label">{{ props.section.onlineLabel }}</p>
          <p class="price">{{ item.online }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.price-type {
  width: 100%;
}

.type {
  h2 {
    margin-bottom: 40px;
  }

  .cards-container {
    display: flex;
    gap: 2rem;
    justify-content: start;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  .card {
    position: relative;
    border: 1px solid $brown-dark;
    border-radius: 8px;
    padding: 1.5rem;
    width: 250px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: $white;
    box-shadow: 0 5px 5px $dark-grey;
    overflow: hidden;

    h3 {
      margin-bottom: 30px;
      z-index: 1;
      height: 70px;
    }
    .label {
      font-style: italic;
      margin-bottom: 30px;
      z-index: 1;
    }
    .price {
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
      z-index: 1;
      height: 80px;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-image: var(--card-image);
      background-size: cover;
      background-position: center;
      transform-origin: center;
      transform: scale(1);
      transition: transform 0.5s ease;
      z-index: 0;
      opacity: 0.3;
      border-radius: inherit;
    }

    &:hover::before {
      transform: scale(1.08);
    }
  }

  &:first-child {
    .card {
    }
  }
}

@media (max-width: 768px) {
  .type {
    text-align: center;
    .cards-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .card {
        width: 90%;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .type {
    margin-left: 40px;
  }
}
</style>
