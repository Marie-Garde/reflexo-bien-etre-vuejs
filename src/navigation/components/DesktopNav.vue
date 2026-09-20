<script setup lang="ts">
import { computed, type PropType } from "vue";
import { useRoute, useRouter } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import Logo from "@/assets/logo/logo-horizontal-brown.webp";
import type { SiteSettings } from "@/general/interface/SiteSettings";

const props = defineProps({
  settings: { type: Object as PropType<SiteSettings>, required: true },
});

const router = useRouter();
const route = useRoute();

// Sur ordinateur, le logo ramène à l'accueil : l'entrée correspondante est
// masquée, comme le prévoit le Studio.
const navItems = computed(() => props.settings.navItems.filter((item) => !item.mobileOnly));

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
        :key="item._key"
        :class="[
          'desktop-nav__link',
          { active: route.path.startsWith(router.resolve({ name: item.destination }).path) },
        ]"
        :label="item.label"
        :to="item.destination"
      />
    </div>

    <div class="desktop-nav__actions">
      <div class="desktop-nav__socials">
        <a :href="props.settings.social.instagramUrl" target="_blank" rel="noopener noreferrer">
          <InstagramIcon class="icon" aria-label="Visitez notre page Instagram" />
        </a>
        <a :href="props.settings.social.facebookUrl" target="_blank" rel="noopener noreferrer">
          <FacebookIcon class="icon" aria-label="Visitez notre page Facebook" />
        </a>
      </div>
      <Button
        class="desktop-nav__button"
        :label="props.settings.appointmentLabel"
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
