<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Button from "@/components/Button.vue";
import Header from "../components/Header.vue";
import OfficePrice from "../components/OfficePrice.vue";
import OutsidePrice from "../components/OutsidePrice.vue";

const { t, tm } = useI18n();

const types = tm("price.type");

const labelButton = t("price.takeAppointment");

const reflexoLabel = [{ title: t("price.type[0].title") }];
</script>

<template>
  <Header />

  <div class="content">
    <div class="prices">
      <OfficePrice />

      <OutsidePrice />
    </div>

    <aside>
      <Button :label="labelButton" background="orange" class="take-appointment-button" />
    </aside>
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

aside {
  width: 15%;
  display: flex;
  justify-content: end;
  height: fit-content;
}

.take-appointment-button {
  padding: 20px 32px;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  aside {
    width: 100%;
  }
  .take-appointment-button {
    width: 90%;
    margin: 0 auto;
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  aside {
    width: 30%;
    margin-right: 40px;
  }
  .take-appointment-button {
    font-size: 1rem;
    margin: 0 auto;
  }
}
</style>
