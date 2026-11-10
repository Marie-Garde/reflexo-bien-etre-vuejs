<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import PortableText from "@/general/components/PortableText.vue";
import { useCgvStore } from "../stores/cgvContent";

const store = useCgvStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <div class="cgv" v-if="content">
    <h1>{{ content.title }}</h1>

    <div v-if="content.intro?.length" class="intro">
      <PortableText :blocks="content.intro" />
    </div>

    <template v-for="section in content.sections" :key="section._key">
      <h2>{{ section.title }}</h2>
      <PortableText :blocks="section.body" />
      <div v-if="section.warning?.length" class="warning">
        <PortableText :blocks="section.warning" />
      </div>
    </template>

    <p v-if="content.updatedAt" class="updated-at">
      Date de dernière mise à jour : {{ content.updatedAt }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.cgv {
  max-width: 1000px;
  margin: 0 auto 60px auto;
  // Le dégagement est une marge intérieure : une marge extérieure fusionnerait
  // avec celle de `.body`, et le titre passerait sous le menu fixe.
  padding: 40px 40px 0 40px;
  line-height: 1.6;

  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: $brown-dark;
  }

  h2 {
    margin-top: 40px;
    padding-bottom: 8px;
    border-bottom: 1px solid $brown-medium;
    color: $brown-dark;
  }

  .intro {
    margin-bottom: 20px;
  }

  .updated-at {
    margin-top: 40px;
    font-style: italic;
  }

  @media (max-width: 768px) {
    // Le bandeau du haut passe sur deux lignes : le menu descend d'autant.
    padding: 110px 20px 0 20px;
  }
}

/* Listes et paragraphes rendus par PortableText : :deep() est nécessaire. */
:deep(p) {
  margin-bottom: 12px;
}
:deep(ul) {
  padding-left: 20px;
}
:deep(li) {
  margin-bottom: 8px;
}
:deep(a) {
  color: $brown-medium;
}

.warning {
  background-color: $orange-white;
  border: 1px solid $orange-light;
  padding: 1rem;
  border-radius: 4px;
}
</style>
