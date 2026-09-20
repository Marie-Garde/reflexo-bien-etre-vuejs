<script setup lang="ts">
import { computed, type PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import { useIsMobile } from "../../reactives/isMobile";
import type { AboutCareerSection } from "../interface/AboutContent";

const props = defineProps({
  section: { type: Object as PropType<AboutCareerSection>, required: true },
});

const isMobile = useIsMobile();

// Cadrage dédié au mobile s'il a été renseigné, sinon la photo principale.
const careerImage = computed(() =>
  isMobile.value ? (props.section.mobileImage ?? props.section.image) : props.section.image,
);

const careerImageSource = computed(() =>
  urlFor(careerImage.value).width(1060).format("webp").quality(80).url(),
);
</script>

<template>
  <section class="about__career">
    <div class="about__career-text">
      <h2 class="about__section-title--left">{{ props.section.title }}</h2>
      <div class="about__career-description">
        <PortableText :blocks="props.section.body" />
      </div>
    </div>
    <div class="about__career-image-wrapper">
      <img
        class="about__career-image"
        :src="careerImageSource"
        :alt="careerImage.alt ?? ''"
        loading="lazy"
        decoding="async"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.about {
  &__section-title--left {
    text-align: left;
    margin-bottom: 40px;
  }

  &__career {
    max-width: 1280px;
    margin: 60px auto;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 20px;

    &-text {
      flex: 1;
    }

    &-description {
      // Paragraphes rendus par PortableText : :deep() est nécessaire.
      :deep(p) {
        margin-bottom: 20px;
      }
    }

    &-image-wrapper {
      flex: 1;
    }

    &-image {
      width: 80%;
      height: auto;
      border-radius: 5px;
      display: block;
      margin: 0 auto;
    }
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
    &__career {
      padding: 0 40px;
      gap: 20px;
      &-text {
        flex: 1;
        text-align: left;
      }
      &-image-wrapper {
        flex: 1;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    &__section-title--left {
      text-align: center;
    }

    &__career {
      flex-direction: column;
      margin: 40px auto;
      gap: 20px;

      &-description {
        text-align: center;
      }

      &-image {
        width: 100%;
      }
    }
  }
}
</style>
