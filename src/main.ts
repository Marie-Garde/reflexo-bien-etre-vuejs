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
  ({ app, router }) => {
    app.use(createPinia());
    app.use(i18n);

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
  }
);
