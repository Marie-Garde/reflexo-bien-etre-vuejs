import { homeRoutesName } from "@/home/routes/routesName";
import { homeRoutesPath } from "@/home/routes/routesPath";
import { aboutRoutesName } from "@/about/routes/routesName";
import { aboutRoutesPath } from "@/about/routes/routesPath";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { appointmentRoutesPath } from "@/appointment/routes/routesPath";
import { contactRoutesName } from "@/contact/routes/routesName";
import { contactRoutesPath } from "@/contact/routes/routesPath";
import { practicesRoutesName } from "@/practices/routes/routesName";
import { practicesRoutesPath } from "@/practices/routes/routesPath";
import { priceRoutesName } from "@/price/routes/routesName";
import { priceRoutesPath } from "@/price/routes/routesPath";
import { seasonsRoutesName } from "@/season/routes/routesName";
import { seasonsRoutesPath } from "@/season/routes/routesPath";
import { siteMapRoutesName } from "@/siteMap/routes/routesName";
import { siteMapRoutesPath } from "@/siteMap/routes/routesPath";
import { notFoundRoutesName } from "@/notFound/routes/routesName";
import { notFoundRoutesPath } from "@/notFound/routes/routesPath";
import { legalNoticeRoutesName } from "@/legalNotice/routes/routesName";
import { legalNoticeRoutesPath } from "@/legalNotice/routes/routesPath";

export const routes = [
  {
    path: homeRoutesPath.HOME,
    name: homeRoutesName.HOME,
    component: () => import("@/home/views/Home.vue"),
    meta: {
      title: "Réflexô Bien-être - Accueil",
      description:
        "Soulagez stress, anxiété et douleurs avec des séances de réflexologie et de médecine chinoise à Nespouls (19). Prenez rendez-vous pour retrouver équilibre et bien-être.",
    },
  },
  {
    path: aboutRoutesPath.HOME,
    name: aboutRoutesName.HOME,
    component: () => import("@/about/views/About.vue"),
    meta: {
      title: "Réflexô Bien-être - À propos",
      description:
        "Découvrez mon parcours de praticienne en réflexologie et médecine chinoise, ainsi que ma vision du bien-être global et de l'accompagnement personnalisé.",
    },
  },
  {
    path: appointmentRoutesPath.HOME,
    name: appointmentRoutesName.HOME,
    component: () => import("@/appointment/views/AppointmentView.vue"),
    meta: {
      title: "Réflexô Bien-être - Rendez-vous",
      description:
        "Prenez rendez-vous en ligne pour une séance de réflexologie, massage Tuina ou de Qi Gong. Choisissez le créneau qui vous convient.",
    },
  },
  {
    path: contactRoutesPath.HOME,
    name: contactRoutesName.HOME,
    component: () => import("@/contact/views/ContactView.vue"),
    meta: {
      title: "Réflexô Bien-être - Contact",
      description:
        "Contactez-moi pour toute question. Retrouvez ici téléphone, email et adresse du cabinet.",
    },
  },
  {
    path: practicesRoutesPath.HOME,
    name: practicesRoutesName.HOME,
    component: () => import("@/practices/views/Practices.vue"),
    meta: {
      title: "Réflexô Bien-être - Mes accompagnements",
      description:
        "Explorez les différents accompagnements proposés : réflexologie plantaire, palmaire, faciale, dorsale, massages Tuina et Qi Gong.",
    },
  },
  {
    path: practicesRoutesPath.OFFICE,
    name: practicesRoutesName.OFFICE,
    component: () => import("@/practices/views/OfficeSession.vue"),
    meta: {
      title: "Réflexô Bien-être - Séance au cabinet",
      description:
        "Déroulement d'une séance de réflexologie ou de massage Tuina au cabinet. Un temps d'échange suivi d'un soin personnalisé pour votre bien-être.",
    },
  },
  {
    path: practicesRoutesPath.OUTSIDE,
    name: practicesRoutesName.OUTSIDE,
    component: () => import("@/practices/views/OutsideSession.vue"),
    meta: {
      title: "Réflexô Bien-être - Séance extérieure",
      description: "Déroulement d'une séance de Qi Gong au cabinet ou en visio.",
    },
  },
  {
    path: priceRoutesPath.HOME,
    name: priceRoutesName.HOME,
    component: () => import("@/price/views/Price.vue"),
    meta: {
      title: "Réflexô Bien-être - Tarifs",
      description:
        "Consultez les tarifs des différentes prestations : séances de réflexologie, massages Tuina, et Qi Gong.",
    },
  },
  {
    path: seasonsRoutesPath.HOME,
    name: seasonsRoutesName.HOME,
    component: () => import("@/season/views/Seasons.vue"),
    meta: {
      title: "Réflexô Bien-être - Saisons et conseils",
      description:
        "Découvrez les conseils de la médecine traditionnelle chinoise pour vivre en harmonie avec chaque saison : alimentation, hygiène de vie et bien-être.",
    },
  },
  {
    path: seasonsRoutesPath.FALL,
    name: seasonsRoutesName.FALL,
    component: () => import("@/season/views/Fall.vue"),
    meta: {
      title: "Réflexô Bien-être - Automne",
      description:
        "Conseils et astuces de la médecine chinoise pour aborder l'automne en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
    },
  },
  {
    path: seasonsRoutesPath.WINTER,
    name: seasonsRoutesName.WINTER,
    component: () => import("@/season/views/Winter.vue"),
    meta: {
      title: "Réflexô Bien-être - Hiver",
      description:
        "Conseils et astuces de la médecine chinoise pour aborder l'hiver en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
    },
  },
  {
    path: seasonsRoutesPath.SPRING,
    name: seasonsRoutesName.SPRING,
    component: () => import("@/season/views/Spring.vue"),
    meta: {
      title: "Réflexô Bien-être - Printemps",
      description:
        "Conseils et astuces de la médecine chinoise pour aborder le printemps en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
    },
  },
  {
    path: seasonsRoutesPath.SUMMER,
    name: seasonsRoutesName.SUMMER,
    component: () => import("@/season/views/Summer.vue"),
    meta: {
      title: "Réflexô Bien-être - Été",
      description:
        "Conseils et astuces de la médecine chinoise pour aborder l'été en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
    },
  },
  {
    path: seasonsRoutesPath.INTERSEASON,
    name: seasonsRoutesName.INTERSEASON,
    component: () => import("@/season/views/InterSeasons.vue"),
    meta: {
      title: "Réflexô Bien-être - Intersaison",
      description:
        "Conseils et astuces de la médecine chinoise pour aborder l'intersaison en pleine forme : alimentation, énergie et prévention des maux saisonniers.",
    },
  },
  {
    path: siteMapRoutesPath.HOME,
    name: siteMapRoutesName.HOME,
    component: () => import("@/siteMap/views/siteMap.vue"),
    meta: {
      title: "Réflexô Bien-être - Plan du site",
      description:
        "Retrouvez l'ensemble des pages du site reflexo-bien-etre.com pour naviguer plus facilement et accéder rapidement à l'information que vous cherchez.",
    },
  },
  {
    path: notFoundRoutesPath.HOME,
    name: notFoundRoutesName.HOME,
    component: () => import("@/notFound/views/notFound.vue"),
    meta: {
      title: "Réflexô Bien-être - Page non trouvée",
      description:
        "La page que vous cherchez n'existe pas. Retournez à l'accueil pour découvrir les accompagnements en réflexologie et bien-être.",
    },
  },
  {
    path: legalNoticeRoutesPath.HOME,
    name: legalNoticeRoutesName.HOME,
    component: () => import("@/legalNotice/legalNotice.vue"),
    meta: {
      title: "Réflexô Bien-être - Mentions Légales",
      description: "Consultez les mentions légales du site reflexo-bien-etre.com.",
    },
  },
];

import type { RouteLocationNormalized } from "vue-router";

export const scrollBehavior = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  savedPosition: { left: number; top: number } | null
) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 };
  }
};
