<script setup lang="ts">
import { useI18n } from "vue-i18n";
import checkupImage from "@/assets/illustrations/practices/inside/bilan.png";

const { t, tm } = useI18n();

const text = t("practices.insideSessionPage.checkup.text");
const title = t("practices.insideSessionPage.checkup.title");
</script>

<template>
  <section class="office-session__checkup">
    <img :src="checkupImage" alt="" />
    <div class="office-session__checkup-text">
      <h2 class="office-session__checkup-title">{{ title }}</h2>
      <p>{{ text }}</p>
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

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    opacity: 0.3;
  }

  .office-session__checkup-text {
    position: absolute;
    text-align: center;
    max-width: 1280px;
    h2 {
      margin-bottom: 30px;
    }
  }
}

@media (max-width: 768px) {
  .office-session__checkup {
    width: 100%;

    img {
      height: 50vh;
    }
    p {
      max-width: 90%;
      margin: 20px auto;
    }
  }
}
</style>
