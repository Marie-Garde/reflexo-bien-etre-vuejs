<script setup lang="ts">
import { useI18n } from "vue-i18n";
import yinYangImage from "@/assets/illustrations/Yin_yang.png";
import isabelleImage from "@/assets/illustrations/isabelle.jpg";
import LinkRouter from "@/components/LinkRouter.vue";
import Button from "@/components/Button.vue";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

const difficultiesList = tm("home.difficulties");
const takeAppointmentLabel = t("home.solution.button.takeAppointment");
const learnMoreLabel = t("home.solution.button.learnAboutActivities");
const aboutMeLabel = t("home.presentation.learnAboutMe");

const practicesRouteName = practicesRoutesName.HOME;

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}

function goToKnowMore() {
  router.push({ name: aboutRoutesName.HOME });
}
</script>

<template>
  <p class="citation">{{ t("home.citation") }}</p>

  <div class="difficulties">
    <div v-for="(difficulty, index) in difficultiesList" :key="index" class="list-difficulties">
      <img class="list-difficulties-img" :src="yinYangImage" />
      <p>{{ difficulty }}</p>
    </div>
  </div>

  <div class="solution-presentation">
    <div class="solution-presentation-overlay">
      <h2>{{ t("home.solution.title") }}</h2>
      <p class="text">{{ t("home.solution.text") }}</p>
      <div class="link-to">
        <Button
          class="link-to-button"
          :label="takeAppointmentLabel"
          background="orange"
          @click="goToAppointment()"
        />
        <LinkRouter :label="learnMoreLabel" is-underline :to="practicesRouteName" />
      </div>
    </div>
  </div>

  <div class="presentation">
    <div class="green-box">
      <div class="green-box-content">
        <h2 class="title">{{ t("home.presentation.title") }}</h2>
        <p class="text">{{ tm("home.presentation.text")[0] }}</p>
        <p>{{ tm("home.presentation.text")[1] }}</p>
        <Button
          class="button"
          :label="aboutMeLabel"
          background="orange-light"
          @click="goToKnowMore()"
        />
      </div>
    </div>
    <img :src="isabelleImage" class="overlapping-image" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.citation {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.difficulties {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  .list-difficulties {
    display: flex;
    flex-direction: column;
    align-items: center;
    &-img {
      width: 50px;
    }
  }
}

.solution-presentation {
  width: 100%;
  height: 400px;
  background-image: url("@/assets/illustrations/medecine-chinoise.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0px 5px 5px $dark-grey;
  &-overlay {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    text-align: left;
    .text {
      margin-top: 20px;
    }
    .link-to {
      margin-top: 20px;
      &-button {
        margin-right: 20px;
      }
    }
  }
}

.presentation {
  position: relative;
  width: 100%;
  height: 500px;
  margin-top: 100px;
  margin-bottom: 150px;

  .green-box {
    width: 60%;
    height: 100%;
    background-color: $green;
    position: absolute;
    top: 20%;
    left: 40%;
    box-shadow: 0px 5px 5px $dark-grey;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: end;
    &-content {
      width: 80%;
      .title {
        margin-bottom: 24px;
      }
      .text {
        margin-bottom: 12px;
      }
      .button {
        margin-top: 24px;
      }
    }
  }

  :deep(.btn-orange-light) {
    padding: 20px;
    width: 100%;
  }

  .overlapping-image {
    width: 50%;
    height: auto;
    position: absolute;
    top: 20%;
    left: 10%;
    transform: translate(-20%, -20%);
    box-shadow: 0px 5px 5px $dark-grey;
  }
}
</style>
