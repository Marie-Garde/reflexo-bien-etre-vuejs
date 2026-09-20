<script setup lang="ts">
import { computed, onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import ArticleCard from "../components/ArticleCard.vue";
import { useArticlesStore } from "../stores/articlesContent";

const store = useArticlesStore();
const { page, articles } = storeToRefs(store);

onServerPrefetch(store.loadList);
onMounted(store.loadList);

// L'image passe par une variable CSS : la feuille de style s'en sert deux fois,
// pour le grand bandeau et pour la bande réduite du mobile.
const headerStyle = computed(() => {
  if (!page.value) return {};
  const url = urlFor(page.value.headerImage).width(1920).format("webp").quality(75).url();
  return { "--header-image": `url("${url}")` };
});
</script>

<template>
  <div class="articles" v-if="page">
    <header class="articles__header" :style="headerStyle">
      <div class="articles__header-container">
        <div class="articles__header-overlay">
          <h1 class="articles__title">{{ page.title }}</h1>
          <PortableText
            v-if="page.intro?.length"
            :blocks="page.intro"
            paragraph-class="articles__intro"
          />
        </div>
      </div>
    </header>

    <main class="articles__content">
      <p v-if="!articles.length" class="articles__empty">{{ page.emptyMessage }}</p>

      <ul v-else class="articles__list">
        <li v-for="article in articles" :key="article._id">
          <ArticleCard :article="article" />
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.articles {
  &__header {
    width: 100%;
    height: 60vh;
    background-image: var(--header-image);
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;

    &-container {
      width: 100%;
      max-width: 1280px;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    &-overlay {
      width: 50%;
      max-width: 600px;
      padding: 2rem;
      margin-bottom: 5rem;
      background: rgba($white, 0.9);
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }
  }

  &__title {
    margin-bottom: 20px;
  }

  // Rendu par PortableText : :deep() est nécessaire.
  :deep(.articles__intro) {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__content {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px 80px;
  }

  &__empty {
    text-align: center;
    color: $brown-medium;
  }

  // Même principe que sur l'accueil : les cartes gardent leur largeur et se
  // centrent quand elles ne remplissent pas la ligne.
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;

    > li {
      flex: 0 1 380px;
    }
  }
}

@media (max-width: 1200px) and (min-width: 769px) {
  .articles {
    &__header-overlay {
      width: 50%;
      margin: 0 auto 5rem 40px;
    }
  }
}

@media (max-width: 768px) {
  .articles {
    &__header {
      height: auto;
      background-image: none;
      display: block;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background-image: var(--header-image);
        background-size: cover;
        background-position: center;
      }

      &-container {
        align-items: center;
        justify-content: center;
      }

      &-overlay {
        width: 90%;
        margin-bottom: 0;
        padding: 2rem 0;
        text-align: center;
        background: transparent;
        box-shadow: none;
      }
    }

    &__content {
      padding: 40px 16px 60px;
    }

    &__list {
      gap: 30px;

      > li {
        flex: 0 1 100%;
      }
    }
  }
}
</style>
