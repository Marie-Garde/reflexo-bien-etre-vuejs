<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();

const type = t("price.type[2]");
</script>

<template>
  <div class="price-type">
    <div class="type">
      <h2>{{ t("price.type[2].title") }}</h2>
      <div class="cards-container">
        <div v-for="(price, index) in tm('price.type[2].prices')" :key="index" class="card">
          <h3>{{ price.title }}</h3>
          <p class="label">{{ t("price.type[2].label.faceToFace") }}</p>
          <p class="price">{{ price.faceToFace }}</p>
          <p class="label">{{ t("price.type[2].label.online") }}</p>
          <p class="price">{{ price.online }}</p>
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
    width: 300px;
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
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
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
      &:first-child::before {
        background-image: url("@/assets/illustrations/price/Qigong1.png");
      }
      &:nth-child(2)::before {
        background-image: url("@/assets/illustrations/price/Qigong2.png");
      }
      &:nth-child(3)::before {
        background-image: url("@/assets/illustrations/price/Qigong3.png");
      }
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
