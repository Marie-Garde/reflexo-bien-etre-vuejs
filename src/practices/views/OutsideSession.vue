<script setup lang="ts">
import { useI18n } from "vue-i18n";
import qiGongClassImg from "@/assets/illustrations/practices/outside/qi-gong-class.jpg";
import qiGongOutsideImg from "@/assets/illustrations/practices/outside/qi-gong-outside.jpg";
import PracticeSection from "@/practices/components/OutsideSession/PracticeSection.vue";
import SessionSection from "@/practices/components/OutsideSession/SessionSection.vue";
import WhySection from "@/practices/components/OutsideSession/WhySection.vue";
import WhoSection from "@/practices/components/OutsideSession/WhoSection.vue";
import HowSection from "@/practices/components/OutsideSession/HowSection.vue";

const { t } = useI18n();
</script>

<template>
  <div class="outside-session">
    <header class="outside-session__header">
      <div class="outside-session__header-overlay">
        <h1 class="outside-session__title">{{ t("practices.outsideSessionPage.title") }}</h1>
        <p>{{ t("practices.outsideSessionPage.subtitle") }}</p>
      </div>
    </header>

    <div class="infos">
      <PracticeSection :image="qiGongClassImg" />
      <SessionSection :image="qiGongOutsideImg" />
    </div>

    <WhySection />
    <WhoSection />
    <HowSection />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.outside-session {
  &__header {
    width: 100%;
    height: 40vh;
    margin-top: 60px;
    background-image: url("@/assets/illustrations/practices/outside/women-qi-gong.png");
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
