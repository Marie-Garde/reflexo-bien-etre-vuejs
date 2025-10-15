<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "@/navigation/views/Nav.vue";
import TheFooter from "@/footer/views/TheFooter.vue";
</script>

<template>
  <header>
    <Nav />
  </header>

  <div class="body">
    <RouterView />
  </div>

  <footer><TheFooter /></footer>
</template>
