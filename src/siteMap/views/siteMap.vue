<script setup lang="ts">
import { useI18n } from "vue-i18n";
import LinkRouter from "@/components/LinkRouter.vue";
import { homeRoutesName } from "@/home/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { seasonsRoutesName } from "@/season/routes/routesName";
import { priceRoutesName } from "@/price/routes/routesName";

const { t } = useI18n();

const homeRouteName = homeRoutesName.HOME;
const aboutRouteName = aboutRoutesName.HOME;
const appointmentRouteName = appointmentRoutesName.HOME;
const contactRouteName = contactRoutesName.HOME;
const practicesRouteName = practicesRoutesName.HOME;
const practicesOfficeRouteName = practicesRoutesName.OFFICE;
const practicesOutsideRouteName = practicesRoutesName.OUTSIDE;
const seasonsRouteName = seasonsRoutesName.HOME;
const seasonsFallRouteName = seasonsRoutesName.FALL;
const seasonsSpringRouteName = seasonsRoutesName.SPRING;
const seasonsSummerRouteName = seasonsRoutesName.SUMMER;
const seasonsWinterRouteName = seasonsRoutesName.WINTER;
const seasonsInterSeasonRouteName = seasonsRoutesName.INTERSEASON;
const priceRouteName = priceRoutesName.HOME;
</script>

<template>
  <div class="container">
    <h1>{{ t("siteMap.title") }}</h1>
    <h2>
      <LinkRouter class="link" :label="t('home.title')" :to="homeRouteName" />
    </h2>
    <h2>
      <LinkRouter class="link" :label="t('about.title')" :to="aboutRouteName" />
    </h2>
    <h2>
      <LinkRouter class="link" :label="t('practices.title')" :to="practicesRouteName" />
    </h2>
    <div class="subCategory">
      <h3>
        <LinkRouter
          class="link"
          :label="t('practices.OfficeSession.title')"
          :to="practicesOfficeRouteName"
        />
      </h3>
      <h3>
        <LinkRouter
          class="link"
          :label="t('practices.OutsideSession.title')"
          :to="practicesOutsideRouteName"
        />
      </h3>
    </div>
    <h2>
      <LinkRouter class="link" :label="t('seasons.title')" :to="seasonsRouteName" />
    </h2>
    <div class="subCategory">
      <h3>
        <LinkRouter
          class="link"
          :label="t('seasons.season.fall.title')"
          :to="seasonsFallRouteName"
        />
      </h3>
      <h3>
        <LinkRouter
          class="link"
          :label="t('seasons.season.spring.title')"
          :to="seasonsSpringRouteName"
        />
      </h3>
      <h3>
        <LinkRouter
          class="link"
          :label="t('seasons.season.summer.title')"
          :to="seasonsSummerRouteName"
        />
      </h3>
      <h3>
        <LinkRouter
          class="link"
          :label="t('seasons.season.winter.title')"
          :to="seasonsWinterRouteName"
        />
      </h3>
      <h3>
        <LinkRouter
          class="link"
          :label="t('seasons.season.interSeason.title')"
          :to="seasonsInterSeasonRouteName"
        />
      </h3>
    </div>
    <h2>
      <LinkRouter class="link" :label="t('price.title')" :to="priceRouteName" />
    </h2>
    <h2>
      <LinkRouter class="link" :label="t('contact.title')" :to="contactRouteName" />
    </h2>
    <h2>
      <LinkRouter class="link" :label="t('takeAppointment.title')" :to="appointmentRouteName" />
    </h2>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.container {
  margin: 60px auto;
  max-width: 1280px;

  h1 {
    margin: 150px 0 30px 0;
  }
  h2 {
    margin-top: 20px;
  }
  .subCategory {
    margin-left: 30px;
  }
}
</style>
