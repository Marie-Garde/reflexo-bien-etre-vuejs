<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { seasonsRoutesName } from "../routes/routesName";

const { t, tm } = useI18n();
const router = useRouter();

function goToSeason(route: string) {
  router.push({ name: route });
}

const seasons = [
  { name: "Été", route: seasonsRoutesName.SUMMER, className: "top-left" },
  { name: "Automne", route: seasonsRoutesName.FALL, className: "top-right" },
  { name: "Hiver", route: seasonsRoutesName.WINTER, className: "bottom-right" },
  { name: "Printemps", route: seasonsRoutesName.SPRING, className: "bottom-left" },
];
</script>

<template>
  <main>
    <div class="header">
      <img
        src="@/assets/background/seasonBackground.png"
        alt="Illustration des saisons"
        class="header-image"
      />
      <div class="header-overlay">
        <h1 class="title">{{ t("seasons.title") }}</h1>
        <h2 class="subTitle">{{ t("seasons.importance.title") }}</h2>
        <p v-for="(paragraph, index) in tm('seasons.importance.text')" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>

    <div class="container">
      <div class="content">
        <div class="seasons-list">
          <div class="seasons-list-text">
            <h2>{{ t("seasons.list.title") }}</h2>
            <p v-for="(paragraph, index) in tm('seasons.list.text')" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <div class="circle">
            <div
              v-for="season in seasons"
              :key="season.name"
              :class="['quarter', season.className]"
              @click="goToSeason(season.route)"
            >
              <h3 :class="['quarter-title', 'quarter-title-' + season.className]">
                {{ season.name }}
              </h3>
            </div>
            <div class="center-circle" @click="goToSeason(seasonsRoutesName.INTERSEASON)">
              <h3 class="quarter-title quarter-title-center">Inter saison</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/variables.scss" as *;

.header {
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;

  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &-overlay {
    margin: 60px auto;
    max-width: 1280px;
    width: 100%;
    color: $white;
    text-align: left;
    position: relative;
    z-index: 1;
  }

  .title {
    margin-bottom: 50px;
  }

  .subTitle {
    margin-bottom: 40px;
  }

  p {
    max-width: 50%;
    margin-bottom: 20px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    max-width: 1280px;
  }

  .seasons-list {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    width: 100%;
    margin-top: 60px;

    h2 {
      margin-bottom: 20px;
    }

    &-text {
      flex: 1;
      text-align: center;
    }
  }

  .circle {
    flex-shrink: 0;
    position: relative;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    overflow: hidden;
    transform: rotate(45deg);
  }

  .quarter {
    position: absolute;
    width: 50%;
    height: 50%;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: white;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      &::after {
        opacity: 0.7;
      }
      .quarter-title {
        color: $brown-dark;
      }
    }
  }

  .quarter-title {
    color: $white;
    z-index: 3;
    font-size: 2em;
    text-size-adjust: auto;
    transform: rotate(-45deg);
    cursor: pointer;
  }

  $seasons-map: (
    top-left: (
      pos: (
        top: 0,
        left: 0,
      ),
      clip: polygon(0 0, calc(100% - 5px) 0, calc(100% - 5px) calc(100% - 5px), 0 calc(100% - 5px)),
      image: "ete.jpg",
      before: (
        width: 100%,
        height: 70%,
        bg-size: 75% 75%,
        scale: 3,
      ),
      title-pos: (
        top: 50%,
        left: 50%,
      ),
    ),
    top-right: (
      pos: (
        top: 0,
        right: 0,
      ),
      clip: polygon(0 0, 100% 0, 100% calc(100% - 5px), 0 calc(100% - 5px)),
      image: "fall.jpg",
      before: (
        width: 65%,
        height: 65%,
        bg-size: 80% 80%,
        scale: 3.5,
      ),
      title-pos: (
        top: 50%,
        left: 30%
      ),
    ),
    bottom-right: (
      pos: (
        bottom: 0,
        right: 0,
      ),
      clip: polygon(0 0, 100% 0, 100% 100%, 0 100%),
      image: "winter.jpg",
      before: (
        width: 100%,
        height: 65%,
        bg-size: 60% 60%,
        scale: 3,
      ),
      title-pos: (
        top: 37%,
        left: 34%
      ),
    ),
    bottom-left: (
      pos: (
        bottom: 0,
        left: 0,
      ),
      clip: polygon(0 0, calc(100% - 5px) 0, calc(100% - 5px) 100%, 0 100%),
      image: "spring.jpg",
      before: (
        width: 70%,
        height: 70%,
        bg-size: 90% 90%,
        scale: 3,
      ),
      title-pos: (
        top: 40%,
        left: 35%
      ),
    ),
  );

  @each $name, $props in $seasons-map {
    .#{$name} {
      $pos: map.get($props, pos);
      top: map.get($pos, top);
      right: map.get($pos, right);
      bottom: map.get($pos, bottom);
      left: map.get($pos, left);
      clip-path: map.get($props, clip);

      &::before {
        content: "";
        position: absolute;
        background-image: url("@/assets/illustrations/#{map.get($props, image)}");
        transform: rotate(-45deg) scale(#{map.get(map.get($props, before), scale)});
        background-repeat: no-repeat;
        z-index: -1;

        $before-props: map.get($props, before);
        width: map.get($before-props, width);
        height: map.get($before-props, height);
        background-size: map.get($before-props, bg-size);
      }
    }

    .quarter-title-#{$name} {
      position: absolute;
      $title-pos: map.get($props, title-pos);
      top: map.get($title-pos, top);
      left: map.get($title-pos, left);
    }
  }

  .quarter-title-center {
    position: absolute;
    top: 16%;
    left: 0%;
  }

  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: 20%;
    background-color: $orange;
    border-radius: 50%;
    z-index: 10;
    transition: color 0.3s ease;

    &:hover .quarter-title {
      color: $brown-dark;
    }
  }
}

@media (max-width: 768px) {
  .header {
    height: auto;
    padding: 40px 0;
    p {
      max-width: 90%;
    }
  }
  .header-overlay {
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }

  p {
    width: 100%;
  }
  .container {
    overflow-x: hidden;
    .content {
      width: 100%;
    }
    .seasons-list {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      margin-top: 0;

      &-text {
        text-align: center;
        width: 90%;

        h2 {
          width: 100%;
          margin: 0 auto 40px auto;
        }
      }
      .circle {
        width: 90vw;
        height: 90vw;
        margin-bottom: 30px;
      }
    }
  }
}

@media (min-width: 1024px) and (max-width: 1440px) {
  .header {
    padding: 40px;
  }
  .container {
    .seasons-list {
      .circle {
        width: 60vw;
        height: 60vw;
        margin-bottom: 30px;
      }
    }
  }
}

@media (min-width: 541px) and (max-width: 768px) {
  .container {
    .quarter-title {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 406px) and (max-width: 540px) {
  .container {
    .quarter-title {
      font-size: 1.2rem;
    }
  }
}

@media (max-width: 405px) {
  .container {
    .quarter-title {
      font-size: 1rem;
    }
  }
}
</style>