<script setup lang="ts">
import { useI18n } from "vue-i18n";
import phone from "@/assets/icons/phone.vue";
import message from "@/assets/icons/message.vue";
import location from "@/assets/icons/location.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { aboutRoutesName } from "@/about/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import LinkRouter from "@/components/LinkRouter.vue";
import { siteMapRoutesName } from "@/siteMap/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesName";

const { t } = useI18n();
const route = useRoute();

const siteMapLabel = t("footer.legal.siteMap");
const siteMapRouteName = siteMapRoutesName.HOME;

const isOrangeBackground = computed(() => {
  const orangeRoutes = [aboutRoutesName.HOME, seasonsRoutesName.SUMMER, seasonsRoutesName.FALL];
  return typeof route.name === "string" && orangeRoutes.includes(route.name);
});

const isBrownBackground = computed(() => {
  return route.name === seasonsRoutesName.WINTER;
});

const isGreenBackground = computed(() => {
  return route.name === seasonsRoutesName.SPRING;
});

const isYellowBackground = computed(() => {
  const yellowRoutes = [seasonsRoutesName.INTERSEASON, contactRoutesName.HOME];
  return typeof route.name === "string" && yellowRoutes.includes(route.name);
});

const isOrangeLightBackground = computed(() => {
  const orangeLightRoutes = [practicesRoutesName.OUTSIDE, practicesRoutesName.OFFICE];
  return typeof route.name === "string" && orangeLightRoutes.includes(route.name);
});
</script>

<template>
  <p
    :class="[
      'warning',
      {
        orange: isOrangeBackground,
        brown: isBrownBackground,
        green: isGreenBackground,
        yellow: isYellowBackground,
        lightOrange: isOrangeLightBackground,
      },
    ]"
  >
    {{ t("footer.warning") }}
  </p>
  <div class="container">
    <div class="first-line">
      <div class="informations">
        <h3 class="informations-title">
          {{ t("footer.informations.name") }} - {{ t("footer.informations.societyName") }}
        </h3>
        <div class="informations-item">
          <phone />
          <p>{{ t("footer.informations.number") }}</p>
        </div>
        <div class="informations-item">
          <message />
          <p>contact@reflexo-bien-etre.com</p>
        </div>
        <div class="informations-item">
          <location />
          <p>{{ t("footer.informations.adress") }}</p>
        </div>
      </div>
      <div class="social-media">
        <div class="social-media-title">
          <h3>{{ t("footer.socialMedia.title") }}</h3>
          <InstagramIcon class="icon" />
          <FacebookIcon class="icon" />
        </div>
      </div>
    </div>
    <div class="second-line">
      <p>{{ t("footer.legal.copyright") }}</p>
      <LinkRouter class="link" :label="siteMapLabel" color="yellow" :to="siteMapRouteName" />
      <p>{{ t("footer.legal.legalPage") }}</p>
      <p>{{ t("footer.legal.creator") }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.warning {
  text-align: center;
  margin-top: 2vw;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
}

.orange {
  background-color: $orange;
  margin-top: 0;
  color: $white-soft;
}

.yellow {
  background-color: $orange-light;
  margin-top: 0;
  color: $brown-dark;
}

.brown {
  background-color: $brown-dark;
  margin-top: 0;
  color: $white-soft;
}

.green {
  background-color: $green;
  margin-top: 0;
  color: $brown-dark;
}

.lightOrange {
  background-color: $orange-white;
  margin-top: 0;
  color: $brown-dark;
}

.container {
  width: 100%;
  background-color: $brown-footer;
  margin: auto;
  color: $white-soft;
  padding: 24px 24px 0 24px;
  color: $orange-light;

  .first-line {
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 30px;
    }
    .informations {
      &-title {
        margin-bottom: 12px;
        display: flex;
        :first-child {
          padding-right: 5px;
        }
      }
      &-item {
        display: flex;
        gap: 12px;
        margin-bottom: 12px;
        align-items: center;
        @media (max-width: 768px) {
          justify-content: center;
          align-items: flex-start;
        }
      }
    }

    .social-media {
      h3 {
        margin-bottom: 10px;
      }
      .icon {
        width: 60px;
        height: 60px;
        fill: $orange-light;
        cursor: pointer;
      }
      :nth-child(2) {
        margin-right: 20px;
      }
    }
  }

  .second-line {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
    }
    :nth-child(3) {
      margin: 0 5px 0 5px;
    }
  }
}
</style>
