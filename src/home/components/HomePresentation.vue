<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import isabelleImage from "/illustrations/isabelle-small.png";
import Button from "@/components/Button.vue";
import { aboutRoutesName } from "@/about/routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

const aboutMeLabel = t("home.presentation.learnAboutMe");
const presentationText = tm("home.presentation.text");

function goToKnowMore() {
  router.push({ name: aboutRoutesName.HOME });
}
</script>

<template>
  <div class="presentation">
    <div class="presentation-image">
      <img :src="isabelleImage" class="presentation-image-content" alt="Portrait d’Isabelle" />
    </div>

    <div class="presentation-content">
      <h2 class="presentation-content-title">{{ t("home.presentation.title") }}</h2>
      <div
        v-for="(paragraph, index) in presentationText"
        :key="index"
        class="presentation-content-text"
      >
        <div v-html="paragraph"></div>
      </div>
      <Button class="button" :label="aboutMeLabel" background="green" @click="goToKnowMore()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.presentation {
  display: flex;
  width: 100%;

  &-image {
    width: 40%;
    padding: 5vw;
    background-color: $green;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &-content {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
      transition: transform 3s ease;
      transform: scale(1.05);

      &:hover {
        transform: scale(1.1);
      }
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

    &-title {
      margin-bottom: 20px;
    }
    &-text {
      margin-bottom: 20px;
    }
    .button {
      margin-top: 20px;
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 768px) {
  .presentation {
    flex-direction: column-reverse;

    &-image {
      width: 100%;
    }

    &-content {
      width: 100%;
    }
  }
}
</style>
