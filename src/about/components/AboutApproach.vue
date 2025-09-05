<script setup lang="ts">
import { useI18n } from "vue-i18n";

import cabinetIllustration from "@/assets/illustrations/about/cabinet.jpg";
import bowlIllustration from "@/assets/illustrations/about/bowl.jpg";
import tuinaIllustration from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoIllustration from "@/assets/illustrations/practices/inside/reflexo-main.png";
import qiGongIllustration from "@/assets/illustrations/practices/outside/qi-gong-outside.jpg";

const { t, tm } = useI18n();
</script>

<template>
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
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.about {
  &__section-title--left {
    text-align: left;
    margin-bottom: 40px;
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
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
    &__approach {
      padding: 0 40px;
      &-bottom {
        margin-top: -50px;
      }
      &-image-wrapper--left {
        width: 20%;
        transform: translateY(-50px);
        img {
          display: none;
        }
      }
      &-gallery {
        margin-top: 40px;
        transform: translateX(-50%);
        justify-content: center;
        align-self: center;

        figcaption {
          font-size: 1rem;
        }

        &-item {
          img {
            width: 170px;
            height: 170px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
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
  }
}
</style>