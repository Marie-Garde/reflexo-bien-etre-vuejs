<script setup lang="ts">
import { useI18n } from "vue-i18n";
import topImage from "@/assets/illustrations/massage.jpg";
import bottomImage from "@/assets/illustrations/qi-gong.jpg";

const { t, tm } = useI18n();

const props = defineProps<{
  sessionType: string;
}>();

const session = {
  key: props.sessionType,
  title: t(`practices.insideSessionPage.session.${props.sessionType}.title`),
  first: {
    title: t(`practices.insideSessionPage.session.${props.sessionType}.first.title`),
    text: tm(`practices.insideSessionPage.session.${props.sessionType}.first.text`),
    hovering: t(`practices.insideSessionPage.session.${props.sessionType}.first.hovering`),
    imageClass: props.sessionType === "reflexo" ? "reflexo-main" : "massage-dos",
  },
  second: {
    title: t(`practices.insideSessionPage.session.${props.sessionType}.second.title`),
    text: tm(`practices.insideSessionPage.session.${props.sessionType}.second.text`),
    list: tm(`practices.insideSessionPage.session.${props.sessionType}.second.list`),
    hovering: t(`practices.insideSessionPage.session.${props.sessionType}.second.hovering`),
    imageClass: props.sessionType === "reflexo" ? "reflexo-visage" : "reflexo-dos",
  },
  theme: props.sessionType === "reflexo" ? "green" : "brown",
};
</script>

<template>
  <section class="office-session__session">
    <h2 class="office-session__section-title">{{ session.title }}</h2>
    <div class="top-section">
      <div class="top-section__text">
        <h3>{{ session.first.title }}</h3>
        <ul>
          <li v-for="(item, i) in session.first.text" :key="i" v-html="item"></li>
        </ul>
      </div>
      <div :class="['top-section__image', `top-section__image--${session.first.imageClass}`]">
        <div class="image-overlay">
          <p class="citation">{{ session.first.hovering }}</p>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div
        :class="['bottom-section__image', `bottom-section__image--${session.second.imageClass}`]"
      >
        <div class="image-overlay">
          <p class="citation">{{ session.second.hovering }}</p>
        </div>
      </div>
      <div class="bottom-section__text">
        <h3>{{ session.second.title }}</h3>
        <p class="text" v-for="(p, i) in session.second.text" :key="i">{{ p }}</p>
        <ul v-if="session.second.list.length">
          <li v-for="(item, i) in session.second.list" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>

    <!-- <div class="session-detail">
      <div :class="['session-card', `session-card--${session.theme}`]">
        <div class="session-card__text">
          <h3>{{ session.first.title }}</h3>
          <ul>
            <li v-for="(item, i) in session.first.text" :key="i" v-html="item"></li>
          </ul>
        </div>
        <div :class="['session-card__image', `session-card__image--${session.first.imageClass}`]">
          <div class="session-card__hovering citation">{{ session.first.hovering }}</div>
        </div>
      </div>
      <div :class="['session-card', `session-card--${session.theme}`]">
        <div class="session-card__text session-card__text--right">
          <h3>{{ session.second.title }}</h3>
          <p class="text" v-for="(p, i) in session.second.text" :key="i">{{ p }}</p>
          <ul v-if="session.second.list.length">
            <li v-for="(item, i) in session.second.list" :key="i">{{ item }}</li>
          </ul>
        </div>
        <div
          :class="[
            'session-card__image',
            `session-card__image--${session.second.imageClass}`,
            'session-card__image--top',
          ]"
        >
          <div class="session-card__hovering citation">{{ session.second.hovering }}</div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.top-section,
.bottom-section {
  display: flex;
  width: 100%;
  min-height: 50vh;
  height: auto;
}

.top-section {
  &__text {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $orange-white;
    border-left: 40px solid $brown-medium;
    box-sizing: border-box;
  }

  &__image {
    width: 50%;
    background-size: cover;
    background-position: center;
    position: relative;

    &--reflexo-main {
      background-image: url("@/assets/illustrations/practices/inside/reflexo-main.png");
      background-position: top;
    }
    &--reflexo-visage {
      background-image: url("@/assets/illustrations/practices/inside/reflexo-visage.png");
      background-position: top;
    }
    &--massage-dos {
      background-image: url("@/assets/illustrations/practices/inside/massage-dos.png");
      background-position: top;
    }
    &--reflexo-dos {
      background-image: url("@/assets/illustrations/practices/inside/reflexo-dos.png");
      background-position: center;
    }
  }

  &__text {
    text-align: left;
    h3 {
      margin-bottom: 40px;
    }
    ul {
      padding: 0;
    }
    li {
      list-style: none;
      margin: 0;
      padding: 0 0 20px 0;
    }
  }
}

.bottom-section {
  &__image {
    width: 50%;
    background-size: cover;
    background-position: center;
    position: relative;

    &--reflexo-visage {
      background-image: url("@/assets/illustrations/practices/inside/reflexo-visage.png");
      background-position: top;
    }
    &--reflexo-dos {
      background-image: url("@/assets/illustrations/practices/inside/reflexo-dos.png");
      background-position: center;
    }
  }

  &__text {
    width: 50%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $orange-white;
    border-left: 40px solid $brown-medium;
    box-sizing: border-box;
    text-align: left;
    h3 {
      margin-bottom: 40px;
    }
    ul > li {
      list-style: none;
      padding-bottom: 20px;
    }
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 1.2rem;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
}

.top-section__image:hover .image-overlay,
.bottom-section__image:hover .image-overlay {
  opacity: 1;
}

@media (max-width: 768px) {
  .top-section, .bottom-section {
    height: auto;
  }
  .top-section {
    flex-direction: column;

    &__text,
    &__image {
      width: 100%;
    }
    &__image {
      height: 30vh;
    }
  }
  .bottom-section {
    flex-direction: column-reverse;
    &__text,
    &__image {
      width: 100%;
    }
    &__image {
      height: 30vh;
    }
  }
  .image-overlay {
    opacity: 1;
  }
}

.office-session__session {
  width: 100%;
  text-align: center;

  .session-detail {
    display: flex;
    width: 100%;
  }

  .session-card {
    width: 50%;
    height: 100vh;
    position: relative;

    &--green {
      background-color: $green;
    }
    &--brown {
      background-color: $brown-medium;
    }

    &__text {
      width: 90%;
      max-height: 100vh;
      background-color: $orange-white;
      position: absolute;
      z-index: 4;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 60px 60px 60px 100px;
      text-align: center;

      &--right {
        top: auto;
        bottom: 0;
        left: auto;
        right: 0;
        padding: 60px 100px 60px 60px;
        min-height: 60%;
      }

      h3 {
        margin: 0 0 40px 0;
      }

      ul {
        padding: 0;
        li {
          list-style: none;
          margin-bottom: 30px;
        }
      }

      .text {
        margin-bottom: 30px;
      }
    }

    &__image {
      width: 100%;
      height: 50vh;
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;
      background-size: cover;

      &--top {
        top: 0;
        bottom: auto;
      }

      &--reflexo-main {
        background-image: url("@/assets/illustrations/practices/inside/reflexo-main.png");
        background-position: top;
      }
      &--reflexo-visage {
        background-image: url("@/assets/illustrations/practices/inside/reflexo-visage.png");
        background-position: top;
      }
      &--massage-dos {
        background-image: url("@/assets/illustrations/practices/inside/massage-dos.png");
        background-position: top;
      }
      &--reflexo-dos {
        background-image: url("@/assets/illustrations/practices/inside/reflexo-dos.png");
        background-position: center;
      }
    }

    &__hovering {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      position: absolute;
      z-index: 3;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}

@media (max-width: 1024px) {
  .office-session__session {
    .session-detail {
      flex-direction: column;
    }

    .session-card {
      width: 100%;
      height: auto;

      &__text {
        position: relative;
        width: 100%;
        min-height: 130vh;
        height: auto;
        padding: 40px 20px;

        h3 {
          margin: 0 0 20px 0;
        }

        &--right {
          padding: 40px 20px;
        }
      }

      &__image {
        position: relative;
        width: 100%;
        height: 50vh;
      }

      &__hovering {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }
}
</style>
