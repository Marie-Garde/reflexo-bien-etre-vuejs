<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import PortableText from "@/general/components/PortableText.vue";
import { useLegalNoticeStore } from "./stores/legalNoticeContent";

const store = useLegalNoticeStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <div class="legal-notice" v-if="content">
    <h1>{{ content.title }}</h1>

    <template v-for="section in content.sections" :key="section._key">
      <h2>{{ section.title }}</h2>
      <PortableText :blocks="section.body" />
      <div v-if="section.warning?.length" class="warning">
        <PortableText :blocks="section.warning" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.legal-notice {
  padding: 2rem;
  font-family: sans-serif;
  line-height: 1.6;
}
h1,
h2 {
  color: #333;
}
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
h2 {
  margin-top: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
/* Listes rendues par PortableText : :deep() est nécessaire. */
:deep(ul) {
  list-style-type: none;
  padding-left: 0;
}
:deep(li) {
  margin-bottom: 0.5rem;
}
.warning {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  padding: 1rem;
  border-radius: 4px;
}
</style>
