<script setup lang="ts">
import type { PropType } from "vue";
import { useRouter } from "vue-router";
import Button from "@/components/Button.vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import { aboutRoutesName } from "@/about/routes/routesName";
import type { PresentationSection } from "../interface/HomeContent";

const props = defineProps({
  section: { type: Object as PropType<PresentationSection>, required: true },
});

const router = useRouter();

function goToKnowMore() {
  router.push({ name: aboutRoutesName.HOME });
}
</script>

<template>
  <div class="presentation">
    <div class="presentation-image">
      <img
        :src="urlFor(props.section.image).width(900).format('webp').quality(80).url()"
        class="presentation-image-content"
        :alt="props.section.image.alt ?? ''"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div class="presentation-content">
      <h2 class="presentation-content-title">{{ props.section.title }}</h2>
      <PortableText
        as="div"
        :blocks="props.section.body"
        paragraph-class="presentation-content-text"
      />
      <Button
        class="button"
        :label="props.section.buttonLabel"
        background="green"
        @click="goToKnowMore()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.presentation {
  display: flex;
  width: 100%;

  &-image {
    width: 40%;
    padding: 5vw;
    background-color: $green;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    &-content {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 5px;
      transition: transform 3s ease;
      transform: scale(1.05);

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  &-content {
    width: 60%;
    background-color: $orange-light;
    padding: 30px 5%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &-title {
      margin-bottom: 20px;
    }
    // Les paragraphes sont rendus par PortableText : le style scopé ne les
    // atteint pas sans :deep().
    :deep(.presentation-content-text) {
      margin-bottom: 20px;
    }
    .button {
      margin-top: 20px;
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 768px) {
  .presentation {
    flex-direction: column-reverse;

    &-image {
      width: 100%;
    }

    &-content {
      width: 100%;
    }
  }
}
</style>
