<script setup lang="ts">
import { computed, type PropType } from "vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { SessionBlock, SessionDetail } from "../../interface/PracticesContent";

const props = defineProps({
  session: { type: Object as PropType<SessionDetail>, required: true },
});

// Le cadrage était porté par des classes CSS dédiées à chaque photo ; il vient
// maintenant du Studio, ce qui permet de changer l'image sans toucher au style.
function imageStyle(block: SessionBlock) {
  const url = urlFor(block.image).width(1280).format("webp").quality(80).url();
  return {
    backgroundImage: `url("${url}")`,
    backgroundPosition: block.imagePosition ?? "top",
  };
}

const firstImageStyle = computed(() => imageStyle(props.session.first));
const secondImageStyle = computed(() => imageStyle(props.session.second));
</script>

<template>
  <section>
    <h2 class="title">{{ props.session.title }}</h2>
    <div class="top-section">
      <div class="top-section__text">
        <h3>{{ props.session.first.title }}</h3>
        <ul>
          <PortableText as="li" :blocks="props.session.first.body" />
        </ul>
      </div>
      <div class="top-section__image" :style="firstImageStyle">
        <div class="image-overlay">
          <p class="citation">{{ props.session.first.quote }}</p>
        </div>
      </div>
    </div>
    <div class="bottom-section">
      <div class="bottom-section__image" :style="secondImageStyle">
        <div class="image-overlay">
          <p class="citation">{{ props.session.second.quote }}</p>
        </div>
      </div>
      <div class="bottom-section__text">
        <h3>{{ props.session.second.title }}</h3>
        <PortableText :blocks="props.session.second.body" paragraph-class="text" />
      </div>
    </div>
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
    p {
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
  .title {
    margin: 40px auto 20px auto;
    max-width: 90%;
    text-align: center;
  }
  .top-section,
  .bottom-section {
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
      }
      li {
        list-style: none;
        margin-bottom: 30px;
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

@media (max-width: 1024px) and (min-width: 768px) {
  h2 {
    margin: 60px auto 40px auto;
    text-align: center;
  }
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
