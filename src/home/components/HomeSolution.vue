<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LinkRouter from "@/components/LinkRouter.vue";
import { practicesRoutesName } from "@/practices/routes/routesName";
import TeaHerbsImage from "@/assets/illustrations/tea-herbs.png";

const { t, tm } = useI18n();

const learnMoreLabel = t("home.solution.button");
const practicesRouteName = practicesRoutesName.HOME;
</script>

<template>
  <div class="overlay">
    <div class="solution">
      <div class="solution-text">
        <h2 class="title">{{ t("home.solution.title") }}</h2>
        <p class="text">{{ tm("home.solution.text")[0] }}</p>
        <p class="text">{{ tm("home.solution.text")[1] }}</p>
        <p class="text">{{ tm("home.solution.text")[2] }}</p>
        <LinkRouter
          class="link"
          :label="learnMoreLabel"
          is-underline
          :to="practicesRouteName"
        />
      </div>
      <img :src="TeaHerbsImage" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.overlay {
  width: 100%;
  height: 60vh;
  margin-top: 60px;
  background-image: url("@/assets/background/HomeSolutionBackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px 40px 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 95vh;
    padding: 30px 20px 40px 20px;
  }
}

.solution {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
  }

  &-text {
    width: 70%;
    color: $white;
    @media (max-width: 768px) {
      width: 90%;
      text-align: center;
    }
    .title {
      margin-bottom: 30px;
    }
    .text {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 30px;
      }
    }
    .link {
      margin-top: 30px;
      color: $white;
    }
  }

  img {
    width: 60%;
    height: auto;
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}
</style>
