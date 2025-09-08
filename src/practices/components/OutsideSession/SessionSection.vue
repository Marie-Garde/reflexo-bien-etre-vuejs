<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";

defineProps<{
  image: string;
}>();

const { t } = useI18n();
const router = useRouter();

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="infos-session">
    <img :src="image" alt="" />
    <div class="text">
      <h2>{{ t("practices.outsideSessionPage.session.title") }}</h2>
      <div v-html="t('practices.outsideSessionPage.session.text')"></div>
      <Button class="button" :label="t('practices.outsideSessionPage.buttonLabel')" color="orange" @click="goToAppointment()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.infos-session {
  width: 100%;
  height: 50vh;
  display: flex;

  .text {
    width: 50%;
    padding: 0 120px 0 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin-bottom: 40px;
    }

    .button {
      width: 40%;
      margin-top: 30px;
      font-size: 1.2rem;
    }
  }

  img {
    flex: 1;
    object-fit: cover;
    object-position: top;
  }
}
</style>