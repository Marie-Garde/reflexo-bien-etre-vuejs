<script setup lang="ts">
import { useI18n } from "vue-i18n";
import isabelleImage from "@/assets/illustrations/isabelle-small.jpg";
import LinkRouter from "@/components/LinkRouter.vue";
import Button from "@/components/Button.vue";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import Carousel from "../components/Carousel.vue";
import CarouselText from "../components/CarouselText.vue";
import BodyPainImage from "@/assets/icons/Body-pain.png";
import HeadacheImage from "@/assets/icons/Headache.png";
import IsomniaImage from "@/assets/icons/Isomnia.png";
import DigestiveSystemPainImage from "@/assets/icons/Digestive-system-pain.png";
import StressImage from "@/assets/icons/Stress.png";
import DiseaseImage from "@/assets/icons/Disease.png";
import TeaHerbsImage from "@/assets/illustrations/tea-herbs.png";
import { sanityClient } from "@/sanityClient";
import { onMounted, ref, type Ref } from "vue";
import type { CarouselSlide } from "../interface/Carousel";

const { t, tm } = useI18n();
const router = useRouter();

const slidesData: Ref<CarouselSlide[]> = ref([]);

const feedbacks = [
  {
    text: "Ouaaaah c'était trop bien, je recommande à fond. Je me sens super détendue",
    subText: "Gertrude, Brive-la-Gaillarde",
  },
  {
    text: "Très sympathique.",
    subText: "Antoine, Brive-la-Gaillarde",
  },
  {
    text: "A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond. A l'écoute, je recommande à fond.",
    subText: "Sarah, Brive-la-Gaillarde",
  },
];

const difficultiesList = tm("home.difficulties.list");
const learnMoreLabel = t("home.solution.button");
const aboutMeLabel = t("home.presentation.learnAboutMe");
const takeAppointmentLabel = t("home.takeAppointment.buttonLabel");

const practicesRouteName = practicesRoutesName.HOME;

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}

function goToKnowMore() {
  router.push({ name: aboutRoutesName.HOME });
}

onMounted(async () => {
  slidesData.value = await sanityClient.fetch(`*[_type == "carouselItem"]{
    _id,
    title,
    description,
    image,
    link
  }`);
});
</script>

<template>
  <Carousel :slides="slidesData" />
  <div class="container">
    <div class="presentation">
      <div class="presentation-image">
        <img :src="isabelleImage" class="presentation-image-content" />
      </div>

      <div class="presentation-content">
        <h2 class="title">{{ t("home.presentation.title") }}</h2>
        <p class="text">{{ tm("home.presentation.text")[0] }}</p>
        <p>{{ tm("home.presentation.text")[1] }}</p>
        <p>{{ tm("home.presentation.text")[2] }}</p>
        <Button class="button" :label="aboutMeLabel" background="green" @click="goToKnowMore()" />
      </div>
    </div>

    <div class="difficulties">
      <h2 class="difficulties-title">{{ t("home.difficulties.title") }}</h2>

      <div class="difficulties-list">
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="BodyPainImage" />
          <p>{{ difficultiesList[0] }}</p>
        </div>
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="HeadacheImage" />
          <p>{{ difficultiesList[1] }}</p>
        </div>
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="IsomniaImage" />
          <p>{{ difficultiesList[2] }}</p>
        </div>
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="DigestiveSystemPainImage" />
          <p>{{ difficultiesList[3] }}</p>
        </div>
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="StressImage" />
          <p>{{ difficultiesList[4] }}</p>
        </div>
        <div class="difficulties-list-item">
          <img class="difficulties-list-item-img" :src="DiseaseImage" />
          <p>{{ difficultiesList[5] }}</p>
        </div>
      </div>
    </div>

    <div class="overlay">
      <div class="solution">
        <div class="solution-text">
          <h2 class="title">{{ t("home.solution.title") }}</h2>
          <p class="text">{{ tm("home.solution.text")[0] }}</p>
          <p class="text">{{ tm("home.solution.text")[1] }}</p>
          <p class="text">{{ tm("home.solution.text")[2] }}</p>
          <LinkRouter class="link" :label="learnMoreLabel" is-underline :to="practicesRouteName" />
        </div>
        <img :src="TeaHerbsImage" />
      </div>
    </div>

    <div class="takeAppointment">
      <div class="takeAppointment-content">
        <h2 class="takeAppointment-title">
          {{ t("home.takeAppointment.title") }}
        </h2>
        <p class="takeAppointment-text">{{ t("home.takeAppointment.description") }}</p>
        <Button
          class="button"
          :label="takeAppointmentLabel"
          background="orange"
          @click="goToAppointment()"
        />
      </div>
    </div>

    <div class="feedbacks">
      <h2>{{ t("home.feedback.title") }}</h2>
      <CarouselText :slides="feedbacks" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.presentation {
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  &-image {
    width: 40%;
    padding: 5vw;
    background-color: $green;
    @media (max-width: 768px) {
      width: 100%;
    }
    &-content {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 5px;
    }
  }

  &-content {
    width: 60%;
    background-color: $orange-light;
    padding: 30px 5%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
    .title {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
    .button {
      margin-top: 20px;
    }
  }
}

.difficulties {
  max-width: 1200px;
  margin: 60px auto;
  text-align: center;
  &-list {
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      flex-wrap: wrap;
      > * {
        flex: 1 1 160px;
      }
    }
    &-item {
      &-img {
        height: 70px;
      }
    }
  }
}

.overlay {
  width: 100%;
  height: 60vh;
  margin-top: 60px;
  background-image: url("@/assets/background/HomeSolutionBackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 60px 20px 40px 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    height: 95vh;
    padding: 30px 20px 40px 20px;
  }
}

.solution {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 30px;
  }

  &-text {
    width: 70%;
    color: $white;
    @media (max-width: 768px) {
      width: 90%;
      text-align: center;
    }
    .title {
      margin-bottom: 30px;
    }
    .text {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 30px;
      }
    }
    .link {
      margin-top: 30px;
      color: $white;
    }
  }

  img {
    width: 60%;
    height: auto;
    border-radius: 5px;
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}

.takeAppointment {
  width: 100%;
  background-color: $orange-light;
  padding: 60px;
  @media (max-width: 768px) {
    padding: 40px;
  }

  &-content {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  &-title {
    margin-bottom: 20px;
  }

  &-text {
    margin-bottom: 40px;
  }

  .button {
    font-size: 1.5rem;
    padding: 20px 54px;
    box-shadow: 0px 5px 5px $dark-grey;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
}

.feedbacks {
  max-width: 1200px;
  margin: 60px auto;
  text-align: center;
}
</style>
