<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const peopleWhoList = tm("practices.outsideSessionPage.who.people");
</script>

<template>
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
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

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
</style>