<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import Header from "../components/Header.vue";
import OutsidePrice from "../components/OutsidePrice.vue";
import ReflexoPrice from "../components/ReflexoPrice.vue";
import TuinaPrice from "../components/TuinaPrice.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";

const { t } = useI18n();
const router = useRouter();

const labelButtonReflexo = t("price.buttonLabel.takeAppointmentReflexo");
const labelButtonTuina = t("price.buttonLabel.takeAppointmentTuina");
const labelButtonQiGong = t("price.buttonLabel.takeAppointmentQiGong");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <Header />

  <div class="content">
    <div class="prices">
      <ReflexoPrice />
      <Button :label="labelButtonReflexo" color="brown-dark" @click="goToAppointment()" />
      <TuinaPrice />
      <Button :label="labelButtonTuina" color="brown-dark" @click="goToAppointment()" />
      <OutsidePrice />
      <Button :label="labelButtonQiGong" color="brown-dark" @click="goToAppointment()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.content {
  display: flex;
  justify-content: space-between;
  gap: 2vw;
  max-width: 1280px;
  margin: 40px auto;

  .prices {
    display: flex;
    flex-direction: column;
  }
}

button {
  width: 40%;
  font-size: 1.2rem;
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  button {
    width: 90%;
    margin: 0 auto 40px auto;
  }
}
</style>
