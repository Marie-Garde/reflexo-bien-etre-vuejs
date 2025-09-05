<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { contactRoutesName } from "@/contact/routes/routesName";

import cabinetIllustration from "@/assets/illustrations/about/cabinet.jpg";
import bowlIllustration from "@/assets/illustrations/about/bowl.jpg";
import tuinaIllustration from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoIllustration from "@/assets/illustrations/practices/inside/reflexo-main.png";
import qiGongIllustration from "@/assets/illustrations/practices/outside/qi-gong-outside.jpg";
import careerImage from "@/assets/illustrations/about/professionnalCareer.png";

const { t, tm } = useI18n();
</script>

<template>
  <div class="about">
    <header class="about__header">
      <div class="about__header-container">
        <div class="about__header-overlay">
          <h1 class="about__title">{{ t("about.title") }}</h1>
          <p class="about__subtitle">{{ t("about.subTitle") }}</p>
        </div>
      </div>
    </header>

    <section class="about__approach">
      <h2 class="about__section-title--left">{{ t("about.approach.title") }}</h2>
      <div class="about__approach-top">
        <div class="about__approach-text">
          <p>{{ t("about.approach.text") }}</p>
        </div>
        <div class="about__approach-image-wrapper">
          <img
            class="about__approach-image"
            :src="cabinetIllustration"
            alt="Intérieur du cabinet de réflexologie"
          />
        </div>
      </div>
      <div class="about__approach-bottom">
        <div class="about__approach-image-wrapper about__approach-image-wrapper--left">
          <img
            class="about__approach-image"
            :src="bowlIllustration"
            alt="Bols tibétains pour la sonothérapie"
          />
        </div>
        <div class="about__approach-gallery">
          <figure class="about__approach-gallery-item">
            <img :src="tuinaIllustration" alt="Massage Tui Na du dos" />
            <figcaption>{{ tm("about.approach.list")[0] }}</figcaption>
          </figure>
          <figure class="about__approach-gallery-item">
            <img :src="reflexoIllustration" alt="Réflexologie de la main" />
            <figcaption>{{ tm("about.approach.list")[1] }}</figcaption>
          </figure>
          <figure class="about__approach-gallery-item">
            <img :src="qiGongIllustration" alt="Cours de Qi Gong en extérieur" />
            <figcaption>{{ tm("about.approach.list")[2] }}</figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="about__cta">
      <div class="about__cta-content">
        <div class="about__cta-overlay">
          <h2 class="about__section-title">{{ t("about.CTA.title") }}</h2>
          <p>{{ t("about.CTA.description") }}</p>
          <router-link :to="{ name: contactRoutesName.HOME }" class="about__cta-button">
            {{ t("about.CTA.buttonLabel") }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="about__career">
      <div class="about__career-text">
        <h2 class="about__section-title--left">{{ t("about.parcours.title") }}</h2>
        <div class="about__career-description">
          <p v-for="(paragraph, index) in tm('about.parcours.text')" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div class="about__career-image-wrapper">
        <img
          class="about__career-image"
          :src="careerImage"
          alt="Photo d'Isabelle, la praticienne"
        />
      </div>
    </section>

    <section class="about__training">
      <h2 class="about__section-title about__section-title--light">
        {{ t("about.training.title") }}
      </h2>
      <div class="about__training-timeline">
        <div
          v-for="(item, index) in tm('about.training.list')"
          :key="index"
          class="about__training-item"
        >
          <div class="about__training-date">{{ item.date }}</div>
          <div class="about__training-info">
            <p class="about__training-info-title">{{ item.title }}</p>
            <p class="about__training-info-subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.about {
  &__header {
    width: 100%;
    height: 60vh;
    background-image: url("@/assets/background/presentationWhoBackground.png");
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;

    &-container {
      width: 100%;
      max-width: 1280px;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    &-overlay {
      width: 50%;
      max-width: 600px;
      padding: 2rem;
      margin-bottom: 5rem;
      background: rgba($white, 0.9);
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }
  }

  &__section-title {
    text-align: center;
    margin-bottom: 40px;

    &--light {
      color: $white-soft;
    }

    &--left {
      text-align: left;
      margin-bottom: 40px;
    }
  }

  &__approach {
    max-width: 1280px;
    margin: 60px auto 60px;
    padding: 0 20px;

    &-top {
      display: flex;
      justify-content: space-between;
      align-items: top;
      gap: 60px;
      margin-bottom: 40px;
    }

    &-text {
      flex-basis: 50%;
    }

    &-image-wrapper {
      flex-basis: 48%;
      &--left {
        flex-shrink: 0;
        width: 600px;
        transform: translateY(-50px);
      }
    }

    &-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }

    &-bottom {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      margin-top: -100px;
    }

    &-gallery {
      display: flex;
      gap: 20px;
      align-self: flex-end;
      transform: translateX(-150px);

      &-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        transition: transform 0.3s ease;
        box-shadow: 0 5px 5px $dark-grey;

        img {
          width: 230px;
          height: 230px;
          object-fit: cover;
          filter: brightness(70%);
          display: block;
        }

        figcaption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $white;
          font-size: 1.4rem;
          text-align: center;
          pointer-events: none;
        }

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba($black, 0.3);
        }
      }
    }
  }

  &__cta {
    width: 100%;
    height: 50vh;
    background-image: url("@/assets/background/presentationCTABackground.png");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    &-content {
      max-width: 1280px;
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 2rem;
    }

    &-overlay {
      width: 100%;
      max-width: 600px;
      padding: 2rem;
      background: rgba($white, 0.9);
      border-radius: 5px;
      text-align: center;
      box-shadow: 0 5px 5px $brown-dark;

      .about__section-title {
        margin-bottom: 30px;
      }

      p {
        margin-bottom: 20px;
      }
    }

    &-button {
      display: inline-block;
      background-color: $brown-medium;
      color: $white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.5rem;
      text-decoration: none;
      box-shadow: 0 5px 5px $dark-grey;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: color.adjust($brown-medium, $lightness: -5%);
      }
    }
  }

  &__career {
    max-width: 1280px;
    margin: 60px auto;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 20px;

    &-text {
      flex: 1;
    }

    &-description {
      p {
        margin-bottom: 20px;
      }
    }

    &-image-wrapper {
      flex: 1;
    }

    &-image {
      width: 80%;
      height: auto;
      border-radius: 5px;
      display: block;
      margin: 0 auto;
    }
  }

  &__training {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0 50px;
    color: $white-soft;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 120%;
      height: 70vw;
      background-color: $brown-medium;
      border-radius: 50%;
      z-index: -1;
      @media (max-width: 768px) {
        height: 100vh;
        width: 170%;
      }
    }

    &-timeline {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        bottom: 0;
        width: 2px;
        background-color: rgba($white-soft, 0.5);
        transform: translateX(-50%);
      }

      @media (max-width: 768px) {
        width: 90%;
      }
    }

    &-item {
      display: flex;
      align-items: center;
      position: relative;
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
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
    &__header-overlay {
      width: 90%;
      max-width: 800px;
      margin: 0 auto 5rem auto;
    }

    &__approach {
      padding: 0 40px;
      &-bottom {
        margin-top: -50px;
      }
      &-image-wrapper--left {
        width: 50%;
        transform: translateY(-50px);
      }
      &-gallery {
        transform: translateX(0);
        flex-wrap: wrap;
        justify-content: center;
        align-self: center;

        &-item {
          img {
            width: 200px;
            height: 200px;
          }
        }
      }
    }
    &__career {
      padding: 0 40px;
      gap: 20px;
      &-text {
        flex: 1;
        text-align: left;
      }
      &-image-wrapper {
        flex: 1;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    &__header {
      height: auto;
      background-image: none;
      display: block;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background-image: url("@/assets/background/presentationWhoBackground.png");
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
    }

    &__section-title--left {
      text-align: center;
    }

    &__approach {
      margin: 20px auto 40px auto;
      &-top {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 0;
      }

      &-text {
        flex-basis: 100%;
        text-align: center;
      }

      &-image-wrapper {
        flex-basis: 100%;
        &--left {
          transform: translateY(0);
          width: 100%;
        }
      }

      &-image {
        display: none;
      }

      &-bottom {
        flex-direction: column;
        margin-top: 0;
        gap: 20px;
      }

      &-gallery {
        flex-direction: column;
        transform: translateX(0);
        width: 100%;
        align-self: center;

        &-item {
          img {
            width: 100%;
            height: 200px;
          }
        }
      }
    }

    &__cta {
      height: auto;
      padding: 40px 0;
      &-content {
        justify-content: center;
      }
      &-overlay {
        width: 90%;
      }
    }

    &__career {
      flex-direction: column;
      margin: 40px auto;
      gap: 20px;

      &-description {
        text-align: center;
      }

      &-image {
        width: 100%;
      }
    }

    &__training {
      padding: 60px 0 40px;

      &::before {
        height: 120vh;
        width: 200%;
      }

      &-timeline {
        width: 90%;
        &::before {
          display: none;
        }
      }

      &-item {
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-bottom: 20px;
      }

      &-date,
      &-info {
        width: 100%;
        text-align: center;
        padding-left: 0;
      }

      &-date {
        padding-right: 0;
      }
    }
  }
}
</style>
