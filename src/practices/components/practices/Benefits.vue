<script setup lang="ts">
import AccordionItem from "@/components/AccordionItem.vue";
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { t, tm } = useI18n();

const benefitsList = tm("practices.benefits.list");

defineProps<{
  benefitsImageSource: string;
}>();

const openAccordionIndex = ref<string | null>(null);

const toggleAccordion = (index: string) => {
  const currentlyOpen = openAccordionIndex.value;

  if (currentlyOpen === index) {
    openAccordionIndex.value = null;
  } else if (currentlyOpen !== null) {
    openAccordionIndex.value = null;
    setTimeout(() => {
      openAccordionIndex.value = index;
    }, 300);
  } else {
    openAccordionIndex.value = index;
  }
};
</script>

<template>
  <div class="benefits">
    <h2>{{ t("practices.benefits.title") }}</h2>
    <p>{{ t("practices.benefits.subtitle") }}</p>
    <div class="benefits-content">
      <img :src="benefitsImageSource" class="benefits-image" />
      <ul class="benefits-list">
        <li v-for="(benefit, index) in benefitsList" :key="index">
          <AccordionItem
            :title="benefit.title"
            :is-open="openAccordionIndex === index"
            @toggle="toggleAccordion(index)"
          >
            <div class="benefits-list-text" v-html="benefit.text"></div>
          </AccordionItem>
        </li>
      </ul>
    </div>
    <p>{{ t("practices.benefits.text") }}</p>
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

  p {
    max-width: 1280px;
    margin: 30px auto;
  }
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
    &-text {
      padding: 20px 0;
    }
  }
}

@media (max-width: 768px) {
  .benefits {
    width: 100%;
    h2 {
      padding: 0 10px;
    }
    p {
      max-width: 90%;
      margin: 20px auto;
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
