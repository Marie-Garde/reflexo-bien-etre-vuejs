<script setup lang="ts">
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import PortableText from "@/general/components/PortableText.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import type { SessionDetail } from "../../interface/PracticesContent";

const props = defineProps({
  rhythm: { type: Object as PropType<SessionDetail["rhythm"]>, required: true },
});

const router = useRouter();

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <section class="office-session__rhythm">
    <h2 class="office-session__section-title">{{ props.rhythm.title }}</h2>
    <PortableText :blocks="props.rhythm.body" />
    <ul>
      <li v-for="point in props.rhythm.points" :key="point">{{ point }}</li>
    </ul>
    <Button :label="props.rhythm.buttonLabel" color="orange" @click="goToAppointment()" />
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
