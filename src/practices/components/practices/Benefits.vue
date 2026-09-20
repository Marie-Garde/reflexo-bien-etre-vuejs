<script setup lang="ts">
import { computed, ref, type PropType } from "vue";
import AccordionItem from "@/components/AccordionItem.vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import { useIsMobile } from "../../../reactives/isMobile";
import type { PracticesBenefitsSection } from "../../interface/PracticesContent";

const props = defineProps({
  section: { type: Object as PropType<PracticesBenefitsSection>, required: true },
});

const isMobile = useIsMobile();

const benefitsImage = computed(() =>
  isMobile.value ? (props.section.mobileImage ?? props.section.image) : props.section.image,
);

// Sur grand écran, cette image n'a pas de largeur CSS : c'est sa taille propre
// qui décide du partage de l'espace avec la liste. On ne la suragrandit donc pas.
const benefitsImageSource = computed(() => {
  const image = benefitsImage.value;
  return urlFor(image)
    .width(Math.min(image.naturalWidth ?? 1200, 1200))
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
  <div class="benefits">
    <h2>{{ props.section.title }}</h2>
    <p>{{ props.section.subtitle }}</p>
    <div class="benefits-content">
      <img
        :src="benefitsImageSource"
        class="benefits-image"
        :alt="benefitsImage.alt ?? ''"
        :width="benefitsImage.naturalWidth"
        :height="benefitsImage.naturalHeight"
        decoding="async"
      />
      <ul class="benefits-list">
        <li v-for="benefit in props.section.items" :key="benefit._key">
          <AccordionItem
            :title="`<strong>${benefit.title}</strong>`"
            :is-open="openAccordionKey === benefit._key"
            @toggle="toggleAccordion(benefit._key)"
          >
            <div class="benefits-list-text">
              <PortableText as="div" :blocks="benefit.body" />
            </div>
          </AccordionItem>
        </li>
      </ul>
    </div>
    <p>{{ props.section.conclusion }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.benefits {
  width: 100%;
  background-color: $green;
  padding: 60px 0;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  p {
    max-width: 1280px;
    margin: 30px auto;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    max-width: 1280px;
    margin: 40px auto 0 auto;
  }
  &-list {
    list-style: none;
    padding: 0;
    width: 70%;
    margin: 0 auto;
    &-text {
      padding: 20px 0;

      // Paragraphes rendus par PortableText : :deep() est nécessaire.
      :deep(div + div) {
        margin-top: 1em;
      }
    }
  }
}

@media (max-width: 768px) {
  .benefits {
    width: 100%;
    h2 {
      padding: 0 10px;
    }
    p {
      max-width: 90%;
      margin: 20px auto;
    }
    &-list {
      width: 90%;
    }
    &-content {
      flex-direction: column-reverse;
      gap: 20px;
    }
    &-image {
      width: 90%;
      max-width: 300px;
    }
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .benefits-content {
    padding: 0 20px;
  }
}
</style>
