<script setup lang="ts">
import { useI18n } from "vue-i18n";
import tuinaBackImg from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoHandImg from "@/assets/illustrations/practices/inside/relfexo-main.jpg";

const { t, tm } = useI18n();

const sections = [
  {
    key: "tuina",
    title: t("practices.insideSessionPage.why.tuina.title"),
    text: tm("practices.insideSessionPage.why.tuina.text"),
    image: tuinaBackImg,
    alt: "Massage Tuina du dos",
  },
  {
    key: "reflexo",
    title: t("practices.insideSessionPage.why.reflexo.title"),
    text: tm("practices.insideSessionPage.why.reflexo.text"),
    image: reflexoHandImg,
    alt: "Réflexologie de la main",
  },
];
</script>

<template>
  <section class="office-session__why">
    <div v-for="section in sections" :key="section.key" class="why-card">
      <img class="why-card__image" :src="section.image" :alt="section.alt" />
      <h2 class="why-card__title-static">{{ section.title }}</h2>
      <div class="why-card__text-hover">
        <h2 class="why-card__title">{{ section.title }}</h2>
        <p v-for="(p, i) in section.text" :key="i">{{ p }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__why {
  display: flex;
  width: 100%;

  .why-card {
    position: relative;
    width: 50%;
    min-height: 80vh;
    height: auto;
    overflow: hidden;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &__title-static,
    &__text-hover {
      position: absolute;
      inset: 0;
      color: white;
      transition: opacity 0.3s ease;
    }

    &__title-static {
      background: rgba(0, 0, 0, 0.6);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      pointer-events: auto;
      z-index: 2;
    }

    &__text-hover {
      background: rgba(0, 0, 0, 0.9);
      opacity: 0;
      pointer-events: none;
      overflow-y: auto;
      z-index: 3;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      padding: 60px 80px;
    }

    &__title {
      margin-bottom: 40px;
    }

    p:nth-child(3),
    &__list {
      padding-bottom: 30px;
    }

    &:hover {
      .why-card__title-static {
        opacity: 0;
        pointer-events: none;
      }
      .why-card__text-hover {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}

@media (max-width: 768px) {
  .office-session__why {
    flex-direction: column;

    .why-card {
      width: 100%;
      height: 110vh;

      &__title-static {
        opacity: 0;
        pointer-events: none;
      }

      &__text-hover {
        opacity: 1;
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.8);
        padding: 40px 20px;
      }

      &:hover {
        .why-card__text-hover {
          opacity: 1;
        }
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .office-session__why {
    .why-card {
      height: 100vh;

      &__title-static {
        opacity: 0;
        pointer-events: none;
      }

      &__text-hover {
        opacity: 1;
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.8);
        padding: 40px;
      }
    }
  }
}
</style>
