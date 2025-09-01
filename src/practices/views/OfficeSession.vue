<script setup lang="ts">
import { useI18n } from "vue-i18n";
import WhySection from "../components/OfficeSession/WhySection.vue";
import SummarySection from "../components/OfficeSession/SummarySection.vue";
import SessionDetail from "../components/OfficeSession/SessionDetail.vue";
import RhythmSection from "../components/OfficeSession/RhythmSection.vue";
import AfterSection from "../components/OfficeSession/AfterSection.vue";
import tuinaBackImg from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoHandImg from "@/assets/illustrations/practices/inside/relfexo-main.jpg";

const { t, tm } = useI18n();

const whySections = [
  {
    key: "tuina",
    title: t("practices.insideSessionPage.why.tuina.title"),
    text: tm("practices.insideSessionPage.why.tuina.text") as string[],
    list: tm("practices.insideSessionPage.why.tuina.list") as string[],
    image: tuinaBackImg,
    alt: "Massage Tuina du dos",
  },
  {
    key: "reflexo",
    title: t("practices.insideSessionPage.why.reflexo.title"),
    text: tm("practices.insideSessionPage.why.reflexo.text") as string[],
    list: tm("practices.insideSessionPage.why.reflexo.list") as string[],
    image: reflexoHandImg,
    alt: "Réflexologie de la main",
  },
];

const summary = {
  firstLine: tm("practices.insideSessionPage.summary.array.firstLine") as string[],
  secondLine: tm("practices.insideSessionPage.summary.array.secondLine") as string[],
  thirdLine: tm("practices.insideSessionPage.summary.array.thirdLine") as string[],
};

const sessionSections = [
    {
        key: 'reflexo',
        title: t("practices.insideSessionPage.session.reflexo.title"),
        first: {
            title: t("practices.insideSessionPage.session.reflexo.first.title"),
            text: tm("practices.insideSessionPage.session.reflexo.first.text") as string[],
            hovering: t("practices.insideSessionPage.session.reflexo.first.hovering"),
            imageClass: 'reflexo-main'
        },
        second: {
            title: t("practices.insideSessionPage.session.reflexo.second.title"),
            text: tm("practices.insideSessionPage.session.reflexo.second.text") as string[],
            list: tm("practices.insideSessionPage.session.reflexo.second.list") as string[],
            hovering: t("practices.insideSessionPage.session.reflexo.second.hovering"),
            imageClass: 'reflexo-visage'
        },
        rhythm: {
            title: t("practices.insideSessionPage.session.reflexo.rhythm.title"),
            text: tm("practices.insideSessionPage.session.reflexo.rhythm.text") as string[],
            list: tm("practices.insideSessionPage.session.reflexo.rhythm.list") as string[],
            cta: t("practices.insideSessionPage.session.reflexo.rhythm.CTA")
        },
        theme: 'green'
    },
    {
        key: 'tuina',
        title: t("practices.insideSessionPage.session.tuina.title"),
        first: {
            title: t("practices.insideSessionPage.session.tuina.first.title"),
            text: tm("practices.insideSessionPage.session.tuina.first.text") as string[],
            hovering: t("practices.insideSessionPage.session.tuina.first.hovering"),
            imageClass: 'massage-dos'
        },
        second: {
            title: t("practices.insideSessionPage.session.tuina.second.title"),
            text: tm("practices.insideSessionPage.session.tuina.second.text") as string[],
            list: [] as string[],
            hovering: t("practices.insideSessionPage.session.tuina.second.hovering"),
            imageClass: 'reflexo-dos'
        },
        rhythm: {
            title: t("practices.insideSessionPage.session.tuina.rhythm.title"),
            text: tm("practices.insideSessionPage.session.tuina.rhythm.text") as string[],
            list: tm("practices.insideSessionPage.session.tuina.rhythm.list") as string[],
            cta: t("practices.insideSessionPage.session.reflexo.rhythm.CTA")
        },
        theme: 'brown'
    }
];

const afterList = tm("practices.insideSessionPage.after.list") as { title: string; text: string; }[];
const afterText = tm("practices.insideSessionPage.after.text") as string[];
const afterTitle = t("practices.insideSessionPage.after.title");
const summaryTitle = t("practices.insideSessionPage.summary.title");

</script>

<template>
  <div class="office-session">
    <header class="office-session__header">
      <div class="office-session__header-overlay">
        <h1 class="office-session__title">{{ t("practices.insideSessionPage.title") }}</h1>
        <p>{{ t("practices.insideSessionPage.subtitle") }}</p>
      </div>
    </header>

    <WhySection :sections="whySections" />
    <SummarySection :title="summaryTitle" :summary="summary" />

    <div v-for="session in sessionSections" :key="session.key">
      <SessionDetail :session="session" />
      <RhythmSection :rhythm="session.rhythm" />
    </div>

    <AfterSection :title="afterTitle" :text="afterText" :afterList="afterList" />
  </div>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session {
  &__header {
    width: 100%;
    height: 40vh;
    margin-top: 60px;
    background-image: url("@/assets/illustrations/practices/inside/reflexo-pied.png");
    background-size: cover;
    background-position: top;
    position: relative;

    &-overlay {
      position: absolute;
      bottom: 10%;
      left: 0;
      margin-left: 120px;
      width: 50%;
      max-width: 600px;
      padding: 20px;
      background: rgba(72, 72, 72, 0.9);
      border-radius: 5px;
      text-align: left;
      color: $white;
    }
  }
}

.office-session__section-title {
  margin: 80px 0 40px 0;
  text-align: center;
}
</style>
