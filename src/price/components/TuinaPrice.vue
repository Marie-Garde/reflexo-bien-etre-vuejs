<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const pricesTuina = tm("price.type")[1];
</script>

<template>
  <div class="type">
    <h2>{{ pricesTuina.title }}</h2>
    <div class="cards-container">
      <div v-for="(price, index) in pricesTuina.prices" :key="index" class="card">
        <h3>{{ price.title }}</h3>
        <p v-if="price.time" class="time">{{ price.time }}</p>
        <p v-if="price.price" class="price">{{ price.price }}</p>
        <p v-if="price.description" class="description">{{ price.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.type {
  h2 {
    margin-bottom: 40px;
  }

  .cards-container {
    display: flex;
    gap: 2rem;
    justify-content: start;
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
      height: 50px;
    }
    .time {
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

    &:first-child::before {
      background-image: url("/illustrations/price/tuina1.png");
    }
    &:nth-child(2)::before {
      background-image: url("/illustrations/price/tuina2.png");
    }
    &:nth-child(3)::before {
      background-image: url("/illustrations/price/tuina3.png");
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