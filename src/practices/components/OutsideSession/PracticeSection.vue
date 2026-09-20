<script setup lang="ts">
import { computed, type PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { OutsideSessionContent } from "../../interface/PracticesContent";

const props = defineProps({
  section: {
    type: Object as PropType<OutsideSessionContent["practice"]>,
    required: true,
  },
});

const imageSource = computed(() =>
  urlFor(props.section.image).width(1200).format("webp").quality(80).url(),
);
</script>

<template>
  <div class="infos-practices">
    <div class="text">
      <h2>{{ props.section.title }}</h2>
      <PortableText as="div" :blocks="props.section.body" />
    </div>
    <img :src="imageSource" :alt="props.section.image.alt ?? ''" loading="lazy" decoding="async" />
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

    // Paragraphes rendus par PortableText : :deep() est nécessaire.
    :deep(div:not(:last-child)) {
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
    height: fit-content;

    .text {
      padding: 0 40px 40px 60px;
      width: 50%;
    }
  }
}
</style>
