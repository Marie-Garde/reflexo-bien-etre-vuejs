<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AccordionItem from "@/components/AccordionItem.vue";
import benefitsImage from "@/assets/illustrations/practices/benefits.png";
import { useRouter } from "vue-router";
import { practicesRoutesName } from "../routes/routesName";
import { computed } from "vue";
import isMobile from "../../reactives/isMobile";
import benefitsMobile from "@/assets/illustrations/practices/benefitsMobile.png";

const { t, tm } = useI18n();
const router = useRouter();

const benefitsList = tm("practices.benefits.list");
const sessionProgressList = tm("practices.sessionProgress.list");

const benefitsImageSource = computed(() => {
  return isMobile.value ? benefitsMobile : benefitsImage;
});

function GoToInsideCare() {
  router.push({ name: practicesRoutesName.OFFICE });
}

function GoToOutsideCare() {
  router.push({ name: practicesRoutesName.OUTSIDE });
}
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("practices.title") }}</h1>
      <h2 class="subTitle">{{ t("practices.presentation.title") }}</h2>
      <p>{{ tm("practices.presentation.text")[0] }}</p>
      <p>{{ tm("practices.presentation.text")[1] }}</p>
      <p>{{ tm("practices.presentation.text")[2] }}</p>
    </div>
  </div>

  <div class="benefits">
    <h2>{{ t("practices.benefits.title") }}</h2>
    <div class="benefits-content">
      <img :src="benefitsImageSource" class="benefits-image" />
      <ul class="benefits-list">
        <li v-for="benefit in benefitsList">
          <AccordionItem :title="benefit.title">
            <div v-html="benefit.text"></div>
          </AccordionItem>
        </li>
      </ul>
    </div>
  </div>

  <div class="pillars">
    <div class="pillars-text">
      <h2>{{ t("practices.pillars.title") }}</h2>
      <p class="red">{{ t("practices.pillars.text") }}</p>
    </div>

    <ul class="pillars-list">
      <li class="left" @click="GoToInsideCare()">
        <p class="pillars-list-label">{{ tm("practices.pillars.list")[0] }}</p>
      </li>
      <li class="right" @click="GoToOutsideCare()">
        <p class="pillars-list-label">{{ tm("practices.pillars.list")[1] }}</p>
      </li>
    </ul>
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
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/background/practiceBackground.png");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  &-overlay {
    margin: 0 auto;
    max-width: 1280px;
    width: 100%;
    color: $white;
    text-align: left;
  }

  .title {
    margin-bottom: 50px;
  }

  .subTitle {
    margin-bottom: 40px;
  }

  p {
    max-width: 50%;
  }
}

.benefits {
  width: 100%;
  background-color: $green;
  padding: 60px 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    max-width: 1280px;
    margin: 40px auto 0 auto;
  }
  &-list {
    list-style: none;
    padding: 0;
    width: 70%;
    margin: 0 auto;
  }
}

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
  .header {
    height: auto;
    background-image: none;
    display: block;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 250px;
      background-image: url("@/assets/background/practiceBackgroundMobile.png");
      background-size: cover;
      background-position: center;
    }

    &-container {
      align-items: center;
      justify-content: center;
    }
    &-overlay {
      width: 90%;
      margin-bottom: 0;
      padding: 2rem 0;
      text-align: center;
      background: transparent;
      box-shadow: none;
      color: $brown-dark;
    }
    p {
      max-width: 100%;
    }
  }

  .benefits {
    h2 {
      padding: 0 10px;
    }
    &-list {
      width: 90%;
    }
    &-content {
      flex-direction: column-reverse;
      gap: 20px;
    }
    &-image {
      width: 90%;
      max-width: 300px;
    }
  }

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
</style>
