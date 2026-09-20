<script setup lang="ts">
import type { PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import type { OutsideSessionContent } from "../../interface/PracticesContent";

const props = defineProps({
  section: { type: Object as PropType<OutsideSessionContent["why"]>, required: true },
});
</script>

<template>
  <div class="why">
    <h2>{{ props.section.title }}</h2>
    <PortableText :blocks="props.section.body" />
    <ul class="why-list">
      <li class="why-list-item" v-for="reason in props.section.reasons" :key="reason">
        <p>{{ reason }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.why {
  width: 100%;
  background-image: url("@/assets/background/outsidePracticeBackground.png");
  background-size: cover;
  background-position: top;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 60px auto 40px auto;
  }

  &-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
    padding: 0;
    &-item {
      width: 250px;
      height: 250px;
      text-align: center;
      background-color: green;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;

      transition: transform 0.3s ease;

      &:first-child {
        background-color: #8f9460;
      }
      &:nth-child(2) {
        background-color: #aeb183;
      }
      &:nth-child(3) {
        background-color: #cdcea7;
      }
      &:nth-child(4) {
        background-color: #dee0b9;
      }
      &:nth-child(5) {
        background-color: #eff0e0;
      }
      p {
        margin: 0;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}

@media (max-width: 768px) {
  .why {
    height: auto;
    padding: 40px 20px;
    text-align: center;

    h2 {
      margin: 0 auto 20px auto;
    }

    &-list {
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;

      &-item {
        width: 250px;
        height: 250px;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .why {
    height: auto;
    padding: 60px 20px;

    h2 {
      margin: 0 auto 20px auto;
    }

    &-list {
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;

      &-item {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
