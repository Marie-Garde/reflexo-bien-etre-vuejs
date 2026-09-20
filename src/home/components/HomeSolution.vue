<script setup lang="ts">
import { computed, type PropType } from "vue";
import LinkRouter from "@/components/LinkRouter.vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import { practicesRoutesName } from "@/practices/routes/routesName";
import type { SolutionSection } from "../interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<SolutionSection>, required: true },
});

const practicesRouteName = practicesRoutesName.HOME;

// La largeur intrinsèque de cette image pilote le partage de l'espace en flex :
// l'agrandir rétrécirait la colonne de texte. On plafonne sans jamais suragrandir.
const imageSrc = computed(() => {
  const natural = props.section.image.naturalWidth ?? 1000;
  return urlFor(props.section.image)
    .width(Math.min(natural, 1000))
    .format("webp")
    .quality(80)
    .url();
});
</script>

<template>
  <div class="overlay">
    <div class="solution">
      <div class="solution-text">
        <h2 class="title">{{ props.section.title }}</h2>
        <PortableText :blocks="props.section.intro" paragraph-class="text" />
        <ul>
          <li v-for="practice in props.section.practices" :key="practice._key">
            <div>
              <strong>{{ practice.name }} :</strong> {{ practice.description }}
            </div>
          </li>
        </ul>
        <PortableText :blocks="props.section.outro" paragraph-class="text" />

        <LinkRouter
          class="link"
          :label="props.section.buttonLabel"
          is-underline
          :to="practicesRouteName"
        />
      </div>
      <img
        :src="imageSrc"
        :alt="props.section.image.alt ?? ''"
        :width="props.section.image.naturalWidth"
        :height="props.section.image.naturalHeight"
        decoding="async"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.overlay {
  width: 100%;
  height: auto;
  margin-top: 60px;
  background-image: url("@/assets/background/HomeSolutionBackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px 40px 20px;
  display: flex;
  justify-content: center;
}

.solution {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  &-text {
    width: 70%;
    color: $white;

    .title {
      margin-bottom: 30px;
    }
    // Les paragraphes viennent de PortableText : le style scopé ne les atteint
    // pas sans :deep().
    :deep(.text) {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 30px;
      }
    }
    .link {
      margin-top: 30px;
      color: $white;
    }

    ul {
      margin-bottom: 20px;
    }
  }

  img {
    width: 60%;
    height: auto;
    border-radius: 5px;
  }
}

@media (max-width: 768px) {
  .overlay {
    height: auto;
    padding: 30px 20px 40px 20px;
  }

  .solution {
    flex-direction: column-reverse;
    gap: 30px;

    &-text {
      width: 90%;
      text-align: center;
    }

    img {
      width: 90%;
    }
  }
}
</style>
