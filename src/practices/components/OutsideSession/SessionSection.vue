<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";

defineProps<{
  image: string;
}>();

const { t, tm } = useI18n();
const router = useRouter();

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="infos-session">
    <img :src="image" alt="" />
    <div class="text">
      <h2>{{ t("practices.outsideSessionPage.session.title") }}</h2>
      <p>{{ tm("practices.outsideSessionPage.session.text")[0] }}</p>
      <p>{{ tm("practices.outsideSessionPage.session.text")[1] }}</p>
      <p>{{ tm("practices.outsideSessionPage.session.text")[2] }}</p>
      <p>{{ tm("practices.outsideSessionPage.session.text")[3] }}</p>
      <p>{{ tm("practices.outsideSessionPage.session.text")[4] }}</p>
      <Button
        class="button"
        :label="t('practices.outsideSessionPage.buttonLabel')"
        color="orange"
        @click="goToAppointment()"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.infos-session {
  width: 100%;
  min-height: 60vh;
  height: auto;
  display: flex;

  .text {
    width: 50%;
    padding: 40px 120px 40px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin-bottom: 40px;
    }

    p {
      padding-bottom: 20px;
    }

    .button {
      width: 70%;
      margin-top: 30px;
      font-size: 1.2rem;
    }
  }

  img {
    flex: 1;
    object-fit: cover;
    object-position: top;
    width: 50%;
  }
}

@media (max-width: 768px) {
  .infos-session {
    flex-direction: column-reverse;
    height: auto;

    .text {
      width: 100%;
      padding: 40px 20px;
      text-align: center;

      .button {
        width: 100%;
      }
    }

    img {
      width: 100%;
      height: 40vh;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .infos-session {
    height: fit-content;

    img {
      width: 50%;
    }

    .text {
      padding: 0 60px 0 40px;
      width: 50%;

      .button {
        width: 70%;
        margin-bottom: 40px;
      }
    }
  }
}
</style>
