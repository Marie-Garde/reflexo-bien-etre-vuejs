<script setup lang="ts">
import { computed, type PropType } from "vue";
import { useRouter } from "vue-router";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import Button from "@/components/Button.vue";
import PortableText from "@/general/components/PortableText.vue";
import { urlFor } from "@/sanityClient";
import type { OutsideSessionContent } from "../../interface/PracticesContent";

const props = defineProps({
  section: {
    type: Object as PropType<OutsideSessionContent["session"]>,
    required: true,
  },
  buttonLabel: { type: String, required: true },
});

const router = useRouter();

const imageSource = computed(() =>
  urlFor(props.section.image).width(1200).format("webp").quality(80).url(),
);

function goToAppointment() {
  router.push({ name: appointmentRoutesName.HOME });
}
</script>

<template>
  <div class="infos-session">
    <img :src="imageSource" :alt="props.section.image.alt ?? ''" loading="lazy" decoding="async" />
    <div class="text">
      <h2>{{ props.section.title }}</h2>
      <PortableText :blocks="props.section.body" />
      <Button class="button" :label="props.buttonLabel" color="orange" @click="goToAppointment()" />
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

    // Paragraphes rendus par PortableText : :deep() est nécessaire.
    :deep(p) {
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
