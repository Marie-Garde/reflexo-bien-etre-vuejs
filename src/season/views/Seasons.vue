<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPage from "@/components/HeaderPage.vue";
import winterImage from "@/assets/illustrations/winter.jpg";
import springImage from "@/assets/illustrations/spring.jpg";
import fallImage from "@/assets/illustrations/fall.jpg";
import summerImage from "@/assets/illustrations/ete.jpg";

const { t } = useI18n();

const title = t("seasons.title");
</script>

<template>
  <HeaderPage :label="title" background="orange" />

  <div class="container">
    <div class="content">
      <div class="importance">
        <h2>{{ t("seasons.importance.title") }}</h2>
        <p class="red">{{ t("seasons.importance.text") }}</p>
      </div>

      <div class="seasons-list">
        <h2>{{ t("seasons.list.title") }}</h2>
        <div class="circle">
          <div class="quarter top-left">
            <h3 class="quarter-title quarter-title-top-left">Été</h3>
          </div>
          <div class="quarter top-right">
            <h3 class="quarter-title quarter-title-top-right">Automne</h3>
          </div>
          <div class="quarter bottom-right">
            <h3 class="quarter-title quarter-title-bottom-right">Hiver</h3>
          </div>
          <div class="quarter bottom-left">
            <h3 class="quarter-title quarter-title-bottom-left">Printemps</h3>
          </div>
          <div class="center-circle">
            <h3 class="quarter-title quarter-title-center">Inter saison</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
  }

  .circle {
    position: relative;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(45deg);
  }

  .quarter {
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &-title {
      color: $white;
      z-index: 3;
      font-size: 2rem;
      transform: rotate(-45deg);
      cursor: pointer;
      &-top-left {
        position: absolute;
        top: 50%;
        left: 50%;
      }
      &-top-right {
        position: absolute;
        top: 40%;
        left: 35%;
      }
      &-bottom-right {
        position: absolute;
        top: 37%;
        left: 34%;
      }
      &-bottom-left {
        position: absolute;
        top: 40%;
        left: 35%;
      }
      &-center {
        position: absolute;
        top: 16%;
        left: 0%;
      }
    }
  }

  .top-left {
    top: 0;
    left: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 5px) 0,
      calc(100% - 5px) calc(100% - 5px),
      0 calc(100% - 5px)
    );
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 70%;
      background-image: url("@/assets/illustrations/ete.jpg");
      background-size: 75% 75%;
      transform: rotate(-45deg) scale(3);
      background-repeat: no-repeat;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 0.7;
    }

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }

  .top-right {
    top: 0;
    right: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 5px) 0,
      calc(100% - 5px) calc(100% - 5px),
      0 calc(100% - 5px)
    );
    &::before {
      content: "";
      position: absolute;
      width: 65%;
      height: 65%;
      background-image: url("@/assets/illustrations/fall.jpg");
      background-size: 80% 80%;
      transform: rotate(-45deg) scale(3.5);
      background-repeat: no-repeat;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 0.7;
    }

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }

  .bottom-left {
    bottom: 0;
    left: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 5px) 0,
      calc(100% - 5px) calc(100% - 5px),
      0 calc(100% - 5px)
    );
    &::before {
      content: "";
      position: absolute;
      width: 70%;
      height: 70%;
      background-image: url("@/assets/illustrations/spring.jpg");
      background-size: 90% 90%;
      transform: rotate(-45deg) scale(3);
      background-repeat: no-repeat;
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 0.7;
    }

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }

  .bottom-right {
    bottom: 0;
    right: 0;
    clip-path: polygon(
      0 0,
      calc(100% - 5px) 0,
      calc(100% - 5px) calc(100% - 5px),
      0 calc(100% - 5px)
    );
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 65%;
      background-image: url("@/assets/illustrations/winter.jpg");
      background-size: 60% 60%;
      transform: rotate(-45deg) scale(3);
      z-index: -1;
    }
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::after {
      opacity: 0.7;
    }

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }

  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background-color: $orange;
    border-radius: 50%;
    z-index: 10;
    transition: color 0.3s ease;

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }
}
</style>
