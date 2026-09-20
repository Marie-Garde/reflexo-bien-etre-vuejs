<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import Header from "../components/Header.vue";
import OutsidePrice from "../components/OutsidePrice.vue";
import ReflexoPrice from "../components/ReflexoPrice.vue";
import TuinaPrice from "../components/TuinaPrice.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { usePriceContentStore } from "../stores/priceContent";

const router = useRouter();
const store = usePriceContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <template v-if="content">
    <Header :section="content.header" />

    <div class="content">
      <div class="prices">
        <ReflexoPrice :section="content.reflexo" />
        <Button
          :label="content.reflexo.buttonLabel"
          color="brown-dark"
          @click="goToAppointment()"
        />
        <TuinaPrice :section="content.tuina" />
        <Button :label="content.tuina.buttonLabel" color="brown-dark" @click="goToAppointment()" />
        <OutsidePrice :section="content.qiGong" />
        <Button :label="content.qiGong.buttonLabel" color="brown-dark" @click="goToAppointment()" />
      </div>
    </div>
  </template>
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
