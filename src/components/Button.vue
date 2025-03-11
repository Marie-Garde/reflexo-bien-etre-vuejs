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
@use "@/assets/variables.scss" as *;
button {
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-orange {
  background-color: $orange;
  border: transparent;
  color: $white-soft;
  padding: 12px 24px;
}

.btn-orange-light {
  background-color: $orange-light;
  border: transparent;
  color: $brown-dark;
  padding: 12px 24px;
}

.btn-brown-dark {
  background-color: $brown-dark;
  color: $white-soft;
}
</style>
