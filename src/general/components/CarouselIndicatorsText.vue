<script setup lang="ts">
defineProps({
  total: { type: Number, required: true },
  currentIndex: { type: Number, required: true },
});

const emit = defineEmits<{
  (e: "switch", index: number): void;
}>();
</script>

<template>
  <div class="carousel-indicators">
    <button
      :class="['carousel-indicator-item', { active: currentIndex === index }]"
      v-for="(item, index) in total"
      :key="index"
      @click="emit('switch', index)"
    ></button>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.carousel-indicators {
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  bottom: 10%;
  z-index: 2;
  @media (max-width: 768px) {
    bottom: 0;
  }
}

.carousel-indicator-item {
  width: 5px;
  height: 10px;
  border: none;
  background-color: $dark-grey;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 60%;
  cursor: pointer;
}

.active {
  opacity: 1;
}
</style>
