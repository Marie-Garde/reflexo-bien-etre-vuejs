<script setup lang="ts">
import { computed, onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import Specialties from "@/season/components/Specialties.vue";
import AdvicesSeasons from "@/season/components/AdvicesSeasons.vue";
import Recipes from "@/season/components/Recipes.vue";
import { urlFor } from "@/sanityClient";
import { useSeasonStore } from "../stores/seasonContent";

const store = useSeasonStore();
const { seasons } = storeToRefs(store);

const content = computed(() => seasons.value.summer ?? null);

onServerPrefetch(() => store.load("summer"));
onMounted(() => store.load("summer"));

const headerImage = computed(() =>
  content.value
    ? urlFor(content.value.headerImage).width(1920).format("webp").quality(75).url()
    : "",
);
</script>

<template>
  <main v-if="content">
    <div class="header">
      <img
        :src="headerImage"
        :alt="content.headerImage.alt ?? ''"
        class="header-image"
        fetchpriority="high"
      />
      <div class="header-container">
        <div class="header-overlay">
          <h1 class="title">{{ content.title }}</h1>
          <p>{{ content.subtitle }}</p>
        </div>
      </div>
    </div>

    <div class="container">
      <Specialties :section="content.specialties" background="yellow" />

      <AdvicesSeasons :section="content.advices" />

      <Recipes :section="content.recipes" background="orange" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  position: relative;
  width: 100%;
  height: 70vh;
  box-shadow: 0px 5px 5px $dark-grey;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &-container {
    width: 100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  &-overlay {
    width: 50%;
    max-width: 600px;
    padding: 2rem;
    margin-bottom: 5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    text-align: left;
  }
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 100px 0 0 0;

    &-container {
      width: 100%;
    }

    &-overlay {
      width: 100%;
      margin-bottom: 0;
      text-align: center;
      border-radius: 0;
      background: rgba(255, 255, 255, 0.6);

      h1 {
        margin: 0 auto 20px auto;
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .header {
    &-overlay {
      width: 70%;
      margin: 0 auto 2vw auto;
      border-radius: 10px;
      text-align: center;
    }
  }
}
</style>
