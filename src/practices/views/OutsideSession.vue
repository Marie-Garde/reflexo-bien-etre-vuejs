<script setup lang="ts">
import { useI18n } from "vue-i18n";
import qiGongClassImg from "@/assets/illustrations/practices/outside/qi-gong-class.jpg";
import qiGongOutsideImg from "@/assets/illustrations/practices/outside/qi-gong-outside.jpg";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import calendarIcon from "@/assets/icons/calendar.png";
import clockIcon from "@/assets/icons/clock.png";
import peopleIcon from "@/assets/icons/people.png";
import shirtIcon from "@/assets/icons/shirt.png";

const { t, tm } = useI18n();
const router = useRouter();

const practiceLabel = tm("practices.outsideSessionPage.practice.text");
const sessionLabel = t("practices.outsideSessionPage.session.text");
const whyReasonsList = tm("practices.outsideSessionPage.why.reasons");
const peopleWhoList = tm("practices.outsideSessionPage.who.people");
const infosList = tm("practices.outsideSessionPage.how.infos");
const buttonLabel = t("practices.outsideSessionPage.buttonLabel");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("practices.outsideSessionPage.title") }}</h1>
      <p>{{ t("practices.outsideSessionPage.subtitle") }}</p>
    </div>
  </div>

  <div class="infos">
    <div class="infos-practices">
      <div class="text">
        <h2>{{ t("practices.outsideSessionPage.practice.title") }}</h2>
        <div class="first-line" v-html="practiceLabel[0]"></div>
        <div v-html="practiceLabel[1]"></div>
      </div>
      <img :src="qiGongClassImg" alt="" />
    </div>
    <div class="infos-session">
      <img :src="qiGongOutsideImg" alt="" />
      <div class="text">
        <h2>{{ t("practices.outsideSessionPage.session.title") }}</h2>
        <div v-html="sessionLabel"></div>
        <Button class="button" :label="buttonLabel" color="orange" @click="goToAppointment()" />
      </div>
    </div>
  </div>

  <div class="why">
    <h2>{{ t("practices.outsideSessionPage.why.title") }}</h2>
    <p>{{ tm("practices.outsideSessionPage.why.text[0]") }}</p>
    <p>{{ tm("practices.outsideSessionPage.why.text[1]") }}</p>
    <ul class="why-list">
      <li class="why-list-item" v-for="reason in whyReasonsList">
        <p>{{ reason }}</p>
      </li>
    </ul>
  </div>

  <div class="who">
    <h2>{{ t("practices.outsideSessionPage.who.title") }}</h2>
    <p>{{ t("practices.outsideSessionPage.who.text") }}</p>
    <ul class="who-list">
      <li class="who-list-item" v-for="person in peopleWhoList">
        <div class="who-list-item-frame">
          <div v-html="person"></div>
        </div>
      </li>
    </ul>
  </div>

  <div class="how">
    <h2>{{ t("practices.outsideSessionPage.how.title") }}</h2>

    <div class="infos">
      <div class="infos-item">
        <img class="infos-item-icon" :src="clockIcon" />
        <p>{{ infosList[0] }}</p>
      </div>
      <div class="infos-item">
        <img class="infos-item-icon" :src="calendarIcon" />
        <p>{{ infosList[1] }}</p>
      </div>
      <div class="infos-item">
        <img class="infos-item-icon" :src="peopleIcon" />
        <p>{{ infosList[2] }}</p>
      </div>
      <div class="infos-item">
        <img class="infos-item-icon" :src="shirtIcon" />
        <p>{{ infosList[3] }}</p>
      </div>
    </div>

    <Button class="how-button" :label="buttonLabel" color="orange" @click="goToAppointment()" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 40vh;
  margin-top: 60px;
  background-image: url("@/assets/illustrations/practices/outside/women-qi-gong.png");
  background-size: cover;
  background-position: top;
  position: relative;
  &-overlay {
    position: absolute;
    bottom: 10%;
    left: 0;
    margin-left: 120px;
    width: 50%;
    max-width: 600px;
    padding: 20px;
    background: rgba(72, 72, 72, 0.9);
    border-radius: 5px;
    text-align: left;
    color: $white;
  }
}

.infos {
  background-color: $orange-white;
  &-practices {
    width: 100%;
    height: 50vh;
    display: flex;

    .text {
      width: 50%;
      padding: 0 80px 0 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 40px;
      }

      .first-line {
        margin-bottom: 20px;
      }
    }

    img {
      width: 50%;
      object-fit: cover;
      object-position: top;
    }
  }

  &-session {
    width: 100%;
    height: 50vh;
    display: flex;

    .text {
      width: 50%;
      padding: 0 120px 0 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin-bottom: 40px;
      }

      .button {
        width: 40%;
        margin-top: 30px;
        font-size: 1.2rem;
      }
    }

    img {
      flex: 1;
      object-fit: cover;
      object-position: top;
    }
  }
}

.why {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/background/outsidePracticeBackground.png");
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 60px auto 40px auto;
  }

  &-list {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
    padding: 0;
    &-item {
      width: 250px;
      height: 250px;
      text-align: center;
      background-color: green;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      transition: transform 0.3s ease;

      &:first-child {
        background-color: #8f9460;
      }
      &:nth-child(2) {
        background-color: #aeb183;
      }
      &:nth-child(3) {
        background-color: #cdcea7;
      }
      &:nth-child(4) {
        background-color: #dee0b9;
      }
      &:nth-child(5) {
        background-color: #eff0e0;
      }
      p {
        margin: 0;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

.who {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 30px;
  }

  .who-list {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      flex: 1 1 25%;
      height: 300px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: white;
      text-align: center;
      font-weight: bold;
      transition: transform 0.3s ease;

      &:first-child {
        background-image: url("@/assets/illustrations/practices/outside/stress.png");
      }
      &:nth-child(2) {
        background-image: url("@/assets/illustrations/practices/outside/illness.png");
      }
      &:nth-child(3) {
        background-image: url("@/assets/illustrations/practices/outside/old.png");
      }
      &:nth-child(4) {
        background-image: url("@/assets/illustrations/practices/outside/meditation.png");
      }

      &:hover {
        transform: scale(1.05);
      }

      &-frame {
        background: rgba(255, 255, 255, 0.8);
        padding: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: $black;
      }
    }
  }
}

.how {
  background-color: $orange-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  h2 {
    margin: 60px 0 40px 0;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;

    &-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 20px;
    }
  }

  &-button {
    width: 20%;
    font-size: 1.2rem;
  }
}
</style>
