<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { isMobile } from "@/reactives/isMobile";
import DesktopNav from "../components/DesktopNav.vue";
import MobileNav from "../components/MobileNav.vue";

const { t } = useI18n();
const mobile = isMobile();
</script>

<template>
  <header>
    <div class="header">
      <div class="header-info">
        <p>{{ t("navigation.top.adress") }}</p>
        <p>{{ t("navigation.top.tel") }}</p>
      </div>

      <div v-if="!mobile">
        <DesktopNav />
      </div>

      <div v-else>
        <MobileNav />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 5px 5px $dark-grey;
  &-info {
    background-color: $brown-dark;
    color: $white-soft;
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 5px;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
