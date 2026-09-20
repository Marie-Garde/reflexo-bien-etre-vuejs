<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useIsMobile } from "@/reactives/isMobile";
import DesktopNav from "../components/DesktopNav.vue";
import MobileNav from "../components/MobileNav.vue";
import PhoneIcon from "@/assets/icons/phone.vue";
import LocationIcon from "@/assets/icons/location.vue";
import { useSiteSettingsStore } from "@/general/stores/siteSettings";

const isMobile = useIsMobile();
const { settings } = storeToRefs(useSiteSettingsStore());
</script>

<template>
  <header class="main-header" v-if="settings">
    <div class="main-header__top-info">
      <div class="info">
        <LocationIcon class="info-icon" />
        <p>{{ settings.topBar.address }}</p>
      </div>
      <div class="info">
        <PhoneIcon class="info-icon" />
        <p>{{ settings.topBar.phone }}</p>
      </div>
    </div>
    <DesktopNav v-if="!isMobile" :settings="settings" />
    <MobileNav v-else :settings="settings" />
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
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
