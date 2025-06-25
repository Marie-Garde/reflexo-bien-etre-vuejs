<script setup lang="ts">
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import tuinaBackImg from "@/assets/illustrations/practices/inside/tuina-dos.jpg";
import reflexoHandImg from "@/assets/illustrations/practices/inside/relfexo-main.jpg";
import Button from "@/components/Button.vue";

const { t, tm } = useI18n();
const router = useRouter();

const whyTuinaList = tm("practices.insideSessionPage.why.tuina.list");
const whyReflexoList = tm("practices.insideSessionPage.why.reflexo.list");
const summaryFirstLine = tm("practices.insideSessionPage.summary.array.firstLine");
const summarySecondLine = tm("practices.insideSessionPage.summary.array.secondLine");
const summaryThirdLine = tm("practices.insideSessionPage.summary.array.thirdLine");
const textFirstSessionReflexo = tm("practices.insideSessionPage.session.reflexo.first.text");
const textFirstSessionTuina = tm("practices.insideSessionPage.session.tuina.first.text");
const listSecondSessionReflexo = tm("practices.insideSessionPage.session.reflexo.second.list");
const reflexoRhythmList = tm("practices.insideSessionPage.session.reflexo.rhythm.list");
const tuinaRhythmList = tm("practices.insideSessionPage.session.tuina.rhythm.list");
const afterList = tm("practices.insideSessionPage.after.list");
const buttonLabelReflexo = t("practices.insideSessionPage.session.reflexo.rhythm.CTA");

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("practices.insideSessionPage.title") }}</h1>
      <p>{{ t("practices.insideSessionPage.subtitle") }}</p>
    </div>
  </div>

  <div class="why">
    <div class="card-tuina">
      <img class="card-image" :src="tuinaBackImg" alt="Image" />
      <h2 class="card-text">{{ t("practices.insideSessionPage.why.tuina.title") }}</h2>
      <div class="card-text-hover">
        <h2 class="card-title">{{ t("practices.insideSessionPage.why.tuina.title") }}</h2>
        <p>
          {{ tm("practices.insideSessionPage.why.tuina.text")[0] }}
        </p>
        <p>
          {{ tm("practices.insideSessionPage.why.tuina.text")[1] }}
        </p>
        <p>
          {{ tm("practices.insideSessionPage.why.tuina.text")[2] }}
        </p>
        <ul class="card-list">
          <li v-for="item in whyTuinaList">
            <p>{{ item }}</p>
          </li>
        </ul>
        <p>
          {{ tm("practices.insideSessionPage.why.tuina.text")[3] }}
        </p>
      </div>
    </div>

    <div class="card-reflexo">
      <img class="card-image" :src="reflexoHandImg" alt="Image" />
      <h2 class="card-text">{{ t("practices.insideSessionPage.why.reflexo.title") }}</h2>
      <div class="card-text-hover">
        <h2 class="card-title">{{ t("practices.insideSessionPage.why.reflexo.title") }}</h2>
        <p>
          {{ tm("practices.insideSessionPage.why.reflexo.text")[0] }}
        </p>
        <p>
          {{ tm("practices.insideSessionPage.why.reflexo.text")[1] }}
        </p>
        <p>
          {{ tm("practices.insideSessionPage.why.reflexo.text")[2] }}
        </p>
        <ul class="card-list">
          <li v-for="item in whyReflexoList">
            <p>{{ item }}</p>
          </li>
        </ul>
        <p>
          {{ tm("practices.insideSessionPage.why.reflexo.text")[3] }}
        </p>
      </div>
    </div>
  </div>

  <div class="summary">
    <h2 class="title">{{ t("practices.insideSessionPage.summary.title") }}</h2>
    <div class="summary-overlay">
      <div class="summary-table">
        <ul class="summary-row first-line">
          <li v-for="item in summaryFirstLine">
            {{ item }}
          </li>
        </ul>

        <hr class="summary-separator" />

        <ul class="summary-row">
          <li v-for="item in summarySecondLine">
            {{ item }}
          </li>
        </ul>

        <hr class="summary-separator" />

        <ul class="summary-row">
          <li v-for="item in summaryThirdLine">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="session">
    <h2>{{ t("practices.insideSessionPage.session.reflexo.title") }}</h2>
    <div class="session-detail">
      <div class="first-session">
        <div class="first-session-text">
          <h3>{{ t("practices.insideSessionPage.session.reflexo.first.title") }}</h3>
          <ul>
            <li v-for="item in textFirstSessionReflexo">
              <div v-html="item"></div>
            </li>
          </ul>
        </div>
        <div class="first-session-image first-session-image-reflexo">
          <div class="first-session-hovering citation">
            {{ t("practices.insideSessionPage.session.reflexo.first.hovering") }}
          </div>
        </div>
      </div>

      <div class="second-session">
        <div class="second-session-text">
          <h3>{{ t("practices.insideSessionPage.session.reflexo.second.title") }}</h3>
          <p class="text">{{ tm("practices.insideSessionPage.session.reflexo.second.text")[0] }}</p>
          <p class="text">{{ tm("practices.insideSessionPage.session.reflexo.second.text")[1] }}</p>
          <p>{{ tm("practices.insideSessionPage.session.reflexo.second.text")[2] }}</p>
          <ul>
            <li v-for="item in listSecondSessionReflexo">
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
        <div class="second-session-image second-session-image-reflexo">
          <div class="second-session-hovering citation">
            {{ t("practices.insideSessionPage.session.reflexo.second.hovering") }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rhythm">
    <h2>{{ t("practices.insideSessionPage.session.reflexo.rhythm.title") }}</h2>
    <p>{{ tm("practices.insideSessionPage.session.reflexo.rhythm.text")[0] }}</p>
    <p>{{ tm("practices.insideSessionPage.session.reflexo.rhythm.text")[1] }}</p>
    <p>{{ tm("practices.insideSessionPage.session.reflexo.rhythm.text")[2] }}</p>

    <ul>
      <li v-for="item in reflexoRhythmList">
        {{ item }}
      </li>
    </ul>

    <Button :label="buttonLabelReflexo" color="orange" @click="goToAppointment()" />
  </div>

  <div class="session">
    <h2>{{ t("practices.insideSessionPage.session.tuina.title") }}</h2>
    <div class="session-detail">
      <div class="first-session first-session-brown">
        <div class="first-session-text">
          <h3>{{ t("practices.insideSessionPage.session.tuina.first.title") }}</h3>
          <ul>
            <li v-for="item in textFirstSessionTuina">
              <div v-html="item"></div>
            </li>
          </ul>
        </div>
        <div class="first-session-image first-session-image-tuina">
          <div class="first-session-hovering citation">
            {{ t("practices.insideSessionPage.session.tuina.first.hovering") }}
          </div>
        </div>
      </div>

      <div class="second-session second-session-brown">
        <div class="second-session-text">
          <h3>{{ t("practices.insideSessionPage.session.tuina.second.title") }}</h3>
          <p class="text">{{ tm("practices.insideSessionPage.session.tuina.second.text")[0] }}</p>
          <p class="text">{{ tm("practices.insideSessionPage.session.tuina.second.text")[1] }}</p>
          <p>{{ tm("practices.insideSessionPage.session.tuina.second.text")[2] }}</p>
        </div>
        <div class="second-session-image second-session-image-tuina">
          <div class="second-session-hovering citation">
            {{ t("practices.insideSessionPage.session.tuina.second.hovering") }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rhythm">
    <h2>{{ t("practices.insideSessionPage.session.tuina.rhythm.title") }}</h2>
    <p>{{ tm("practices.insideSessionPage.session.tuina.rhythm.text")[0] }}</p>
    <p>{{ tm("practices.insideSessionPage.session.tuina.rhythm.text")[1] }}</p>
    <p>{{ tm("practices.insideSessionPage.session.tuina.rhythm.text")[2] }}</p>

    <ul>
      <li v-for="item in tuinaRhythmList">
        {{ item }}
      </li>
    </ul>

    <Button :label="buttonLabelReflexo" color="orange" @click="goToAppointment()" />
  </div>

  <div class="after">
    <h2>{{ t("practices.insideSessionPage.after.title") }}</h2>
    <p>{{ tm("practices.insideSessionPage.after.text")[0] }}</p>
    <p>{{ tm("practices.insideSessionPage.after.text")[1] }}</p>
    <p>{{ tm("practices.insideSessionPage.after.text")[2] }}</p>

    <ul class="after-list">
      <li v-for="item in afterList">
        <p class="title">{{ item.title }}</p>
        <p class="text">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
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

.why {
  display: flex;
  width: 100%;

  .card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .card-text-hover {
    padding: 60px 80px;
    .card-title {
      margin-bottom: 40px;
    }

    p:nth-child(3),
    .card-list {
      padding-bottom: 30px;
    }
  }

  .card-tuina {
    position: relative;
    width: 50%;
    height: 60vh;
    overflow: hidden;

    .card-text,
    .card-text-hover {
      position: absolute;
      inset: 0;
      color: white;
      transition: opacity 0.3s ease;
    }

    .card-text {
      background: rgba(0, 0, 0, 0.6);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      pointer-events: auto;
      z-index: 2;
    }

    .card-text-hover {
      background: rgba(0, 0, 0, 0.9);
      opacity: 0;
      pointer-events: none;
      overflow-y: auto;
      z-index: 3;
    }

    &:hover {
      .card-text {
        opacity: 0;
        pointer-events: none;
      }

      .card-text-hover {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }

  .card-reflexo {
    position: relative;
    width: 50%;
    height: 60vh;
    overflow: hidden;

    .card-text,
    .card-text-hover {
      position: absolute;
      inset: 0;
      color: white;
      transition: opacity 0.3s ease;
    }

    .card-text {
      background: rgba(0, 0, 0, 0.6);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      pointer-events: auto;
      z-index: 2;
    }

    .card-text-hover {
      background: rgba(0, 0, 0, 0.9);
      opacity: 0;
      pointer-events: none;
      overflow-y: auto;
      z-index: 3;
    }

    &:hover {
      .card-text {
        opacity: 0;
        pointer-events: none;
      }

      .card-text-hover {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}

.summary {
  background-image: url("@/assets/illustrations/practices/inside/reflexo-pieds-transp.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin-bottom: 40px;
  }

  &-separator {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px 0;
  }

  &-overlay {
    max-width: 1280px;
    width: 100%;
  }

  &-table {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    .summary-row {
      display: flex;
      justify-content: space-between;
      padding: 0;

      li {
        width: 20%;
        list-style: none;
      }
    }

    .first-line > li {
      font-weight: bold;
    }
  }
}

.session {
  width: 100%;
  text-align: center;
  h2 {
    margin: 80px 0 40px 0;
  }

  .session-detail {
    width: 100%;
    display: flex;
    .first-session {
      width: 50%;
      height: 100vh;
      background-color: $green;
      position: relative;

      &-brown {
        background-color: $brown-medium;
      }

      &-text {
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
      }

      &-image {
        width: 100%;
        height: 50vh;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;

        &-reflexo {
          background-image: url("@/assets/illustrations/practices/inside/reflexo-main.png");
          background-size: cover;
          background-position: top;
        }

        &-tuina {
          background-image: url("@/assets/illustrations/practices/inside/massage-dos.png");
          background-size: cover;
          background-position: top;
        }
      }

      &-hovering {
        width: 100%;
        height: 50vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 3;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: opacity 0.3s ease;
      }

      &-hovering:hover {
        opacity: 1;
      }
    }

    .second-session {
      width: 50%;
      height: 100vh;
      background-color: $green;
      position: relative;

      &-brown {
        background-color: $brown-medium;
      }

      &-text {
        width: 90%;
        height: 65vh;
        background-color: $orange-white;
        position: absolute;
        z-index: 4;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 60px 100px 60px 60px;
        text-align: center;

        h3 {
          margin-bottom: 40px;
        }

        .text {
          margin-bottom: 30px;
        }

        ul {
          padding: 0;
          li {
            list-style: none;
          }
        }
      }

      &-image {
        width: 100%;
        height: 50vh;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 2;

        &-reflexo {
          background-image: url("@/assets/illustrations/practices/inside/reflexo-visage.png");
          background-size: cover;
          background-position: top;
        }

        &-tuina {
          background-image: url("@/assets/illustrations/practices/inside/reflexo-dos.png");
          background-size: cover;
          background-position: center;
        }
      }

      &-hovering {
        width: 100%;
        height: 50vh;
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 3;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        transition: opacity 0.3s ease;
      }

      &-hovering:hover {
        opacity: 1;
      }
    }
  }
}

.rhythm {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 60px 0 40px 0;
  }

  p:nth-of-type(2) {
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    text-align: center;
    padding: 0;
    margin-bottom: 30px;
  }

  button {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
}

.after {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  background-color: $orange-white;

  h2 {
    margin-bottom: 40px;
  }

  &-list {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    list-style: none;
    max-width: 1280px;
    margin-top: 40px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 25%;
      padding: 30px 20px;
      border-radius: 5px;
      color: $white;
      transition: transform 0.3s ease;
      .title {
        font-weight: bold;
        margin-bottom: 20px;
      }

      &:hover {
        transform: scale(1.05);
      }
    }

    li:first-child {
      background-color: #4d2934;
    }

    li:nth-child(2) {
      background-color: #753e4e;
    }

    li:nth-child(3) {
      background-color: #b17887;
    }
    li:nth-child(4) {
      background-color: #b17887;
    }
  }
}
</style>
