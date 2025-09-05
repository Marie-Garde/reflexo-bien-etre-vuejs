<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { contactRoutesName } from "@/contact/routes/routesName";

const { t } = useI18n();
</script>

<template>
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
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.about {
  &__section-title {
    text-align: center;
    margin-bottom: 40px;
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
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
    &__cta {
      &-content {
        justify-content: center;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
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
  }
}
</style>