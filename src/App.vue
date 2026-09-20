<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { RouterView } from "vue-router";
import Nav from "@/navigation/views/Nav.vue";
import TheFooter from "@/footer/views/TheFooter.vue";
import { useSiteSettingsStore } from "@/general/stores/siteSettings";

// Menu et pied de page sont affichés partout : une seule requête pour tout le
// site, gravée au build puis rafraîchie dans le navigateur.
const store = useSiteSettingsStore();
onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <header>
    <Nav />
  </header>

  <main class="body">
    <RouterView />
  </main>

  <footer><TheFooter /></footer>
</template>
