<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPage from "@/components/HeaderPage.vue";
import isabelleImage from "@/assets/illustrations/isabelle.jpg";
import massageImage from "@/assets/illustrations/massage.jpg";
import reflexoImage from "@/assets/illustrations/reflexo.jpg";
import qiGongImage from "@/assets/illustrations/qi-gong.jpg";

const { t, tm } = useI18n();

const title = t("about.title");
const presentationText = tm("about.who.text");
</script>

<template>
  <HeaderPage :label="title" background="orange" />

  <div class="container">
    <div class="presentation">
      <div class="presentation-title">
        <img :src="isabelleImage" class="presentation-title-image" />
        <div class="presentation-title-text">
          <div class="presentation-title-text-content">
            <h2>{{ t("about.who.title") }}</h2>
            <p>{{ t("about.who.name") }}</p>
            <p>{{ t("about.who.profession") }}</p>
          </div>
        </div>
      </div>
      <div class="presentation-text" v-for="text in presentationText">
        <p class="red">{{ text }}</p>
      </div>
    </div>

    <div class="approach">
      <h2 class="approach-title">{{ t("about.approach.title") }}</h2>
      <ul class="pillars">
        <li>
          <div class="pillars-wrapper">
            <img :src="reflexoImage" class="pillars-image" />
            <p class="pillars-label">{{ tm("about.approach.list")[0] }}</p>
          </div>
        </li>
        <li>
          <div class="pillars-wrapper">
            <img :src="massageImage" class="pillars-image" />
            <p class="pillars-label">{{ tm("about.approach.list")[1] }}</p>
          </div>
        </li>
        <li>
          <div class="pillars-wrapper">
            <img :src="qiGongImage" class="pillars-image" />
            <p class="pillars-label">{{ tm("about.approach.list")[2] }}</p>
          </div>
        </li>
      </ul>
      <p class="approach-text red">{{ t("about.approach.text") }}</p>
      <p class="approach-link">{{ t("about.approach.link") }}</p>
    </div>

    <div class="parcours">
      <h2 class="parcours-title">{{ t("about.parcours.title") }}</h2>
      <div class="parcours-text">
        <p>{{ tm("about.parcours.text")[0] }}</p>
        <p>{{ tm("about.parcours.text")[1] }}</p>
        <p>{{ tm("about.parcours.text")[2] }}</p>
        <p>{{ tm("about.parcours.text")[3] }}</p>
        <p>{{ tm("about.parcours.text")[4] }}</p>
        <p>{{ tm("about.parcours.text")[5] }}</p>
      </div>
    </div>

    <div class="training">
      <h2 class="training-title">{{ t("about.training.title") }}</h2>
      <div class="training-list">
        <div v-for="(item, index) in tm('about.training.list')" :key="index" class="training-item">
          <div class="training-date">
            {{ item.date }}
          </div>
          <div class="training-info">
            <p class="training-info-title">{{ item.title }}</p>
            <p class="training-info-subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
}

.presentation {
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 60px;
  text-align: center;
  &-title {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      width: 100%;
    }

    &-image {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }

    &-text {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $orange-light;
      padding: 90px 0;
      width: 50%;
      box-shadow: 0px 5px 5px $dark-grey;
      @media (max-width: 768px) {
        width: 100%;
      }

      &-content {
        text-align: left;
        h2 {
          margin-bottom: 10%;
        }
      }
    }
  }
}

.approach {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  background-color: $orange-light;
  width: 100%;
  padding: 20px 0;
  text-align: center;

  .pillars {
    width: 70%;
    margin: 20px 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 60%;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
    }
    li {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    &-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    &-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }

    &-label {
      text-align: center;
    }
  }

  &-text {
    margin-top: 20px;
    width: 70%;
  }
}

.parcours {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 100%;
  padding: 20px 0;
  text-align: center;
  &-title {
    margin-bottom: 10px;
  }
  &-text {
    width: 70%;
    @media (max-width: 768px) {
      width: 90%;
    }
    :nth-child(-n + 4) {
      margin-bottom: 20px;
    }
    :last-child {
      margin-bottom: 30px;
    }
  }
}

.training {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
  color: $white-soft;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120%;
    height: 70vw;
    background-color: $orange;
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 768px) {
      height: 100vh;
      width: 170%;
    }
  }

  &-title {
    margin-bottom: 20px;
    text-align: center;
  }

  &-list {
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #ccc;
      transform: translateX(-50%);
    }
  }

  &-date {
    width: 50%;
    text-align: right;
    padding-right: 30px;
  }

  &-info {
    width: 50%;
    padding-left: 30px;
    text-align: left;

    &-title {
      margin: 0;
      font-weight: bold;
    }

    &-subtitle {
      margin: 0;
      font-size: 0.9em;
    }
  }
}
</style>
