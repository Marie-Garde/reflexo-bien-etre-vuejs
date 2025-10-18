<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import isMobile from "../../reactives/isMobile";

import careerImage from "/illustrations/about/professionnalCareer.png";
import careerImageMobile from "/illustrations/about/professionnalCareerMobile.png";

const { t, tm } = useI18n();

const careerImageSource = computed(() => {
  return isMobile.value ? careerImageMobile : careerImage;
});
</script>

<template>
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
        :src="careerImageSource"
        alt="Photo d'Isabelle, la praticienne"
      />
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
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
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
    &__section-title--left {
      text-align: center;
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
  }
}
</style>