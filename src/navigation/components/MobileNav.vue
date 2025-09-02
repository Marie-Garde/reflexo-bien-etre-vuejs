<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { homeRoutesName } from "@/home/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesName";
import { priceRoutesName } from "@/price/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
import Button from "@/components/Button.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import Logo from "@/assets/logo/logo-horizontal-brown.png";
import BurgerMenuIcon from "@/assets/illustrations/burger-menu.vue";
import CrossIcon from "@/assets/illustrations/cross.vue";

const router = useRouter();
const { t } = useI18n();
const menuOpen = ref(false);

const navItems = [
  { label: t("navigation.items.home"), routeName: homeRoutesName.HOME },
  { label: t("navigation.items.about"), routeName: aboutRoutesName.HOME },
  { label: t("navigation.items.practices"), routeName: practicesRoutesName.HOME },
  { label: t("navigation.items.seasons"), routeName: seasonsRoutesName.HOME },
  { label: t("navigation.items.prices"), routeName: priceRoutesName.HOME },
  { label: t("navigation.items.contact"), routeName: contactRoutesName.HOME },
];

const takeAppointmentLabel = t("navigation.items.takeAppointment");

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

    <button class="mobile-nav__burger" @click="menuOpen = true">
      <BurgerMenuIcon />
    </button>

    <transition name="slide">
      <div v-if="menuOpen" class="mobile-nav__menu">
        <button class="mobile-nav__close" @click="closeMenu">
          <CrossIcon />
        </button>
        <div class="mobile-nav__links">
          <LinkRouter
            v-for="item in navItems"
            :key="item.routeName"
            class="mobile-nav__link"
            :label="item.label"
            :to="item.routeName"
            @click="handleLinkClick(item.routeName)"
          />
          <Button
            class="mobile-nav__button"
            :label="takeAppointmentLabel"
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
    width: 120px;
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
    z-index: 100;
  }

  &__close {
    align-self: flex-end;
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
