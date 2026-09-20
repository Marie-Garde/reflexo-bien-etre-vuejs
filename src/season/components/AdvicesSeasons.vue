<script setup lang="ts">
import { computed, ref, type PropType } from "vue";
import AccordionItem from "@/components/AccordionItem.vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { SeasonContent } from "../interface/SeasonContent";

const props = defineProps({
  section: { type: Object as PropType<SeasonContent["advices"]>, required: true },
});

// Cette image n'a pas de largeur CSS : sa taille propre décide de son rendu.
// L'agrandir la ferait déborder, on plafonne donc à la taille d'origine.
const imageUrl = computed(() => {
  const image = props.section.image;
  return urlFor(image)
    .width(Math.min(image.naturalWidth ?? 1100, 1100))
    .format("webp")
    .quality(80)
    .url();
});

const openAccordionKey = ref<string | null>(null);

const toggleAccordion = (accordionKey: string) => {
  const currentlyOpen = openAccordionKey.value;

  if (currentlyOpen === accordionKey) {
    openAccordionKey.value = null;
  } else if (currentlyOpen !== null) {
    openAccordionKey.value = null;
    setTimeout(() => {
      openAccordionKey.value = accordionKey;
    }, 300);
  } else {
    openAccordionKey.value = accordionKey;
  }
};
</script>

<template>
  <div class="advices-seasons">
    <div class="advices-seasons__container">
      <img
        :src="imageUrl"
        :alt="props.section.image.alt ?? ''"
        class="advices-seasons__image"
        decoding="async"
      />
      <div class="advices-seasons__content">
        <h2 class="advices-seasons__title">{{ props.section.title }}</h2>
        <ul class="advices-seasons__list">
          <li v-for="advice in props.section.items" :key="advice._key">
            <AccordionItem
              :title="advice.title"
              :is-open="openAccordionKey === advice._key"
              @toggle="toggleAccordion(advice._key)"
            >
              <PortableText as="div" :blocks="advice.body" />
            </AccordionItem>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.advices-seasons {
  height: 100%;
  width: 100%;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  &__image {
    width: 50%;
    height: 100%;
    object-fit: cover;
    align-self: stretch;
  }

  &__content {
    width: 50%;
    margin-right: 60px;
  }

  &__title {
    padding-bottom: 40px;
    text-align: center;
  }

  &__list {
    width: 100%;
    padding: 0 40px;
    list-style: none;
  }
}

@media (max-width: 768px) {
  .advices-seasons {
    width: 100%;
    &__container {
      flex-direction: column;
    }
    &__image {
      width: 100%;
    }
    &__content {
      width: 90%;
      margin: 0 0 60px 0;
    }
    &__list {
      width: 100%;
      padding: 0;
    }
  }
}
</style>
