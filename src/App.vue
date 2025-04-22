<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "@/navigation/views/Nav.vue";
import Footer from "@/footer/views/Footer.vue";
</script>

<template>
  <header>
    <Nav />
  </header>

  <div class="body">
    <RouterView />
  </div>

  <footer><Footer /></footer>
</template>
