<script setup lang="ts">
import { computed, type PropType } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { urlFor } from "@/sanityClient";
import type { AppointmentSection } from "../interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<AppointmentSection>, required: true },
});

const router = useRouter();

const backgroundStyle = computed(() => ({
  backgroundImage: `url("${urlFor(props.section.backgroundImage).width(1600).format("webp").quality(75).url()}")`,
}));

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="takeAppointment" :style="backgroundStyle">
    <div class="takeAppointment-content">
      <h2 class="takeAppointment-title">
        {{ props.section.title }}
      </h2>
      <p class="takeAppointment-text">
        {{ props.section.description }}
      </p>
      <Button
        class="button"
        :label="props.section.buttonLabel"
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
