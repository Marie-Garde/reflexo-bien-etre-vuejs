<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t, tm } = useI18n();
</script>

<template>
  <div class="price-type">
    <div v-for="(type, index) in tm('price.type').slice(0, 2)" :key="index" class="type">
      <h2>{{ type.title }}</h2>
      <div class="cards-container">
        <div v-for="(price, index) in type.prices" :key="index" class="card">
          <h3>{{ price.title }}</h3>
          <p v-if="price.time" class="time">{{ price.time }}</p>
          <p v-if="price.price" class="price">{{ price.price }}</p>
          <p v-if="price.description" class="description">{{ price.description }}</p>
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
  }

  &:first-child {
    .card {
      &:first-child::before {
        background-image: url("@/assets/illustrations/price/reflexo1.png");
      }
      &:nth-child(2)::before {
        background-image: url("@/assets/illustrations/price/reflexo2.png");
      }
    }
  }

  &:nth-child(2) {
    .card {
      &:first-child::before {
        background-image: url("@/assets/illustrations/price/tuina1.png");
      }
      &:nth-child(2)::before {
        background-image: url("@/assets/illustrations/price/tuina2.png");
      }
    }
  }
}
</style>
