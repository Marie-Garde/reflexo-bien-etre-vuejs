<script setup lang="ts">
import { computed, onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import PortableText from "@/general/components/PortableText.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import { urlFor } from "@/sanityClient";
import { articlesRoutesName } from "../routes/routesName";
import { useArticleStore } from "../stores/articlesContent";

const route = useRoute();
const store = useArticleStore();
const { bySlug } = storeToRefs(store);

const slug = computed(() => String(route.params.slug ?? ""));
const article = computed(() => bySlug.value[slug.value] ?? null);

onServerPrefetch(() => store.load(slug.value));
onMounted(() => store.load(slug.value));

const coverUrl = computed(() =>
  article.value
    ? urlFor(article.value.coverImage).width(1920).format("webp").quality(80).url()
    : "",
);

const publishedDate = computed(() =>
  article.value
    ? new Date(article.value.publishedAt).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "",
);
</script>

<template>
  <main class="article" v-if="article">
    <header class="article__header">
      <img
        class="article__cover"
        :src="coverUrl"
        :alt="article.coverImage.alt ?? ''"
        fetchpriority="high"
        decoding="async"
      />
      <div class="article__header-overlay">
        <time class="article__date" :datetime="article.publishedAt">{{ publishedDate }}</time>
        <h1 class="article__title">{{ article.title }}</h1>
      </div>
    </header>

    <div class="article__body">
      <PortableText :blocks="article.body" paragraph-class="article__paragraph" />
    </div>

    <div class="article__back">
      <LinkRouter label="Retour aux articles" is-underline :to="articlesRoutesName.HOME" />
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.article {
  width: 100%;

  &__header {
    position: relative;
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-shadow: 0 5px 5px $dark-grey;
  }

  &__cover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__header-overlay {
    width: 100%;
    max-width: 900px;
    margin-bottom: 4rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 10px;
  }

  &__date {
    display: block;
    margin-bottom: 10px;
    color: $brown-medium;
    font-size: 0.9rem;
  }

  &__title {
    margin: 0;
  }

  &__body {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 20px 20px;

    // Tout le corps est rendu par PortableText : :deep() est nécessaire.
    :deep(.article__paragraph) {
      margin-bottom: 20px;
    }

    :deep(h2) {
      margin: 40px 0 16px;
    }

    :deep(h3) {
      margin: 30px 0 12px;
    }

    :deep(blockquote) {
      margin: 30px 0;
      padding: 10px 0 10px 20px;
      border-left: 4px solid $green;
      font-style: italic;
    }

    :deep(ul),
    :deep(ol) {
      margin: 0 0 20px;
      padding-left: 24px;
    }

    :deep(li) {
      margin-bottom: 8px;
    }

    :deep(a) {
      color: $brown-medium;
    }

    :deep(.portable-text-figure) {
      margin: 40px 0;

      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 5px;
      }

      figcaption {
        margin-top: 8px;
        text-align: center;
        font-size: 0.9rem;
        color: $brown-medium;
      }
    }
  }

  &__back {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 20px 80px;
  }
}

@media (max-width: 768px) {
  .article {
    &__header {
      height: 40vh;
    }

    &__header-overlay {
      margin-bottom: 0;
      border-radius: 0;
      text-align: center;
    }

    &__body {
      padding: 40px 16px 20px;
    }
  }
}
</style>
