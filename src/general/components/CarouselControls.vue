<script setup lang="ts">
import ArrowLeft from "@/assets/icons/Arrow-left.vue";
import ArrowRight from "@/assets/icons/Arrow-right.vue";

const emit = defineEmits(["prev", "next"]);
</script>

<template>
  <ArrowLeft class="carousel-control left" @click="emit('prev')" />
  <ArrowRight class="carousel-control right" @click="emit('next')" />
</template>

<style scoped lang="scss">
.carousel-control {
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
