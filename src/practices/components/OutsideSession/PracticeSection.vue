<script setup lang="ts">
import { useI18n } from "vue-i18n";

defineProps<{
  image: string;
}>();

const { t, tm } = useI18n();

const practiceLabel = tm("practices.outsideSessionPage.practice.text");
</script>

<template>
  <div class="infos-practices">
    <div class="text">
      <h2>{{ t("practices.outsideSessionPage.practice.title") }}</h2>
      <div class="first-line" v-html="practiceLabel[0]"></div>
      <div v-html="practiceLabel[1]"></div>
    </div>
    <img :src="image" alt="" />
  </div>
</template>

<style scoped lang="scss">
.infos-practices {
  width: 100%;
  height: 60vh;
  display: flex;

  .text {
    width: 50%;
    padding: 0 80px 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin-bottom: 40px;
    }

    .first-line {
      margin-bottom: 20px;
    }
  }

  img {
    width: 50%;
    object-fit: cover;
    object-position: top;
  }
}

@media (max-width: 768px) {
  .infos-practices {
    flex-direction: column;
    height: auto;

    .text {
      width: 100%;
      padding: 40px 20px;
      text-align: center;
    }

    img {
      width: 100%;
      height: 40vh;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .infos-practices {
    height: 40vh;

    .text {
      padding: 0 40px 0 60px;
      width: 50%;
    }
  }
}
</style>
