<script setup lang="ts">
import Button from "@/components/Button.vue";

defineProps<{
  session: {
    key: string;
    title: string;
    first: {
      title: string;
      text: string[];
      hovering: string;
      imageClass: string;
    };
    second: {
      title: string;
      text: string[];
      list: string[];
      hovering: string;
      imageClass: string;
    };
    theme: string;
  };
}>();
</script>

<template>
  <section class="office-session__session">
    <h2 class="office-session__section-title">{{ session.title }}</h2>
    <div class="session-detail">
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
        <div :class="['session-card__image', `session-card__image--${session.second.imageClass}`, 'session-card__image--top']">
          <div class="session-card__hovering citation">{{ session.second.hovering }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

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
      height: 65vh;
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
      }

      h3 {
        margin: 40px 0;
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


</style>
