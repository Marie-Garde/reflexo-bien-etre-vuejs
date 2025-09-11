<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

const props = defineProps<{
  sessionType: string;
}>();

const rhythm = {
  title: t(`practices.insideSessionPage.session.${props.sessionType}.rhythm.title`),
  text: tm(`practices.insideSessionPage.session.${props.sessionType}.rhythm.text`),
  list: tm(`practices.insideSessionPage.session.${props.sessionType}.rhythm.list`),
  cta: t("practices.insideSessionPage.session.reflexo.rhythm.CTA"),
};

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <section class="office-session__rhythm">
    <h2 class="office-session__section-title">{{ rhythm.title }}</h2>
    <p v-for="(p, i) in rhythm.text" :key="i">{{ p }}</p>
    <ul>
      <li v-for="(item, i) in rhythm.list" :key="i">{{ item }}</li>
    </ul>
    <Button :label="rhythm.cta" color="orange" @click="goToAppointment()" />
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__rhythm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 20px;

  p:nth-of-type(2) {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }

  button {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .office-session__rhythm {
    h2 {
      margin: 40px 0 20px 0;
    }
  }
}
</style>
