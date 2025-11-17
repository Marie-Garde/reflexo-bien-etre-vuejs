<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LinkRouter from "@/components/LinkRouter.vue";
import { practicesRoutesName } from "@/practices/routes/routesName";
import TeaHerbsImage from "/illustrations/tea-herbs.jpg";

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
        <ul>
          <li v-for="(paragraph, index) in tm('home.solution.list')" :key="index">
            <div v-html="paragraph"></div>
          </li>
        </ul>
        <p class="text">{{ tm("home.solution.text")[3] }}</p>
        <p class="text">{{ tm("home.solution.text")[4] }}</p>

        <LinkRouter class="link" :label="learnMoreLabel" is-underline :to="practicesRouteName" />
      </div>
      <img :src="TeaHerbsImage" alt="Tasse de thé avec des herbes" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.overlay {
  width: 100%;
  height: auto;
  margin-top: 60px;
  background-image: url("@/assets/background/HomeSolutionBackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px 40px 20px;
  display: flex;
  justify-content: center;
}

.solution {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  &-text {
    width: 70%;
    color: $white;

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

    ul {
      margin-bottom: 20px;
    }
  }

  img {
    width: 60%;
    height: auto;
    border-radius: 5px;
  }
}

@media (max-width: 768px) {
  .overlay {
    height: auto;
    padding: 30px 20px 40px 20px;
  }

  .solution {
    flex-direction: column-reverse;
    gap: 30px;

    &-text {
      width: 90%;
      text-align: center;
    }

    img {
      width: 90%;
    }
  }
}
</style>
