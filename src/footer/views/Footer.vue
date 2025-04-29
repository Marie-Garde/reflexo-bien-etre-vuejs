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

const { t } = useI18n();
const route = useRoute();

const isAboutPage = computed(() => {
  return route.name === aboutRoutesName.HOME;
});
</script>

<template>
  <p :class="['warning', { orange: isAboutPage }]">{{ t("footer.warning") }}</p>
  <div class="container">
    <div class="first-line">
      <div class="informations">
        <div class="informations-title">
          <h3>{{ t("footer.informations.name") }}</h3>
          <h3>- {{ t("footer.informations.societyName") }}</h3>
        </div>
        <div class="informations-item">
          <phone />
          <p>{{ t("footer.informations.number") }}</p>
        </div>
        <div class="informations-item">
          <message />
          <p>{{ t("footer.informations.mail") }}</p>
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
      <p>{{ t("footer.legal.siteMap") }}</p>
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
}

.orange {
  background-color: $orange;
  margin-top: 0;
  color: $white-soft;
}

.container {
  width: 100%;
  background-color: $brown-dark;
  margin: auto;
  color: $white-soft;
  padding: 24px 24px 0 24px;
  color: $orange-light;

  .first-line {
    width: 100%;
    display: flex;
    justify-content: space-around;
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
    :nth-child(3) {
      margin: 0 5px 0 5px;
    }
  }
}
</style>
