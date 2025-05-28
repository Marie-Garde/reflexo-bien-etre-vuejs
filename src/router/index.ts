import { createRouter, createWebHistory } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { homeRoutesPath } from "@/home/routes/routesPath";
import Home from "@/home/views/Home.vue";
import { aboutRoutesName } from "@/about/routes/routesName";
import { aboutRoutesPath } from "@/about/routes/routesPath";
import About from "@/about/views/About.vue";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { appointmentRoutesPath } from "@/appointment/routes/routesPath";
import Appointment from "@/appointment/views/Appointment.vue";
import { contactRoutesName } from "@/contact/routes/routesName";
import { contactRoutesPath } from "@/contact/routes/routesPath";
import Contact from "@/contact/views/Contact.vue";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { practicesRoutesPath } from "@/practices/routes/routesName";
import Practices from "@/practices/views/Practices.vue";
import PracticesOffice from "@/practices/views/OfficeSession.vue";
import PracticesOutside from "@/practices/views/OutsideSession.vue";
import { priceRoutesName } from "@/price/routes/routesName";
import { priceRoutesPath } from "@/price/routes/routesPath";
import Price from "@/price/views/Price.vue";
import { seasonsRoutesName } from "@/season/routes/routesName";
import { seasonsRoutesPath } from "@/season/routes/routesPath";
import Seasons from "@/season/views/Seasons.vue";
import Fall from "@/season/views/Fall.vue";
import Winter from "@/season/views/Winter.vue";
import Spring from "@/season/views/Spring.vue";
import Summer from "@/season/views/Summer.vue";
import InterSeasons from "@/season/views/InterSeasons.vue";
import { siteMapRoutesName } from "@/siteMap/routes/routesName";
import { siteMapRoutesPath } from "@/siteMap/routes/routesPath";
import siteMap from "@/siteMap/views/siteMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: homeRoutesPath.HOME,
      name: homeRoutesName.HOME,
      component: Home,
      meta: { title: "Réflexô Bien-être - Accueil" },
    },
    {
      path: aboutRoutesPath.HOME,
      name: aboutRoutesName.HOME,
      component: About,
      meta: { title: "Réflexô Bien-être - À propos" },
    },
    {
      path: appointmentRoutesPath.HOME,
      name: appointmentRoutesName.HOME,
      component: Appointment,
      meta: { title: "Réflexô Bien-être - Rendez-vous" },
    },
    {
      path: contactRoutesPath.HOME,
      name: contactRoutesName.HOME,
      component: Contact,
      meta: { title: "Réflexô Bien-être - Contact" },
    },
    {
      path: practicesRoutesPath.HOME,
      name: practicesRoutesName.HOME,
      component: Practices,
      meta: { title: "Réflexô Bien-être - Mes pratiques" },
    },
    {
      path: practicesRoutesPath.OFFICE,
      name: practicesRoutesName.OFFICE,
      component: PracticesOffice,
      meta: { title: "Réflexô Bien-être - Séance au cabinet" },
    },
    {
      path: practicesRoutesPath.OUTSIDE,
      name: practicesRoutesName.OUTSIDE,
      component: PracticesOutside,
      meta: { title: "Réflexô Bien-être - Séance extérieure" },
    },
    {
      path: priceRoutesPath.HOME,
      name: priceRoutesName.HOME,
      component: Price,
      meta: { title: "Réflexô Bien-être - Tarifs" },
    },
    {
      path: seasonsRoutesPath.HOME,
      name: seasonsRoutesName.HOME,
      component: Seasons,
      meta: { title: "Réflexô Bien-être - Ce qui bouge" },
    },
    {
      path: seasonsRoutesPath.FALL,
      name: seasonsRoutesName.FALL,
      component: Fall,
      meta: { title: "Réflexô Bien-être - Automne" },
    },
    {
      path: seasonsRoutesPath.WINTER,
      name: seasonsRoutesName.WINTER,
      component: Winter,
      meta: { title: "Réflexô Bien-être - Hiver" },
    },
    {
      path: seasonsRoutesPath.SPRING,
      name: seasonsRoutesName.SPRING,
      component: Spring,
      meta: { title: "Réflexô Bien-être - Printemps" },
    },
    {
      path: seasonsRoutesPath.SUMMER,
      name: seasonsRoutesName.SUMMER,
      component: Summer,
      meta: { title: "Réflexô Bien-être - Été" },
    },
    {
      path: seasonsRoutesPath.INTERSEASON,
      name: seasonsRoutesName.INTERSEASON,
      component: InterSeasons,
      meta: { title: "Réflexô Bien-être - Intersaison" },
    },
    {
      path: siteMapRoutesPath.HOME,
      name: siteMapRoutesName.HOME,
      component: siteMap,
      meta: { title: "Réflexô Bien-être - Plan du site" },
    },
    {
      path: "/",
      redirect: homeRoutesPath.HOME,
    },
  ],
});

export default router;
