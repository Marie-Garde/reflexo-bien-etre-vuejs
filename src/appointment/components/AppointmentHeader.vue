<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header class="appointment__header">
    <div class="appointment__header-container">
      <div class="appointment__header-overlay">
        <h1 class="appointment__title">{{ t("appointment.title") }}</h1>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.appointment {
  &__header {
    width: 100%;
    height: 60vh;
    background-image: url("@/assets/background/office.png");
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
}

@media (max-width: 1200px) and (min-width: 769px) {
  .appointment {
    &__header-overlay {
      width: 50%;
      margin: 0 auto 5rem 40px;
    }
  }
}

@media (max-width: 768px) {
  .appointment {
    &__header {
      height: auto;
      background-image: none;
      display: block;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background-image: url("@/assets/background/office.png");
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
      }
    }
  }
}
</style>
