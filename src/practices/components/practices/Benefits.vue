<script setup lang="ts">
import AccordionItem from "@/components/AccordionItem.vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const benefitsList = tm("practices.benefits.list");

defineProps<{
  benefitsImageSource: string;
}>();
</script>

<template>
  <div class="benefits">
    <h2>{{ t("practices.benefits.title") }}</h2>
    <div class="benefits-content">
      <img :src="benefitsImageSource" class="benefits-image" />
      <ul class="benefits-list">
        <li v-for="benefit in benefitsList">
          <AccordionItem :title="benefit.title">
            <div v-html="benefit.text"></div>
          </AccordionItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.benefits {
  width: 100%;
  background-color: $green;
  padding: 60px 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    max-width: 1280px;
    margin: 40px auto 0 auto;
  }
  &-list {
    list-style: none;
    padding: 0;
    width: 70%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .benefits {
    h2 {
      padding: 0 10px;
    }
    &-list {
      width: 90%;
    }
    &-content {
      flex-direction: column-reverse;
      gap: 20px;
    }
    &-image {
      width: 90%;
      max-width: 300px;
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .benefits-content {
    padding: 0 20px;
  }
}
</style>
