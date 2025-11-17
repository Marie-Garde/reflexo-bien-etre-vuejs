<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "@/navigation/views/Nav.vue";
import TheFooter from "@/footer/views/TheFooter.vue";
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
