<script setup lang="ts">
import type { PropType } from "vue";
import ArticleCard from "@/articles/components/ArticleCard.vue";
import LinkRouter from "@/components/LinkRouter.vue";
import { articlesRoutesName } from "@/articles/routes/routesName";
import type { LatestArticlesSection } from "../interface/HomeContent";
import type { ArticleSummary } from "@/articles/interface/ArticleContent";

const props = defineProps({
  section: { type: Object as PropType<LatestArticlesSection>, required: true },
  articles: { type: Array as PropType<ArticleSummary[]>, default: () => [] },
});
</script>

<template>
  <section class="home-articles" v-if="props.articles.length">
    <h2 class="home-articles__title">{{ props.section.title }}</h2>

    <ul class="home-articles__list">
      <li v-for="article in props.articles" :key="article._id">
        <ArticleCard :article="article" />
      </li>
    </ul>

    <LinkRouter
      class="home-articles__link"
      :label="props.section.linkLabel"
      is-underline
      :to="articlesRoutesName.HOME"
    />
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.home-articles {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 60px 20px 80px;
  text-align: center;

  &__title {
    margin-bottom: 40px;
  }

  // En flex plutôt qu'en grille : avec un ou deux articles, les cartes restent
  // centrées au lieu de se coller à gauche.
  &__list {
    list-style: none;
    padding: 0;
    margin: 0 0 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    text-align: left;

    > li {
      flex: 0 1 380px;
    }
  }

  &__link {
    display: inline-block;
  }
}

@media (max-width: 900px) {
  .home-articles__list {
    gap: 30px;

    > li {
      flex: 0 1 100%;
    }
  }
}

@media (max-width: 768px) {
  .home-articles {
    padding: 40px 16px 60px;
  }
}
</style>
