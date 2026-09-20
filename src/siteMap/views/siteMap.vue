<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import LinkRouter from "@/components/LinkRouter.vue";
import { useSiteMapContentStore } from "../stores/siteMapContent";

const store = useSiteMapContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <div class="container" v-if="content">
    <h1>{{ content.title }}</h1>
    <template v-for="entry in content.entries" :key="entry._key">
      <h2>
        <LinkRouter class="link" :label="entry.label" :to="entry.destination" />
      </h2>
      <div v-if="entry.children?.length" class="subCategory">
        <h3 v-for="child in entry.children" :key="child._key">
          <LinkRouter class="link" :label="child.label" :to="child.destination" />
        </h3>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  margin: 60px auto 40px 40px;
  max-width: 1280px;

  h1 {
    margin: 150px 0 30px 0;
  }
  h2 {
    margin-top: 20px;
  }
  .subCategory {
    margin-left: 30px;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
  }
}
</style>
