<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesName";
import { priceRoutesName } from "@/price/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
import Button from "@/components/Button.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import { useI18n } from "vue-i18n";
import Logo from "@/assets/logo/logo-horizontal-brown.png";
import { ref } from "vue";
import burgerMenu from "@/assets/illustrations/burger-menu.vue";
import cross from "@/assets/illustrations/cross.vue";

const router = useRouter();
const { t } = useI18n();
const menuOpen = ref(false);

const home = t("navigation.items.home");
const about = t("navigation.items.about");
const seasons = t("navigation.items.seasons");
const practices = t("navigation.items.practices");
const prices = t("navigation.items.prices");
const contact = t("navigation.items.contact");
const takeAppointment = t("navigation.items.takeAppointment");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
  menuOpen.value = false;
}

function goToHome() {
  router.push({ name: homeRoutesName.HOME });
}
</script>

<template>
  <nav class="header-navigation">
    <button @click="goToHome()" class="logo">
      <img :src="Logo" />
    </button>

    <div class="burger-menu" @click="menuOpen = !menuOpen">
      <burgerMenu />
    </div>

    <div class="mobile-menu" v-if="menuOpen">
      <cross class="cross" @click="menuOpen = !menuOpen" />
      <div class="links">
        <LinkRouter
          class="link"
          :label="home"
          :to="homeRoutesName.HOME"
          @click="menuOpen = false"
        />
        <LinkRouter
          class="link"
          :label="about"
          :to="aboutRoutesName.HOME"
          @click="menuOpen = false"
        />
        <LinkRouter
          class="link"
          :label="practices"
          :to="practicesRoutesName.HOME"
          @click="menuOpen = false"
        />
        <LinkRouter
          class="link"
          :label="seasons"
          :to="seasonsRoutesName.HOME"
          @click="menuOpen = false"
        />
        <LinkRouter
          class="link"
          :label="prices"
          :to="priceRoutesName.HOME"
          @click="menuOpen = false"
        />
        <LinkRouter
          class="link"
          :label="contact"
          :to="contactRoutesName.HOME"
          @click="menuOpen = false"
        />
        <Button
          class="nav-button"
          :label="takeAppointment"
          color="orange-light"
          @click="goToAppointment()"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  &-navigation {
    background-color: $orange-light;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .logo {
      width: 120px;
      background-color: transparent;
      border: transparent;
      cursor: pointer;
      img {
        width: 100%;
      }
    }

    .mobile-menu {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      flex-direction: column;
      padding: 20px;
      margin: 0;
      gap: 20px;
      height: 100vh;

      .cross {
        align-self: flex-end;
      }
      .links {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 20px;

        .link {
          color: $white-soft;
        }
      }
    }
  }
}
</style>
