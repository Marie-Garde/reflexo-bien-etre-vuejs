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

const labelButton = "Prendre rendez-vous";

const router = useRouter();
const route = useRoute();

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <header>
    <div class="header">
      <div class="header-info">
        <p>12 rue des petits pois 24389 Nespouls</p>
        <p>06 82 12 90 59</p>
      </div>
      <nav class="header-navigation">
        <LinkRouter label="Home" :to="homeRoutesName.HOME" />
        <div class="middle-nav">
          <LinkRouter
            :class="['link', { active: route.name === aboutRoutesName.HOME }]"
            label="Présentation"
            :to="aboutRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === practicesRoutesName.HOME }]"
            label="Mes pratiques"
            :to="practicesRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === seasonsRoutesName.HOME }]"
            label="Ce qui bouge"
            :to="seasonsRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === priceRoutesName.HOME }]"
            label="Tarifs"
            :to="priceRoutesName.HOME"
          />
          <LinkRouter
            :class="['link', { active: route.name === contactRoutesName.HOME }]"
            label="Contact"
            :to="contactRoutesName.HOME"
          />
        </div>
        <Button :label="labelButton" @click="goToAppointment()" />
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  &-info {
    background-color: $brown-dark;
    color: $white-soft;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  &-navigation {
    background-color: $orange-light;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0px 5px 5px $dark-grey;

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
  }
}
</style>
