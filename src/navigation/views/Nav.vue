<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { priceRoutesName } from "@/price/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
import Button from "@/components/Button.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import { useI18n } from "vue-i18n";

const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const about = t("navigation.items.about");
const seasons = t("navigation.items.seasons");
const practices = t("navigation.items.practices");
const prices = t("navigation.items.prices");
const contact = t("navigation.items.contact");
const takeAppointment = t("navigation.items.takeAppointment");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <header>
    <div class="header">
      <div class="header-info">
        <p>{{ t("navigation.top.adress") }}</p>
        <p>{{ t("navigation.top.tel") }}</p>
      </div>
      <nav class="header-navigation">
        <LinkRouter label="Home" :to="homeRoutesName.HOME" />
        <div class="middle-nav">
          <LinkRouter
            :class="['link', { active: route.name === aboutRoutesName.HOME }]"
            :label="about"
            :to="aboutRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === practicesRoutesName.HOME }]"
            :label="practices"
            :to="practicesRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === seasonsRoutesName.HOME }]"
            :label="seasons"
            :to="seasonsRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === priceRoutesName.HOME }]"
            :label="prices"
            :to="priceRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === contactRoutesName.HOME }]"
            :label="contact"
            :to="contactRoutesName.HOME"
          />
        </div>
        <div class="right-nav">
          <div class="right-nav-icon">
            <InstagramIcon class="icon" />
            <FacebookIcon class="icon" />
          </div>
          <Button class="right-nav-button" :label="takeAppointment" @click="goToAppointment()" />
        </div>
      </nav>
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
  }
  &-navigation {
    background-color: $orange-light;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    .middle-nav {
      display: flex;
      flex-direction: row;
      height: inherit;
      cursor: pointer;
      .link {
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active {
        position: relative;
        font-weight: bold;
      }
      .active:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: $brown-dark;
        height: 4px;
        border-radius: 15px;
      }
    }

    .right-nav {
      display: flex;
      &-icon {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
        .icon {
          width: 20px;
          fill: $brown-dark;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
