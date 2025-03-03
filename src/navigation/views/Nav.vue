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
    <nav class="navigation">
      <LinkRouter label="Home" :to="homeRoutesName.HOME" />
      <div class="middle-nav">
        <LinkRouter
          :class="['link', { active: route.name === aboutRoutesName.HOME }]"
          label="Présentation"
          :to="aboutRoutesName.HOME"
        />
        <LinkRouter
          :class="['link', { active: route.name === practicesRoutesName.HOME }]"
          label="Mes pratique"
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
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.navigation {
  background-color: $orange-light;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  .middle-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    .link {
      width: 150px;
      padding: 0 15px;
      border: solid 1px red;
    }
    .active {
      border: 1px solid red;
    }
  }
}
</style>
