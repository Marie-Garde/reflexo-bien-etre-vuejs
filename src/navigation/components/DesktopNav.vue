<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
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
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import Logo from "@/assets/logo/logo-horizontal-brown.png";

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const navItems = [
  { label: t("navigation.items.about"), routeName: aboutRoutesName.HOME },
  { label: t("navigation.items.practices"), routeName: practicesRoutesName.HOME },
  { label: t("navigation.items.seasons"), routeName: seasonsRoutesName.HOME },
  { label: t("navigation.items.prices"), routeName: priceRoutesName.HOME },
  { label: t("navigation.items.contact"), routeName: contactRoutesName.HOME },
];

const takeAppointmentLabel = t("navigation.items.takeAppointment");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}

function goToHome() {
  router.push({ name: homeRoutesName.HOME });
}
</script>

<template>
  <nav class="desktop-nav">
    <button @click="goToHome()" class="desktop-nav__logo">
      <img :src="Logo" alt="Reflex'o bien-être logo" />
    </button>

    <div class="desktop-nav__links">
      <LinkRouter
        v-for="item in navItems"
        :key="item.routeName"
        :class="[
          'desktop-nav__link',
          { active: route.path.startsWith(router.resolve({ name: item.routeName }).path) },
        ]"
        :label="item.label"
        :to="item.routeName"
      />
    </div>

    <div class="desktop-nav__actions">
      <div class="desktop-nav__socials">
        <a
          href="https://www.instagram.com/reflex_o_bien_etre_correze"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon class="icon" />
        </a>
        <a
          href="https://www.facebook.com/people/Reflex%C3%B4-Bien-%C3%AAtre-Corr%C3%A8ze/61575998591423/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon class="icon" />
        </a>
      </div>
      <Button
        class="desktop-nav__button"
        :label="takeAppointmentLabel"
        @click="goToAppointment()"
      />
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/variables.scss" as *;

.desktop-nav {
  background-color: $orange-light;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &__logo {
    width: 200px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      display: block;
    }
  }

  &__links {
    display: flex;
    height: 100%;
  }

  &__link {
    display: flex;
    align-items: center;
    padding: 0 20px;
    text-decoration: none;
    color: $brown-dark;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: color.adjust($brown-dark, $lightness: 10%);
    }

    &.active {
      font-weight: bold;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: $brown-dark;
        border-radius: 15px;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__socials {
    display: flex;
    flex-direction: column;

    a {
      width: 24px;
      height: 24px;
    }

    .icon {
      width: 24px;
      height: 24px;
      fill: $brown-dark;
      transition: fill 0.3s ease;

      &:hover {
        fill: color.adjust($brown-dark, $lightness: 10%);
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .desktop-nav {
    &__logo {
      width: 150px;
    }
    &__links {
      font-size: 0.7rem;
    }
    &__button {
      font-size: 0.7rem;
    }
    &__socials {
      a {
        width: 20px;
        height: 20px;
      }
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
