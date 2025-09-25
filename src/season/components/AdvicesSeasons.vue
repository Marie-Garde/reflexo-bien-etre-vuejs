<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import type { Accordion } from "@/season/interface/Accordion";
import AccordionItem from "@/components/AccordionItem.vue";

const props = defineProps({
  season: { type: String, required: true },
});

const { t, tm } = useI18n();

const title = t("seasons.season.subtitles.advices");
const advicesList: Accordion[] = tm(`seasons.season.${props.season}.advices`);

const imageUrl = computed(() => {
  return new URL(`../../assets/illustrations/Seasons/${props.season}-advice.jpg`, import.meta.url)
    .href;
});

const openAccordionIndex = ref<number | null>(null);

const toggleAccordion = (index: number) => {
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
  <div class="advices-seasons">
    <div class="advices-seasons__container">
      <img :src="imageUrl" :alt="season" class="advices-seasons__image" />
      <div class="advices-seasons__content">
        <h2 class="advices-seasons__title">{{ title }}</h2>
        <ul class="advices-seasons__list">
          <li v-for="(advice, index) in advicesList" :key="index">
            <AccordionItem
              :title="advice.title"
              :is-open="openAccordionIndex === index"
              @toggle="toggleAccordion(index)"
            >
              <div v-html="advice.text"></div>
            </AccordionItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.advices-seasons {
  height: 100%;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 50%;
    height: 100%;
    object-fit: cover;
    align-self: stretch;
  }

  &__content {
    width: 50%;
    margin-right: 60px;
  }

  &__title {
    padding-bottom: 40px;
    text-align: center;
  }

  &__list {
    width: 100%;
    padding: 0 40px;
    list-style: none;
  }
}

@media (max-width: 768px) {
  .advices-seasons {
    width: 100%;
    &__container {
      flex-direction: column;
    }
    &__image {
      width: 100%;
    }
    &__content {
      width: 90%;
      margin: 0 0 60px 0;
    }
    &__list {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
