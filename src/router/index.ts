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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: homeRoutesPath.HOME,
      name: homeRoutesName.HOME,
      component: Home,
    },
    {
      path: aboutRoutesPath.HOME,
      name: aboutRoutesName.HOME,
      component: About,
    },
    {
      path: appointmentRoutesPath.HOME,
      name: appointmentRoutesName.HOME,
      component: Appointment,
    },
    {
      path: contactRoutesPath.HOME,
      name: contactRoutesName.HOME,
      component: Contact,
    },
    {
      path: practicesRoutesPath.HOME,
      name: practicesRoutesName.HOME,
      component: Practices,
    },
    {
      path: priceRoutesPath.HOME,
      name: priceRoutesName.HOME,
      component: Price,
    },
    {
      path: seasonsRoutesPath.HOME,
      name: seasonsRoutesName.HOME,
      component: Seasons,
    },
    {
      path: seasonsRoutesPath.FALL,
      name: seasonsRoutesName.FALL,
      component: Fall,
    },
    {
      path: seasonsRoutesPath.WINTER,
      name: seasonsRoutesName.WINTER,
      component: Winter,
    },
    {
      path: seasonsRoutesPath.SPRING,
      name: seasonsRoutesName.SPRING,
      component: Spring,
    },
    {
      path: seasonsRoutesPath.SUMMER,
      name: seasonsRoutesName.SUMMER,
      component: Summer,
    },
    {
      path: seasonsRoutesPath.INTERSEASON,
      name: seasonsRoutesName.INTERSEASON,
      component: InterSeasons,
    },
    {
      path: "/",
      redirect: homeRoutesPath.HOME,
    },
  ],
});

export default router;
