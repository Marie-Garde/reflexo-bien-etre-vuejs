import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import i18n from "./i18n";

import App from "./App.vue";
import router from "./router";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.component("Splide", Splide);
app.component("SplideSlide", SplideSlide);
app.mount("#app");
