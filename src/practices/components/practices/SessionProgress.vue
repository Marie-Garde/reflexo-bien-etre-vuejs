<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const sessionProgressList = tm("practices.sessionProgress.list");
</script>

<template>
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
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.sessionProgress {
  width: 100%;
  height: 55vh;
  max-width: 1280px;
  margin: 0 auto;

  &-content {
    position: relative;
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
      justify-content: space-between;
      gap: 20px;
      width: 100%;
      padding-bottom: 50px;
      .card {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 25%;
        padding: 20px 10px;
        background: rgba(246, 246, 246, 0.9);
        border-radius: 8px;
        text-align: center;
        box-shadow: 0px 5px 5px $dark-grey;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.05);
        }

        &:first-child {
          background-color: #e6c890;
        }

        &:nth-child(2) {
          background-color: #ffe3b0;
        }

        &:nth-child(3) {
          background-color: #ffebc4;
        }

        &:nth-child(4) {
          background-color: #fff5dc;
        }
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

@media (max-width: 768px) {
  .sessionProgress {
    height: auto;
    padding: 40px 0;
    &-content {
      width: 90%;
      margin: 0 auto;
      .cards-container {
        flex-direction: column;
        gap: 10px;
        padding-bottom: 0;
        .card {
          flex-direction: column;
          width: 100%;
        }
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .sessionProgress {
    height: auto;
    padding: 20px 0;
    &-content {
      width: 100%;

      .cards-container {
        max-width: 90%;
      }
    }
  }
}
</style>
