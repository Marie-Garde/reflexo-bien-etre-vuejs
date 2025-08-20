<script setup lang="ts">
import { useI18n } from "vue-i18n";
import CarouselText from "@/general/components/CarouselText.vue";

const { t } = useI18n();

const feedbacks = [
  {
    text: "Ouaaaah c'était trop bien, je recommande à fond. Je me sens super détendue",
    subText: "Gertrude, Brive-la-Gaillarde",
  },
  {
    text: "Très sympathique.",
    subText: "Antoine, Brive-la-Gaillarde",
  },
  {
    text: "A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond.",
    subText: "Sarah, Brive-la-Gaillarde",
  },
];
</script>

<template>
  <div class="feedbacks">
    <h2>{{ t("home.feedback.title") }}</h2>
    <CarouselText :slides="feedbacks" />
  </div>
</template>

<style scoped lang="scss">
.feedbacks {
  max-width: 1200px;
  margin: 60px auto;
  text-align: center;
}
</style>
