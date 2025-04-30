<script setup lang="ts">
defineProps({
  label: { type: String, required: true },
  background: { type: String, default: "brown-dark" },
});
</script>

<template>
  <div class="header">
    <div :class="['left', `left-${background}`]">
      <h1>{{ label }}</h1>
    </div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  position: relative;
  width: 100%;
  height: 90px;
  overflow: hidden;
  margin-top: 90px;
}

.left,
.right {
  position: absolute;
  width: 100%;
  height: 100%;
}

.left {
  clip-path: polygon(0 0, calc(55% - 10px) 0, calc(45% - 10px) 100%, 0 100%);
  &-orange {
    background-color: $orange;
  }
  &-green {
    background-color: $green;
  }
  h1 {
    height: 100%;
    margin-left: 3vw;
    display: flex;
    align-items: center;
    color: $white;
  }
}

.right {
  background-image: url("@/assets/illustrations/flower-field.jpg");
  // background-color: $orange;
  clip-path: polygon(calc(55% + 10px) 0, 100% 0, 100% 100%, calc(45% + 10px) 100%);
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px; /* Largeur de l'espace blanc */
  height: 100%;
  background-color: white;
  transform: translateX(-50%);
}
</style>
