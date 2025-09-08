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
    <header class="header">
      <div class="header-overlay">
        <h1 class="title">{{ t("practices.outsideSessionPage.title") }}</h1>
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

.header {
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
    left: 0;
    margin-left: 120px;
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
</style>