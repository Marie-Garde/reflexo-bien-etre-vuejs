<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const whyReasonsList = tm("practices.outsideSessionPage.why.reasons");
</script>

<template>
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
</template>

<style scoped lang="scss">
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
</style>