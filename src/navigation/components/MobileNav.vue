<script setup lang="ts">
import { ref, type PropType } from "vue";
import { useRouter } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import Logo from "@/assets/logo/logo-horizontal-brown.webp";
import BurgerMenuIcon from "@/assets/icons/burger-menu.vue";
import CrossIcon from "@/assets/icons/cross.vue";
import type { SiteSettings } from "@/general/interface/SiteSettings";

const props = defineProps({
  settings: { type: Object as PropType<SiteSettings>, required: true },
});

const router = useRouter();
const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
}

function handleLinkClick(routeName: string) {
  router.push({ name: routeName });
  closeMenu();
}

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
  closeMenu();
}

function goToHome() {
  router.push({ name: homeRoutesName.HOME });
  closeMenu();
}
</script>

<template>
  <nav class="mobile-nav">
    <button @click="goToHome()" class="mobile-nav__logo">
      <img :src="Logo" alt="Reflex'o bien-être logo" />
    </button>

    <button
      class="mobile-nav__burger"
      @click="menuOpen = true"
      aria-label="Ouvrir le menu de navigation"
    >
      <BurgerMenuIcon />
    </button>

    <transition name="slide">
      <div v-if="menuOpen" class="mobile-nav__menu">
        <button class="mobile-nav__close" @click="closeMenu">
          <CrossIcon />
        </button>
        <div class="mobile-nav__links">
          <LinkRouter
            v-for="item in props.settings.navItems"
            :key="item._key"
            class="mobile-nav__link"
            :label="item.label"
            :to="item.destination"
            @click="handleLinkClick(item.destination)"
          />
          <Button
            class="mobile-nav__button"
            :label="props.settings.appointmentLabel"
            color="orange-light"
            @click="goToAppointment"
          />
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.mobile-nav {
  background-color: $orange-light;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;

  &__logo {
    width: 150px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;

    img {
      width: 100%;
      display: block;
    }
  }

  &__burger {
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 101;
  }

  &__menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.95);
    display: flex;
    flex-direction: column;
    padding: 20px;
    z-index: 102;
  }

  &__close {
    align-self: flex-start;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  &__links {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 30px;
  }

  &__link {
    color: $white-soft;
    font-size: 1.2rem;
    text-decoration: none;
  }

  &__button {
    margin-top: 20px;
    font-size: 1.2rem;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
