<script setup lang="ts">
import { useI18n } from "vue-i18n";
import WhySection from "@/practices/components/OfficeSession/WhySection.vue";
import SummarySection from "@/practices/components/OfficeSession/SummarySection.vue";
import SessionDetail from "@/practices/components/OfficeSession/SessionDetail.vue";
import RhythmSection from "@/practices/components/OfficeSession/RhythmSection.vue";
import AfterSection from "@/practices/components/OfficeSession/AfterSection.vue";

const { t } = useI18n();

const sessionTypes = ["reflexo", "tuina"];
</script>

<template>
  <div class="office-session">
    <header class="office-session__header">
      <div class="office-session__header-overlay">
        <h1 class="office-session__title">{{ t("practices.insideSessionPage.title") }}</h1>
        <p>{{ t("practices.insideSessionPage.subtitle") }}</p>
      </div>
    </header>

    <WhySection />
    <SummarySection />

    <div v-for="sessionType in sessionTypes" :key="sessionType">
      <SessionDetail :session-type="sessionType" />
      <RhythmSection :session-type="sessionType" />
    </div>

    <AfterSection />
  </div>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session {
  &__header {
    width: 100%;
    height: 40vh;
    margin-top: 60px;
    background-image: url("@/assets/illustrations/practices/inside/reflexo-pied.png");
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
