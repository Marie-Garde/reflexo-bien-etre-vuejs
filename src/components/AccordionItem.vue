<script setup lang="ts">
import Add_ring from "@/assets/icons/Add_ring.vue";
import Remove_ring from "@/assets/icons/Remove_ring.vue";

defineProps({
  title: String,
  isOpen: Boolean,
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div class="accordion-item">
    <button class="accordion-header" @click="emit('toggle')">
      <div v-html="title"></div>
      <Add_ring class="icon" v-if="!isOpen" />
      <Remove_ring class="icon" v-else />
    </button>

    <transition name="accordion">
      <div class="accordion-body" v-show="isOpen">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.accordion-item {
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background: none;
  border: none;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}

.accordion-body {
  color: #444;
  text-align: start;
  width: 90%;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: all 1s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
