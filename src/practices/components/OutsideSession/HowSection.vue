<script setup lang="ts">
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";
import calendarIcon from "@/assets/icons/calendar.png";
import clockIcon from "@/assets/icons/clock.png";
import peopleIcon from "@/assets/icons/people.png";
import shirtIcon from "@/assets/icons/shirt.png";
import type { OutsideSessionContent, PracticalIcon } from "../../interface/PracticesContent";

const props = defineProps({
  section: { type: Object as PropType<OutsideSessionContent["how"]>, required: true },
  buttonLabel: { type: String, required: true },
});

const router = useRouter();

// Les fichiers d'icônes restent dans le code ; Sanity choisit laquelle afficher.
const ICONS: Record<PracticalIcon, string> = {
  clock: clockIcon,
  calendar: calendarIcon,
  people: peopleIcon,
  shirt: shirtIcon,
};

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="how">
    <h2>{{ props.section.title }}</h2>

    <div class="infos">
      <div class="infos-item" v-for="info in props.section.infos" :key="info._key">
        <img class="infos-item-icon" :src="ICONS[info.icon]" :alt="''" />
        <p>{{ info.text }}</p>
      </div>
    </div>

    <Button
      class="how-button"
      :label="props.buttonLabel"
      color="orange"
      @click="goToAppointment()"
    />
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

@media (max-width: 768px) {
  .how {
    padding: 40px 20px;

    h2 {
      margin: 0 0 20px 0;
    }

    .infos {
      flex-direction: column;
      gap: 30px;
      margin-bottom: 30px;

      &-item {
        width: 100%;
      }
    }

    &-button {
      width: 100%;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .how {
    .infos {
      width: 90%;
      flex-wrap: wrap;
      justify-content: center;

      &-item {
        width: 45%;
      }
    }

    &-button {
      width: 50%;
    }
  }
}
</style>
