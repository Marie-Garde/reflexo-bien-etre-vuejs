<script setup lang="ts">
import Button from "@/components/Button.vue";
import { useRouter } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { t } = useI18n();

const goToHome = () => {
  router.push({ name: homeRoutesName.HOME });
};

const buttonLabel = t("404.button");
</script>

<template>
  <div class="content">
    <div class="not-found">
      <h1>{{ t("404.title") }}</h1>
      <p>{{ t("404.text") }}</p>
      <Button :label="buttonLabel" @click="goToHome" color="brown-dark" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1280px;
  margin: 40px auto;
  min-height: 50vh;

  .not-found {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

h1 {
  font-size: 2.5rem;
  color: $brown-dark;
}

p {
  font-size: 1.2rem;
}

button {
  width: 40%;
  font-size: 1.2rem;
  margin: 20px auto 0;
}
</style>
