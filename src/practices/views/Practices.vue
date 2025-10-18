<script setup lang="ts">
import { useRouter } from "vue-router";
import { practicesRoutesName } from "../routes/routesName";
import { computed } from "vue";
import isMobile from "../../reactives/isMobile";
import benefitsImage from "/illustrations/practices/benefits.png";
import benefitsMobile from "/illustrations/practices/benefitsMobile.png";

import Header from "../components/practices/Header.vue";
import Benefits from "../components/practices/Benefits.vue";
import Pillars from "../components/practices/Pillars.vue";
import SessionProgress from "../components/practices/SessionProgress.vue";

const router = useRouter();

const benefitsImageSource = computed(() => {
  return isMobile.value ? benefitsMobile : benefitsImage;
});

function GoToInsideCare() {
  router.push({ name: practicesRoutesName.OFFICE });
}

function GoToOutsideCare() {
  router.push({ name: practicesRoutesName.OUTSIDE });
}
</script>

<template>
  <Header />
  <Benefits :benefitsImageSource="benefitsImageSource" />
  <Pillars :goToInsideCare="GoToInsideCare" :goToOutsideCare="GoToOutsideCare" />
  <SessionProgress />
</template>
