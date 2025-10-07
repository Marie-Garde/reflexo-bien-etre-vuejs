<script setup lang="ts">
import { useI18n } from "vue-i18n";
import isMobile from "@/reactives/isMobile";
import DesktopNav from "../components/DesktopNav.vue";
import MobileNav from "../components/MobileNav.vue";
import PhoneIcon from "@/assets/icons/phone.vue";
import LocationIcon from "@/assets/icons/location.vue";

const { t } = useI18n();
</script>

<template>
  <header class="main-header">
    <div class="main-header__top-info">
      <div class="info">
        <LocationIcon class="info-icon" />
        <p>{{ t("navigation.top.adress") }}</p>
      </div>
      <div class="info">
        <PhoneIcon class="info-icon" />
        <p>{{ t("navigation.top.tel") }}</p>
      </div>
    </div>
    <DesktopNav v-if="!isMobile" />
    <MobileNav v-else />
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.main-header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 5px 5px $dark-grey;

  &__top-info {
    background-color: $brown-dark;
    color: $white-soft;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;

    .info {
      display: flex;
      align-items: center;
      color: $orange-light;
      &-icon {
        margin-right: 10px;
        width: 20px;
      }
    }
  }
}

@media (max-width: 768px) {
  .main-header {
    &__top-info {
      font-size: 0.8rem;
      padding: 5px;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
