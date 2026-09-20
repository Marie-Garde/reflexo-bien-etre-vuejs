<script setup lang="ts">
import type { PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { AboutApproachSection } from "../interface/AboutContent";
import type { SanityImage } from "@/home/interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<AboutApproachSection>, required: true },
});

// Les vignettes sont affichées en 230x230 : on les recadre côté Sanity plutôt
// que de télécharger l'original (l'une d'elles fait 6048px de large).
function thumbnail(image: SanityImage) {
  return urlFor(image).width(460).height(460).fit("crop").format("webp").quality(80).url();
}
</script>

<template>
  <section class="about__approach">
    <h2 class="about__section-title--left">{{ props.section.title }}</h2>
    <div class="about__approach-top">
      <div class="about__approach-text">
        <PortableText :blocks="props.section.body" />
      </div>
      <div class="about__approach-image-wrapper">
        <img
          class="about__approach-image"
          :src="urlFor(props.section.image).width(1200).format('webp').quality(80).url()"
          :alt="props.section.image.alt ?? ''"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
    <div class="about__approach-bottom">
      <div class="about__approach-gallery">
        <figure
          v-for="item in props.section.gallery"
          :key="item._key"
          class="about__approach-gallery-item"
        >
          <img
            :src="thumbnail(item.image)"
            :alt="item.image.alt ?? ''"
            loading="lazy"
            decoding="async"
          />
          <figcaption>{{ item.caption }}</figcaption>
        </figure>
      </div>
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

  &__approach {
    max-width: 1280px;
    margin: 60px auto 60px;
    padding: 0 20px;

    &-top {
      display: flex;
      justify-content: space-between;
      align-items: top;
      gap: 60px;
      margin-bottom: 40px;
    }

    &-text {
      flex-basis: 50%;

      // Paragraphes rendus par PortableText : :deep() est nécessaire.
      :deep(p) {
        margin-bottom: 20px;
      }

      .bold {
        font-weight: bold;
      }
    }

    &-image-wrapper {
      flex-basis: 48%;
    }

    &-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }

    &-bottom {
      display: flex;
      margin-top: 40px;
    }

    &-gallery {
      display: flex;
      gap: 20px;

      &-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        transition: transform 0.3s ease;
        box-shadow: 0 5px 5px $dark-grey;

        img {
          width: 230px;
          height: 230px;
          object-fit: cover;
          filter: brightness(70%);
          display: block;
        }

        figcaption {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: $white;
          font-size: 1.4rem;
          text-align: center;
          pointer-events: none;
        }

        &:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 16px rgba($black, 0.3);
        }
      }
    }
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .about {
    &__approach {
      padding: 0 40px;
      &-bottom {
        margin-top: 40px;
      }
      &-gallery {
        margin-top: 40px;
        justify-content: center;
        align-self: center;

        figcaption {
          font-size: 1rem;
        }

        &-item {
          img {
            width: 170px;
            height: 170px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    &__section-title--left {
      text-align: center;
    }

    &__approach {
      margin: 20px auto 40px auto;
      &-top {
        flex-direction: column;
        gap: 20px;
        margin-bottom: 0;
      }

      &-text {
        flex-basis: 100%;
        text-align: center;
      }

      &-image-wrapper {
        flex-basis: 100%;
      }

      &-image {
        display: none;
      }

      &-bottom {
        flex-direction: column;
        margin-top: 0;
        gap: 20px;
      }

      &-gallery {
        flex-direction: column;
        width: 100%;
        align-self: center;

        &-item {
          img {
            width: 100%;
            height: 200px;
          }
        }
      }
    }
  }
}
</style>
