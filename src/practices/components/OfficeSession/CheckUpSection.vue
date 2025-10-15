<script setup lang="ts">
import { useI18n } from "vue-i18n";
import checkupImage from "@/assets/illustrations/practices/inside/bilan.png";

const { t, tm } = useI18n();

const text = tm("practices.insideSessionPage.checkup.text");
const title = t("practices.insideSessionPage.checkup.title");
</script>

<template>
  <section class="office-session__checkup" :style="{ backgroundImage: `url(${checkupImage})` }">
    <div class="office-session__checkup-overlay"></div>
    <div class="office-session__checkup-text">
      <h2 class="office-session__checkup-title">{{ title }}</h2>
      <p v-for="(paragraph, index) in text" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__checkup {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: $white;
  overflow: hidden;

  &-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  &-text {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 1280px;
    padding: 60px 40px;

    h2 {
      margin-bottom: 30px;
      font-size: 2rem;
    }

    p {
      margin-bottom: 15px;
      font-size: 1.1rem;
      line-height: 1.6;
    }
  }
}

@media (max-width: 768px) {
  .office-session__checkup {
    min-height: 70vh;

    &-text {
      padding: 40px 20px;

      h2 {
        font-size: 1.6rem;
      }

      p {
        max-width: 90%;
        margin: 15px auto;
        font-size: 1rem;
      }
    }
  }
}
</style>
