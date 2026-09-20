<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import { homeRoutesName } from "@/home/routes/routesName";
import { useNotFoundStore } from "../stores/notFoundContent";

const router = useRouter();
const store = useNotFoundStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);

const goToHome = () => {
  router.push({ name: homeRoutesName.HOME });
};
</script>

<template>
  <div class="content" v-if="content">
    <div class="not-found">
      <h1>{{ content.title }}</h1>
      <p>{{ content.text }}</p>
      <Button :label="content.buttonLabel" @click="goToHome" color="brown-dark" />
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
