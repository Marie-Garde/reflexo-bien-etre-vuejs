<script setup lang="ts">
import ArrowLeft from "@/assets/icons/Arrow-left.vue";
import ArrowRight from "@/assets/icons/Arrow-right.vue";

const emit = defineEmits(["prev", "next"]);
</script>

<template>
  <button class="carousel-control left" @click="emit('prev')" aria-label="Slide précédente">
    <ArrowLeft />
  </button>
  <button class="carousel-control right" @click="emit('next')" aria-label="Slide suivante">
    <ArrowRight />
  </button>
</template>

<style scoped lang="scss">
.carousel-control {
  background-color: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  top: calc(50% - 25px);
  cursor: pointer;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>
