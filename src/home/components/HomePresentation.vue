<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import isabelleImage from "@/assets/illustrations/isabelle-small.jpg";
import Button from "@/components/Button.vue";
import { aboutRoutesName } from "@/about/routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

const aboutMeLabel = t("home.presentation.learnAboutMe");

function goToKnowMore() {
  router.push({ name: aboutRoutesName.HOME });
}
</script>

<template>
  <div class="presentation">
    <div class="presentation-image">
      <img :src="isabelleImage" class="presentation-image-content" />
    </div>

    <div class="presentation-content">
      <h2 class="title">{{ t("home.presentation.title") }}</h2>
      <p class="text">{{ tm("home.presentation.text")[0] }}</p>
      <p>{{ tm("home.presentation.text")[1] }}</p>
      <p>{{ tm("home.presentation.text")[2] }}</p>
      <Button class="button" :label="aboutMeLabel" background="green" @click="goToKnowMore()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.presentation {
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  &-image {
    width: 40%;
    padding: 5vw;
    background-color: $green;
    @media (max-width: 768px) {
      width: 100%;
    }
    &-content {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 5px;
    }
  }

  &-content {
    width: 60%;
    background-color: $orange-light;
    padding: 30px 5%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
    .title {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
    .button {
      margin-top: 20px;
    }
  }
}
</style>
