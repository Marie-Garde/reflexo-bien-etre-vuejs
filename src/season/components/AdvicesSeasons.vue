<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Accordion } from "@/season/interface/Accordion";
import type { PropType } from "vue";
import AccordionItem from "@/components/AccordionItem.vue";

defineProps({
  advicesList: { type: Array as PropType<Accordion[]>, required: true },
});

const { t } = useI18n();

const title = t("seasons.season.subtitles.advices");
</script>

<template>
  <div class="container">
    <h2 class="title">{{ title }}</h2>
    <ul class="advices-list">
      <li v-for="advice in advicesList">
        <AccordionItem :title="advice.title">
          <div v-html="advice.text"></div>
        </AccordionItem>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  margin: 60px 0;
  h2 {
    padding-bottom: 20px;
  }

  .advices-list {
    width: 60%;
    list-style: none;
  }
}
</style>
