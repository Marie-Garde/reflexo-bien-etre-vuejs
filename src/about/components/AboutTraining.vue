<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
</script>

<template>
  <section class="about__training">
    <h2 class="about__section-title about__section-title--light">
      {{ t("about.training.title") }}
    </h2>
    <ul class="about__training-timeline">
      <li
        v-for="(item, index) in tm('about.training.list')"
        :key="index"
        class="about__training-item"
      >
        <div class="about__training-date">{{ item.date }}</div>
        <div class="about__training-info">
          <p class="about__training-info-title">{{ item.title }}</p>
          <p class="about__training-info-subtitle">{{ item.subtitle }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.about {
  &__section-title {
    text-align: center;
    margin-bottom: 40px;

    &--light {
      color: $white-soft;
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
    background-color: $brown-medium;

    &-timeline {
      width: 70%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: relative;
      padding-left: 0;

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
    }

    &-item {
      display: flex;
      align-items: center;
      position: relative;
      list-style: none;
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

@media (max-width: 768px) {
  .about {
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
