import "./assets/main.css";

import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import i18n from "./i18n";

import App from "./App.vue";
import { routes, scrollBehavior } from "./router";

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior,
  },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
    app.use(i18n);

    // Transporte l'état récupéré pendant la génération statique jusqu'au
    // navigateur, pour que l'hydratation parte du même contenu que le HTML.
    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else if (initialState.pinia) {
      pinia.state.value = initialState.pinia;
    }

    router.afterEach((to) => {
      if (!import.meta.env.SSR) {
        const defaultTitle = "Reflex'ô Bien-être";
        const title = to.meta.title ? `${to.meta.title}` : defaultTitle;
        const description = to.meta.description as string;

        document.title = title;

        let descriptionTag = document.querySelector('meta[name="description"]');
        if (!descriptionTag) {
          descriptionTag = document.createElement("meta");
          descriptionTag.setAttribute("name", "description");
          document.head.appendChild(descriptionTag);
        }
        descriptionTag.setAttribute("content", description);
      }
    });
  },
);
