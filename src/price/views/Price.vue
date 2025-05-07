<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPage from "@/components/HeaderPage.vue";
import Button from "@/components/Button.vue";

const { t, tm } = useI18n();

const title = t("price.title");
const types = tm("price.type");

const labelButton = t("price.takeAppointment");
</script>

<template>
  <HeaderPage :label="title" background="green" />

  <div class="prices">
    <ul class="prices-list">
      <li v-for="type in types">
        <h2>{{ type.title }}</h2>
        <p>{{ type.description }}</p>
      </li>
    </ul>
  </div>

  <aside>
    <Button :label="labelButton" background="orange" />
  </aside>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.prices {
  &-list {
    list-style: none;
  }
}
</style>
