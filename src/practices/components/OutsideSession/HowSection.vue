<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";
import calendarIcon from "@/assets/icons/calendar.png";
import clockIcon from "@/assets/icons/clock.png";
import peopleIcon from "@/assets/icons/people.png";
import shirtIcon from "@/assets/icons/shirt.png";

const { t, tm } = useI18n();
const router = useRouter();

const infosList = tm("practices.outsideSessionPage.how.infos");

const infos = [
  {
    icon: clockIcon,
    text: infosList[0],
  },
  {
    icon: calendarIcon,
    text: infosList[1],
  },
  {
    icon: peopleIcon,
    text: infosList[2],
  },
  {
    icon: shirtIcon,
    text: infosList[3],
  },
];

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="how">
    <h2>{{ t("practices.outsideSessionPage.how.title") }}</h2>

    <div class="infos">
      <div class="infos-item" v-for="info in infos">
        <img class="infos-item-icon" :src="info.icon" />
        <p>{{ info.text }}</p>
      </div>
    </div>

    <Button class="how-button" :label="t('practices.outsideSessionPage.buttonLabel')" color="orange" @click="goToAppointment()" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.how {
  background-color: $orange-white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  h2 {
    margin: 60px 0 40px 0;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;

    &-item {
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 20px;
    }
  }

  &-button {
    width: 20%;
    font-size: 1.2rem;
  }
}
</style>