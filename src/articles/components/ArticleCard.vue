<script setup lang="ts">
import type { PropType } from "vue";
import { RouterLink } from "vue-router";
import { urlFor } from "@/sanityClient";
import { articlesRoutesName } from "../routes/routesName";
import type { ArticleSummary } from "../interface/ArticleContent";

const props = defineProps({
  article: { type: Object as PropType<ArticleSummary>, required: true },
});

const thumbnail = urlFor(props.article.coverImage)
  .width(800)
  .height(520)
  .fit("crop")
  .format("webp")
  .quality(80)
  .url();

const publishedDate = new Date(props.article.publishedAt).toLocaleDateString("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <RouterLink
    class="article-card"
    :to="{ name: articlesRoutesName.DETAIL, params: { slug: props.article.slug } }"
  >
    <img
      class="article-card__image"
      :src="thumbnail"
      :alt="props.article.coverImage.alt ?? ''"
      width="800"
      height="520"
      loading="lazy"
      decoding="async"
    />
    <div class="article-card__text">
      <time class="article-card__date" :datetime="props.article.publishedAt">
        {{ publishedDate }}
      </time>
      <h3 class="article-card__title">{{ props.article.title }}</h3>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.article-card {
  display: block;
  color: inherit;
  text-decoration: none;
  background-color: $orange-white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 5px $dark-grey;
  transition: transform 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
  }

  &__image {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  &__text {
    padding: 20px;
  }

  &__date {
    display: block;
    margin-bottom: 8px;
    font-size: 0.85rem;
    color: $brown-medium;
  }

  &__title {
    margin: 0;
    font-size: 1.3rem;
  }
}
</style>
