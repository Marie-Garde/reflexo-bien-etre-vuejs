<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
defineProps<{
  goToInsideCare: () => void;
  goToOutsideCare: () => void;
}>();
</script>

<template>
  <div class="pillars">
    <div class="pillars-text">
      <h2>{{ t("practices.pillars.title") }}</h2>
      <p class="red">{{ t("practices.pillars.text") }}</p>
    </div>

    <ul class="pillars-list">
      <li class="left" @click="goToInsideCare()">
        <p class="pillars-list-label">{{ tm("practices.pillars.list")[0] }}</p>
      </li>
      <li class="right" @click="goToOutsideCare()">
        <p class="pillars-list-label">{{ tm("practices.pillars.list")[1] }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.pillars {
  margin-bottom: 60px;
  &-text {
    max-width: 1280px;
    margin: 60px auto 0 auto;
    text-align: center;
    h2 {
      margin-bottom: 40px;
    }
  }

  &-list {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    margin-top: 40px;
    padding: 0;

    .left,
    .right {
      position: absolute;
      top: 0;
      height: 100%;
      width: 55%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p {
        z-index: 2;
        color: $white;
        font-size: 1.6rem;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        transition: opacity 0.4s ease-in-out;
        z-index: 1;
      }

      &:hover::before {
        opacity: 0.4;
      }
    }

    .left {
      left: 0;
      background-image: url("@/assets/illustrations/practices/inside/reflexo-visage.png");
      clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
      transition: clip-path 0.4s ease-in-out;
    }

    .right {
      right: 0;
      background-image: url("@/assets/illustrations/practices/outside/qi-gong-class.jpg");
      clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
      transition: clip-path 0.4s ease-in-out;
    }

    &:hover {
      .left {
        clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
      }
      .right {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
      }
    }
  }
}

@media (max-width: 768px) {
  .pillars {
    max-width: 100%;
    margin: 0 auto 20px auto;
    &-text {
      max-width: 90%;
    }
    &-list {
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;
      overflow: visible;

      .left,
      .right {
        position: relative;
        width: 100%;
        height: 300px;
        clip-path: none !important;
      }

      .right {
        right: auto;
      }

      &:hover .left,
      &:hover .right {
        clip-path: none !important;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .pillars-text {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
