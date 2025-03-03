<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  background: { type: String, default: "brown-dark" },
});

const emit = defineEmits(["click"]);

function OnClick() {
  emit("click");
}
</script>

<template>
  <button :class="`btn-${background}`" @click="OnClick()">{{ label }}</button>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";
button {
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.btn-orange {
  background-color: $orange;
}

.btn-brown-dark {
  background-color: $brown-dark;
  color: $white-soft;
}
</style>
