<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { computed } from "vue";

import PhoneIcon from "@/assets/icons/phone.vue";
import MessageIcon from "@/assets/icons/message.vue";
import LocationIcon from "@/assets/icons/location.vue";
import FacebookIcon from "@/assets/icons/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/InstagramIcon.vue";
import LinkRouter from "@/components/LinkRouter.vue";

import { aboutRoutesName } from "@/about/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { siteMapRoutesName } from "@/siteMap/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesName";
import { legalNoticeRoutesName } from "@/legalNotice/routes/routesName";

const { t } = useI18n();
const route = useRoute();

const warningBackgroundColorClass = computed(() => {
  const routeName = route.name as string;
  if (!routeName) return "";

  const colorMap: { [key: string]: string[] } = {
    orange: [seasonsRoutesName.SUMMER, seasonsRoutesName.FALL],
    brown: [seasonsRoutesName.WINTER],
    green: [seasonsRoutesName.SPRING],
    yellow: [seasonsRoutesName.INTERSEASON, contactRoutesName.HOME],
    "light-orange": [practicesRoutesName.OUTSIDE, practicesRoutesName.OFFICE],
    "light-brown": [aboutRoutesName.HOME],
  };

  for (const color in colorMap) {
    if (colorMap[color].includes(routeName)) {
      return color;
    }
  }

  return "";
});
</script>

<template>
  <footer class="footer">
    <p :class="['warning', warningBackgroundColorClass]">
      {{ t("footer.warning") }}
    </p>
    <div class="container">
      <div class="first-line">
        <div class="informations">
          <h3 class="informations__title">
            {{ t("footer.informations.name") }} -
            {{ t("footer.informations.societyName") }}
          </h3>
          <div class="informations__item">
            <PhoneIcon />
            <p>{{ t("footer.informations.number") }}</p>
          </div>
          <div class="informations__item">
            <MessageIcon />
            <p>contact@reflexo-bien-etre.fr</p>
          </div>
          <div class="informations__item">
            <LocationIcon />
            <p>{{ t("footer.informations.adress") }}</p>
          </div>
        </div>
        <div class="social-media">
          <h3 class="social-media__title">
            {{ t("footer.socialMedia.title") }}
          </h3>
          <div class="social-media__icons">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez notre page Instagram"
            >
              <InstagramIcon class="icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitez notre page Facebook"
            >
              <FacebookIcon class="icon" />
            </a>
          </div>
        </div>
      </div>
      <div class="second-line">
        <p>{{ t("footer.legal.copyright") }}</p>
        <LinkRouter
          class="link"
          :label="t('footer.legal.siteMap')"
          color="yellow"
          :to="siteMapRoutesName.HOME"
        />
        <LinkRouter
          class="link"
          :label="t('footer.legal.legalPage')"
          color="yellow"
          :to="legalNoticeRoutesName.HOME"
        />
        <p>{{ t("footer.legal.creator") }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.footer {
  width: 100%;
  margin: auto;
  color: $white-soft;
  background-color: $brown-footer;

  .warning {
    text-align: center;
    margin-top: 2vw;
    padding: 10px 0;

    &.orange {
      background-color: $orange;
      color: $white-soft;
    }
    &.yellow {
      background-color: $orange-white;
      color: $brown-dark;
    }
    &.brown {
      background-color: $brown-dark;
      color: $white-soft;
    }
    &.green {
      background-color: $green;
      color: $brown-dark;
    }
    &.light-orange {
      background-color: $orange-white;
      color: $brown-dark;
    }
    &.light-brown {
      background-color: $brown-medium;
      color: $white-soft;
    }

    &.orange,
    &.yellow,
    &.brown,
    &.green,
    &.light-orange,
    &.light-brown {
      margin-top: 0;
    }
  }

  .container {
    padding: 24px;
    color: $orange-light;

    .first-line {
      display: flex;
      justify-content: space-around;
      width: 100%;

      .informations {
        &__title {
          margin-bottom: 12px;
        }

        &__item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
      }

      .social-media {
        &__title {
          margin-bottom: 10px;
        }

        &__icons {
          display: flex;
          gap: 20px;
        }

        .icon {
          width: 60px;
          height: 60px;
          fill: $orange-light;
          cursor: pointer;
        }
      }
    }

    .second-line {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 24px;
      padding-top: 24px;
      border-top: 1px solid $orange-light;

      p,
      .link {
        margin: 0 10px;
      }
    }
  }
}

@media (max-width: 768px) {
  .footer {
    .warning {
      font-size: 0.8rem;
    }

    .container {
      .first-line {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 30px;

        .informations {
          &__item {
            justify-content: center;
            align-items: flex-start;
          }
        }

        .social-media {
          &__icons {
            justify-content: center;
          }
        }
      }

      .second-line {
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        gap: 10px;
      }
    }
  }
}
</style>
