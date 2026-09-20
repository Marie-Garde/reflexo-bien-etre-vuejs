<script setup lang="ts">
import { computed, type PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { PracticesPillarsSection } from "../../interface/PracticesContent";
import type { SanityImage } from "@/home/interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<PracticesPillarsSection>, required: true },
  goToInsideCare: { type: Function as PropType<() => void>, required: true },
  goToOutsideCare: { type: Function as PropType<() => void>, required: true },
});

// Images de fond : le cadrage reste piloté par le CSS (cover, aligné en haut),
// on se contente de servir une taille raisonnable.
function background(image: SanityImage) {
  const url = urlFor(image).width(1400).format("webp").quality(75).url();
  return { backgroundImage: `url("${url}")` };
}

const officeBackground = computed(() => background(props.section.officeImage));
const outsideBackground = computed(() => background(props.section.outsideImage));
</script>

<template>
  <div class="pillars">
    <div class="pillars-text">
      <h2>{{ props.section.title }}</h2>
      <PortableText
        as="div"
        :blocks="props.section.body"
        paragraph-class="pillars-text-paragraph"
      />
    </div>

    <ul class="pillars-list">
      <li class="left" :style="officeBackground" @click="props.goToInsideCare()">
        <p class="pillars-list-label">{{ props.section.officeLabel }}</p>
      </li>
      <li class="right" :style="outsideBackground" @click="props.goToOutsideCare()">
        <p class="pillars-list-label">{{ props.section.outsideLabel }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.pillars {
  margin-bottom: 60px;
  &-text {
    max-width: 1280px;
    margin: 60px auto 0 auto;
    text-align: center;
    h2 {
      margin-bottom: 40px;
    }
    // Paragraphes rendus par PortableText : :deep() est nécessaire.
    :deep(.pillars-text-paragraph) {
      padding-bottom: 10px;
    }
  }

  &-list {
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    margin-top: 40px;
    padding: 0;

    .left,
    .right {
      position: absolute;
      top: 0;
      height: 100%;
      width: 55%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p {
        z-index: 2;
        color: $white;
        font-size: 1.6rem;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
        transition: opacity 0.4s ease-in-out;
        z-index: 1;
      }

      &:hover::before {
        opacity: 0.4;
      }
    }

    .left {
      left: 0;
      clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
      transition: clip-path 0.4s ease-in-out;
    }

    .right {
      right: 0;
      clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
      transition: clip-path 0.4s ease-in-out;
    }

    &:hover {
      .left {
        clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
      }
      .right {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
      }
    }
  }
}

@media (max-width: 768px) {
  .pillars {
    max-width: 100%;
    margin: 0 auto 20px auto;
    &-text {
      max-width: 90%;
    }
    &-list {
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;
      overflow: visible;

      .left,
      .right {
        position: relative;
        width: 100%;
        height: 300px;
        clip-path: none !important;
      }

      .right {
        right: auto;
      }

      &:hover .left,
      &:hover .right {
        clip-path: none !important;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .pillars-text {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
