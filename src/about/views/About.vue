<script setup lang="ts">
import { useI18n } from "vue-i18n";
import cabinetIllustration from "@/assets/illustrations/about/cabinet.jpg";
import bowlIllustration from "@/assets/illustrations/about/bowl.jpg";
import tuinaIllustration from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoIllustration from "@/assets/illustrations/practices/inside/reflexo-main.png";
import qiGongIllustration from "@/assets/illustrations/practices/outside/qi-gong-outside.jpg";
import HeaderPage from "@/components/HeaderPage.vue";
import isabelleImage from "@/assets/illustrations/isabelle.jpg";
import massageImage from "@/assets/illustrations/massage.jpg";
import reflexoImage from "@/assets/illustrations/reflexo.jpg";
import qiGongImage from "@/assets/illustrations/qi-gong.jpg";
import careerImage from "@/assets/illustrations/about/professionnalCareer.png";

const { t, tm } = useI18n();

const title = t("about.title");
const presentationText = tm("about.who.text");
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("about.title") }}</h1>
      <p>{{ t("about.subTitle") }}</p>
    </div>
  </div>

  <div class="approach">
    <h2 class="approach-title">{{ t("about.approach.title") }}</h2>
    <div class="top-section">
      <div class="text-block">
        <p>
          {{ t("about.approach.text") }}
        </p>
      </div>
      <div class="image image-top-right">
        <img :src="cabinetIllustration" alt="Intérieur minimaliste" />
      </div>
    </div>

    <div class="bottom-section">
      <div class="image image-left">
        <img :src="bowlIllustration" alt="Bols tibétains" />
      </div>
      <div class="three-images">
        <div class="image hover-effect">
          <img :src="tuinaIllustration" alt="Massage dos" />
          <p>{{ tm("about.approach.list")[0] }}</p>
        </div>
        <div class="image hover-effect">
          <img :src="reflexoIllustration" alt="Massage main" />
          <p>{{ tm("about.approach.list")[1] }}</p>
        </div>
        <div class="image hover-effect">
          <img :src="qiGongIllustration" alt="Yoga extérieur" />
          <p>{{ tm("about.approach.list")[2] }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="CTA">
    <div class="CTA-content">
      <div class="CTA-overlay">
        <h2>{{ t("about.CTA.title") }}</h2>
        <p>{{ t("about.CTA.description") }}</p>
        <button>{{ t("about.CTA.buttonLabel") }}</button>
      </div>
    </div>
  </div>

  <div class="parcours">
    <div class="parcours-text">
      <h2 class="title">{{ t("about.parcours.title") }}</h2>
      <div class="description">
        <p>{{ tm("about.parcours.text")[0] }}</p>
        <p>{{ tm("about.parcours.text")[1] }}</p>
        <p>{{ tm("about.parcours.text")[2] }}</p>
        <p>{{ tm("about.parcours.text")[3] }}</p>
        <p>{{ tm("about.parcours.text")[4] }}</p>
        <p>{{ tm("about.parcours.text")[5] }}</p>
      </div>
    </div>
    <div class="parcours-img">
      <img :src="careerImage" alt="Isabelle" />
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
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/background/presentationWhoBackground.png");
  background-size: cover;
  background-position: center;
  position: relative;

  &-overlay {
    position: absolute;
    bottom: 5%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 600px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    text-align: left;
    box-shadow: 0px 5px 5px $dark-grey;
  }
}

.approach {
  max-width: 1280px;
  margin: 60px auto 40px auto;
  height: fit-content;
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  .top-section {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-bottom: 40px;

    .image-top-right img {
      width: 600px;
      height: 400px;
      border-radius: 5px;
      box-shadow: 0px 5px 5px $dark-grey;
    }
  }

  .bottom-section {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .image-left img {
      width: 600px;
      height: 400px;
      border-radius: 8px;
      align-self: flex-start;
      transform: translateY(-150px);
      box-shadow: 0px 5px 5px $dark-grey;
    }

    .three-images {
      display: flex;
      gap: 20px;
      align-self: flex-end;
      transform: translateY(-70px) translateX(-150px);

      .image {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
          filter: brightness(70%);
          border-radius: 5px;
          box-shadow: 0px 5px 5px $dark-grey;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        p {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 1.4rem;
          text-align: center;
          z-index: 2;
          pointer-events: none;
        }
      }

      .hover-effect:hover img {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      }
    }
  }
}

.CTA {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/background/presentationCTABackground.png");
  background-size: cover;
  background-position: center;
  position: relative;

  &-content {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    position: relative;
  }

  &-overlay {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    max-width: 500px;
    height: auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    text-align: left;
    box-shadow: 0px 5px 5px $brown-dark;
    text-align: center;

    h2 {
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 20px;
    }

    button {
      background-color: $brown-medium;
      color: $white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.5rem;
      box-shadow: 0px 5px 5px $dark-grey;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: lighten($brown-medium, 10%);
      }
    }
  }
}

.parcours {
  max-width: 1280px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  gap: 40px;

  &-text {
    flex: 1;
    h2 {
      margin-bottom: 40px;
    }
    .description {
      p {
        margin-bottom: 20px;
      }
    }
  }

  &-img {
    flex: 1;
    img {
      width: 80%;
      height: auto;
      border-radius: 5px;
      display: block;
      margin: 0 auto;
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
    background-color: #905463;
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
