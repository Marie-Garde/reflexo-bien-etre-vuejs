<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";

const { t } = useI18n();
const router = useRouter();

const takeAppointmentLabel = t("home.takeAppointment.buttonLabel");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="takeAppointment">
    <div class="takeAppointment-content">
      <h2 class="takeAppointment-title">
        {{ t("home.takeAppointment.title") }}
      </h2>
      <p class="takeAppointment-text">
        {{ t("home.takeAppointment.description") }}
      </p>
      <Button
        class="button"
        :label="takeAppointmentLabel"
        background="orange"
        @click="goToAppointment()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.takeAppointment {
  width: 100%;
  min-height: 40vh;
  height: auto;
  background-image: url("/illustrations/homeCTA.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  &-title {
    margin-bottom: 20px;
  }

  &-text {
    margin-bottom: 40px;
  }

  .button {
    font-size: 1.5rem;
    padding: 20px 54px;
    border: none;
  }
}

@media (max-width: 768px) {
  .takeAppointment {
    padding: 40px;
  }
  .button {
    font-size: 1rem;
  }
}
</style>
