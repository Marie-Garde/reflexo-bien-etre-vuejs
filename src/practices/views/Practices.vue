<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPage from "@/components/HeaderPage.vue";
import AccordionItem from "@/components/AccordionItem.vue";
import massageImage from "@/assets/illustrations/massage.jpg";
import reflexoImage from "@/assets/illustrations/reflexo.jpg";
import qiGongImage from "@/assets/illustrations/qi-gong.jpg";
import reflexoPlantaireImage from "@/assets/illustrations/reflexo-plantaire.jpg";

const { t, tm } = useI18n();

const title = t("practices.title");
const benefitsList = tm("practices.benefits.list");
const sessionProgressList = tm("practices.sessionProgress.list");
</script>

<template>
  <HeaderPage :label="title" background="orange" />

  <div class="container">
    <div class="content">
      <div class="presentation">
        <h2>{{ t("practices.presentation.title") }}</h2>
        <p class="text">{{ tm("practices.presentation.text")[0] }}</p>
        <p>{{ tm("practices.presentation.text")[1] }}</p>
        <p>{{ tm("practices.presentation.text")[2] }}</p>
      </div>

      <div class="benefits">
        <h2>{{ t("practices.benefits.title") }}</h2>
        <ul class="benefits-list">
          <li v-for="benefit in benefitsList">
            <AccordionItem :title="benefit.title">
              <div v-html="benefit.text"></div>
            </AccordionItem>
          </li>
        </ul>
      </div>

      <div class="pillars">
        <h2>{{ t("practices.pillars.title") }}</h2>
        <ul class="pillars-list">
          <li>
            <div class="pillars-list-wrapper">
              <img :src="reflexoImage" class="pillars-list-image" />
              <p class="pillars-list-label">{{ tm("practices.pillars.list")[0] }}</p>
            </div>
          </li>
          <li>
            <div class="pillars-list-wrapper">
              <img :src="qiGongImage" class="pillars-list-image" />
              <p class="pillars-list-label">{{ tm("practices.pillars.list")[1] }}</p>
            </div>
          </li>
        </ul>
        <p class="red">{{ t("practices.pillars.text") }}</p>
      </div>

      <div class="sessionProgress">
        <div class="sessionProgress-content">
          <h2>{{ t("practices.sessionProgress.title") }}</h2>

          <div class="cards-container">
            <div class="card" v-for="text in sessionProgressList">
              <div class="card-content">
                <h3>{{ text.title }}</h3>
                <p>{{ text.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

strong {
  font-style: bold;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;

    .presentation {
      max-width: 70%;
      margin: 60px auto;
      .text {
        margin-top: 50px;
      }
    }

    .benefits {
      width: 100%;
      background-color: $green;
      padding: 60px 0;
      &-list {
        list-style: none;
        padding: 0;
        width: 70%;
        margin: 0 auto;
      }
    }

    .pillars {
      margin: 60px auto;
    }

    .pillars-list {
      margin: 30px 0;
      list-style: none;
      height: fit-content;
      display: flex;
      justify-content: space-between;
      padding: 0;

      &-wrapper {
        position: relative;
        width: 250px;
        height: 250px;
        cursor: pointer;

        &:hover {
          .pillars-image {
            opacity: 100%;
            transition: opacity 0.2s ease-in-out;
          }

          .pillars-label {
            color: $white;
            transition: color 0.2s ease-in-out;
          }
        }
      }

      &-image {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        opacity: 50%;
        object-fit: cover;
      }

      &-label {
        position: absolute;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $black;
        text-align: center;
        font-size: 24px;
      }
    }
  }
}

.sessionProgress {
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/illustrations/reflexo-plantaire.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0px 5px 5px $dark-grey;
  display: flex;
  justify-content: center;

  &-content {
    position: relative;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 1;
    h2 {
      margin-bottom: 3vw;
    }

    .cards-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      padding-bottom: 50px;
      .card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 20%;
        padding: 15px;
        background: rgba(246, 246, 246, 0.9);
        border-radius: 8px;
        text-align: center;
        &-content {
          margin: 0 10px;
          h3 {
            margin-bottom: 5%;
          }
        }
      }
    }
  }
}
</style>
