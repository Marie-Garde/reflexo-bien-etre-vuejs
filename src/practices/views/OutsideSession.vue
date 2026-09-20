<script setup lang="ts">
import { computed, onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { urlFor } from "@/sanityClient";
import PracticeSection from "@/practices/components/OutsideSession/PracticeSection.vue";
import SessionSection from "@/practices/components/OutsideSession/SessionSection.vue";
import WhySection from "@/practices/components/OutsideSession/WhySection.vue";
import WhoSection from "@/practices/components/OutsideSession/WhoSection.vue";
import HowSection from "@/practices/components/OutsideSession/HowSection.vue";
import { useOutsideSessionStore } from "../stores/sessionContent";

const store = useOutsideSessionStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);

const headerBackground = computed(() => {
  if (!content.value) return {};
  const url = urlFor(content.value.header.backgroundImage)
    .width(1920)
    .format("webp")
    .quality(75)
    .url();
  return { backgroundImage: `url("${url}")` };
});
</script>

<template>
  <div class="outside-session" v-if="content">
    <header class="outside-session__header" :style="headerBackground">
      <div class="outside-session__header-overlay">
        <h1 class="outside-session__title">{{ content.header.title }}</h1>
        <p>{{ content.header.subtitle }}</p>
      </div>
    </header>

    <div class="infos">
      <PracticeSection :section="content.practice" />
      <SessionSection :section="content.session" :button-label="content.buttonLabel" />
    </div>

    <WhySection :section="content.why" />
    <WhoSection :section="content.who" />
    <HowSection :section="content.how" :button-label="content.buttonLabel" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.outside-session {
  &__header {
    width: 100%;
    min-height: 60vh;
    height: auto;
    margin-top: 60px;
    background-size: cover;
    background-position: top;
    position: relative;

    &-overlay {
      position: absolute;
      bottom: 10%;
      left: 10%;
      width: 50%;
      max-width: 600px;
      padding: 20px;
      background: rgba(72, 72, 72, 0.9);
      border-radius: 5px;
      text-align: left;
      color: $white;
    }
  }

  .infos {
    background-color: $orange-white;
  }
}

.outside-session__section-title {
  margin: 80px 0 40px 0;
  text-align: center;
}

@media (max-width: 768px) {
  .outside-session {
    &__header {
      height: 40vh;

      &-overlay {
        width: 90%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }
    }

    &__section-title {
      margin: 120px 0 40px 0;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .outside-session {
    &__header {
      &-overlay {
        width: 70%;
        left: 15%;
        text-align: center;
        h1 {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
