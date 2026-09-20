<script setup lang="ts">
import type { PropType } from "vue";
import { urlFor } from "@/sanityClient";
import type { OutsideSessionContent } from "../../interface/PracticesContent";
import type { SanityImage } from "@/home/interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<OutsideSessionContent["who"]>, required: true },
});

function background(image: SanityImage) {
  const url = urlFor(image).width(640).format("webp").quality(80).url();
  return { backgroundImage: `url("${url}")` };
}
</script>

<template>
  <div class="who">
    <h2>{{ props.section.title }}</h2>
    <p>{{ props.section.text }}</p>
    <ul class="who-list">
      <li
        class="who-list-item"
        v-for="person in props.section.people"
        :key="person._key"
        :style="background(person.image)"
      >
        <div class="who-list-item-frame">
          <div>{{ person.label }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.who {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 30px;
  }

  .who-list {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;

    &-item {
      flex: 1 1 25%;
      height: 300px;
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      color: white;
      text-align: center;
      font-weight: bold;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.05);
      }

      &-frame {
        background: rgba(242, 241, 228, 0.7);
        padding: 20px;
        width: calc(100% - 40px);
        height: calc(100% - 40px);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: $black;
      }
    }
  }
}

@media (max-width: 768px) {
  .who {
    margin-top: 40px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    p {
      width: 90%;
      margin: 0 auto 20px auto;
    }

    .who-list {
      flex-direction: column;

      &-item {
        min-height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      &-item-frame {
        height: 200px;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .who {
    margin-top: 30px;
    h2 {
      margin: 0 auto 20px auto;
    }
    .who-list {
      flex-wrap: wrap;

      &-item {
        flex-basis: 50%;
      }
    }
  }
}
</style>
