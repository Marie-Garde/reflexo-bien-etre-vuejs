<script setup lang="ts">
import { useI18n } from "vue-i18n";
import type { Accordion } from "@/season/interface/Accordion";
import AccordionItem from "@/components/AccordionItem.vue";

const props = defineProps({
  season: { type: String, required: true },
});

const { t, tm } = useI18n();

const title = t("seasons.season.subtitles.advices");
const advicesList: Accordion[] = tm(`seasons.season.${props.season}.advices`);
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    padding-bottom: 20px;
    text-align: center;
  }

  .advices-list {
    width: 90%;
    max-width: 1280px;
    padding: 0;
    list-style: none;
  }
}
</style>
