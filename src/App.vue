<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "@/navigation/views/Nav.vue";
</script>

<template>
  <header>
    <Nav />
  </header>

  <div class="body">
    <RouterView />
  </div>
</template>
