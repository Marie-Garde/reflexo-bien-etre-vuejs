<script setup lang="ts">
defineProps<{
  title: string;
  text: string[];
  afterList: Array<{
    title: string;
    text: string;
  }>;
}>();
</script>

<template>
  <section class="office-session__after">
    <h2 class="office-session__section-title">{{ title }}</h2>
    <p v-for="(p, i) in text" :key="i">{{ p }}</p>
    <ul class="after-list">
      <li v-for="(item, i) in afterList" :key="i">
        <p class="title">{{ item.title }}</p>
        <p class="text">{{ item.text }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__after {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;
  background-color: $orange-white;

  .after-list {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    list-style: none;
    max-width: 1280px;
    margin-top: 40px;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 25%;
      padding: 30px 20px;
      border-radius: 5px;
      color: $white;
      transition: transform 0.3s ease;

      .title {
        font-weight: bold;
        margin-bottom: 20px;
      }

      &:hover {
        transform: scale(1.05);
      }

      &:first-child {
        background-color: #4d2934;
      }
      &:nth-child(2) {
        background-color: #753e4e;
      }
      &:nth-child(3) {
        background-color: #b17887;
      }
      &:nth-child(4) {
        background-color: #b17887;
      }
    }
  }
}


</style>
