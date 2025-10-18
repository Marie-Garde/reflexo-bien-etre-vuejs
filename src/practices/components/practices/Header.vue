<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("practices.title") }}</h1>
      <h2 class="subTitle">{{ t("practices.presentation.title") }}</h2>
      <p>{{ tm("practices.presentation.text")[0] }}</p>
      <p>{{ tm("practices.presentation.text")[1] }}</p>
      <p>{{ tm("practices.presentation.text")[2] }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  min-height: 60vh;
  height: auto;
  background-image: url("@/assets/background/practiceBackground.png");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  &-overlay {
    margin: 60px auto;
    max-width: 1280px;
    width: 100%;
    color: $white;
    text-align: left;
  }

  .title {
    margin-bottom: 50px;
  }

  .subTitle {
    margin-bottom: 40px;
  }

  p {
    max-width: 60%;
    padding-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .header {
    height: auto;
    background-image: none;
    display: block;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 250px;
      background-image: url("@/assets/background/practiceBackgroundMobile.png");
      background-size: cover;
      background-position: center;
    }

    &-container {
      align-items: center;
      justify-content: center;
    }
    &-overlay {
      width: 90%;
      margin: 0 auto;
      padding: 40px 0;
      text-align: center;
      background: transparent;
      box-shadow: none;
      color: $brown-dark;
    }
    p {
      max-width: 100%;
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .header-overlay {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
