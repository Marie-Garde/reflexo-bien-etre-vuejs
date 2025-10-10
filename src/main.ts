import "./assets/main.css";

import { ViteSSG } from "vite-ssg";
import { createPinia } from "pinia";
import i18n from "./i18n";

import App from "./App.vue";
import { routes, scrollBehavior } from "./router";

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior,
}, ({ app }) => {
  app.use(createPinia());
  app.use(i18n);
});
