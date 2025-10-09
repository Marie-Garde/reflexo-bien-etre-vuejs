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
import { practicesRoutesName } from "@/practices/routes/routesName";
import { practicesRoutesPath } from "@/practices/routes/routesPath";
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
import { notFoundRoutesName } from "@/notFound/routes/routesName";
import { notFoundRoutesPath } from "@/notFound/routes/routesPath";
import NotFound from "@/notFound/views/notFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: homeRoutesPath.HOME,
      name: homeRoutesName.HOME,
      component: Home,
      meta: {
        title: "Réflexô Bien-être - Accueil",
        description:
          "Soulagez stress, anxiété et douleurs avec des séances de réflexologie et de médecine chinoise à Nespouls (19). Prenez rendez-vous pour retrouver équilibre et bien-être.",
      },
    },
    {
      path: aboutRoutesPath.HOME,
      name: aboutRoutesName.HOME,
      component: About,
      meta: {
        title: "Réflexô Bien-être - À propos",
        description:
          "Découvrez mon parcours de praticienne en réflexologie et médecine chinoise, ainsi que ma vision du bien-être global et de l'accompagnement personnalisé.",
      },
    },
    {
      path: appointmentRoutesPath.HOME,
      name: appointmentRoutesName.HOME,
      component: Appointment,
      meta: {
        title: "Réflexô Bien-être - Rendez-vous",
        description:
          "Prenez rendez-vous en ligne pour une séance de réflexologie, massage Tuina ou de Qi Gong. Choisissez le créneau qui vous convient.",
      },
    },
    {
      path: contactRoutesPath.HOME,
      name: contactRoutesName.HOME,
      component: Contact,
      meta: {
        title: "Réflexô Bien-être - Contact",
        description:
          "Contactez-moi pour toute question. Retrouvez ici téléphone, email et adresse du cabinet.",
      },
    },
    {
      path: practicesRoutesPath.HOME,
      name: practicesRoutesName.HOME,
      component: Practices,
      meta: {
        title: "Réflexô Bien-être - Mes accompagnements",
        description:
          "Explorez les différents accompagnements proposés : réflexologie plantaire, palmaire, faciale, dorsale, massages Tuina et Qi Gong.",
      },
    },
    {
      path: practicesRoutesPath.OFFICE,
      name: practicesRoutesName.OFFICE,
      component: PracticesOffice,
      meta: {
        title: "Réflexô Bien-être - Séance au cabinet",
        description:
          "Déroulement d'une séance de réflexologie ou de massage Tuina au cabinet. Un temps d'échange suivi d'un soin personnalisé pour votre bien-être.",
      },
    },
    {
      path: practicesRoutesPath.OUTSIDE,
      name: practicesRoutesName.OUTSIDE,
      component: PracticesOutside,
      meta: {
        title: "Réflexô Bien-être - Séance extérieure",
        description: "Déroulement d'une séance de Qi Gong au cabinet ou en visio.",
      },
    },
    {
      path: priceRoutesPath.HOME,
      name: priceRoutesName.HOME,
      component: Price,
      meta: {
        title: "Réflexô Bien-être - Tarifs",
        description:
          "Consultez les tarifs des différentes prestations : séances de réflexologie, massages Tuina, et Qi Gong.",
      },
    },
    {
      path: seasonsRoutesPath.HOME,
      name: seasonsRoutesName.HOME,
      component: Seasons,
      meta: {
        title: "Réflexô Bien-être - Saisons et conseils",
        description:
          "Découvrez les conseils de la médecine traditionnelle chinoise pour vivre en harmonie avec chaque saison : alimentation, hygiène de vie et bien-être.",
      },
    },
    {
      path: seasonsRoutesPath.FALL,
      name: seasonsRoutesName.FALL,
      component: Fall,
      meta: {
        title: "Réflexô Bien-être - Automne",
        description:
          "Conseils et astuces de la médecine chinoise pour aborder l'automne en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
      },
    },
    {
      path: seasonsRoutesPath.WINTER,
      name: seasonsRoutesName.WINTER,
      component: Winter,
      meta: {
        title: "Réflexô Bien-être - Hiver",
        description:
          "Conseils et astuces de la médecine chinoise pour aborder l'hiver en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
      },
    },
    {
      path: seasonsRoutesPath.SPRING,
      name: seasonsRoutesName.SPRING,
      component: Spring,
      meta: {
        title: "Réflexô Bien-être - Printemps",
        description:
          "Conseils et astuces de la médecine chinoise pour aborder le printemps en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
      },
    },
    {
      path: seasonsRoutesPath.SUMMER,
      name: seasonsRoutesName.SUMMER,
      component: Summer,
      meta: {
        title: "Réflexô Bien-être - Été",
        description:
          "Conseils et astuces de la médecine chinoise pour aborder l'été en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
      },
    },
    {
      path: seasonsRoutesPath.INTERSEASON,
      name: seasonsRoutesName.INTERSEASON,
      component: InterSeasons,
      meta: {
        title: "Réflexô Bien-être - Intersaison",
        description:
          "Conseils et astuces de la médecine chinoise pour aborder l'intersaison en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
      },
    },
    {
      path: siteMapRoutesPath.HOME,
      name: siteMapRoutesName.HOME,
      component: siteMap,
      meta: {
        title: "Réflexô Bien-être - Plan du site",
        description:
          "Retrouvez l'ensemble des pages du site reflexo-bien-etre.com pour naviguer plus facilement et accéder rapidement à l'information que vous cherchez.",
      },
    },
    {
      path: "/",
      redirect: homeRoutesPath.HOME,
    },
    {
      path: notFoundRoutesPath.HOME,
      name: notFoundRoutesName.HOME,
      component: NotFound,
      meta: {
        title: "Réflexô Bien-être - Page non trouvée",
        description:
          "La page que vous cherchez n'existe pas. Retournez à l'accueil pour découvrir les accompagnements en réflexologie et bien-être.",
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach((to) => {
  // Mettre à jour le titre de la page
  document.title = (to.meta.title as string) || "Réflexô Bien-être";

  // Retirer l'ancienne méta-description s'il y en a une
  const oldDescription = document.querySelector('meta[name="description"]');
  if (oldDescription) {
    oldDescription.remove();
  }

  // Ajouter la nouvelle méta-description
  if (to.meta.description) {
    const newDescription = document.createElement("meta");
    newDescription.setAttribute("name", "description");
    newDescription.setAttribute("content", to.meta.description as string);
    document.head.appendChild(newDescription);
  }
});

export default router;
