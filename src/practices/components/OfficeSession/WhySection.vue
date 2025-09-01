<script setup lang="ts">
defineProps<{
  sections: Array<{
    key: string;
    title: string;
    text: string[];
    list: string[];
    image: string;
    alt: string;
  }>;
}>();
</script>

<template>
  <section class="office-session__why">
    <div v-for="section in sections" :key="section.key" class="why-card">
      <img class="why-card__image" :src="section.image" :alt="section.alt" />
      <h2 class="why-card__title-static">{{ section.title }}</h2>
      <div class="why-card__text-hover">
        <h2 class="why-card__title">{{ section.title }}</h2>
        <p v-for="(p, i) in section.text.slice(0, 3)" :key="i">{{ p }}</p>
        <ul class="why-card__list">
          <li v-for="(item, i) in section.list" :key="i">{{ item }}</li>
        </ul>
        <p>{{ section.text[3] }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__why {
  display: flex;
  width: 100%;

  .why-card {
    position: relative;
    width: 50%;
    height: 60vh;
    overflow: hidden;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &__title-static,
    &__text-hover {
      position: absolute;
      inset: 0;
      color: white;
      transition: opacity 0.3s ease;
    }

    &__title-static {
      background: rgba(0, 0, 0, 0.6);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      pointer-events: auto;
      z-index: 2;
    }

    &__text-hover {
      background: rgba(0, 0, 0, 0.9);
      opacity: 0;
      pointer-events: none;
      overflow-y: auto;
      z-index: 3;
      padding: 60px 80px;
    }

    &__title {
      margin-bottom: 40px;
    }

    p:nth-child(3),
    &__list {
      padding-bottom: 30px;
    }

    &:hover {
      .why-card__title-static {
        opacity: 0;
        pointer-events: none;
      }
      .why-card__text-hover {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}
</style>
