<script setup lang="ts">
import { computed, onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { urlFor } from "@/sanityClient";
import WhySection from "@/practices/components/OfficeSession/WhySection.vue";
import SummarySection from "@/practices/components/OfficeSession/SummarySection.vue";
import SessionDetail from "@/practices/components/OfficeSession/SessionDetail.vue";
import RhythmSection from "@/practices/components/OfficeSession/RhythmSection.vue";
import AfterSection from "@/practices/components/OfficeSession/AfterSection.vue";
import CheckUpSection from "../components/OfficeSession/CheckUpSection.vue";
import { useOfficeSessionStore } from "../stores/sessionContent";

const store = useOfficeSessionStore();
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
  <div class="office-session" v-if="content">
    <header class="office-session__header" :style="headerBackground">
      <div class="office-session__header-overlay">
        <h1 class="office-session__title">{{ content.header.title }}</h1>
        <p>{{ content.header.subtitle }}</p>
      </div>
    </header>

    <WhySection :section="content.why" />
    <SummarySection :section="content.summary" />

    <div v-for="session in content.sessions" :key="session._key">
      <SessionDetail :session="session" />
      <RhythmSection :rhythm="session.rhythm" />
    </div>
    <CheckUpSection :section="content.checkup" />
    <AfterSection :section="content.after" />
  </div>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session {
  &__header {
    width: 100%;
    min-height: 60vh;
    height: auto;
    margin-top: 60px;
    background-image: url("/illustrations/practices/inside/reflexo-pied.png");
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
}

.office-session__section-title {
  margin: 80px 0 40px 0;
  text-align: center;
}

@media (max-width: 768px) {
  .office-session {
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
  .office-session {
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
