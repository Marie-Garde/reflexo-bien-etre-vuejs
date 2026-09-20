<script setup lang="ts">
import { onMounted, onServerPrefetch } from "vue";
import { storeToRefs } from "pinia";
import PhoneIcon from "@/assets/icons/phone-black.vue";
import LocationIcon from "@/assets/icons/location-black.vue";
import MessageIcon from "@/assets/icons/message-black.vue";
import ContactForm from "@/contact/components/ContactForm.vue";
import { useContactContentStore } from "../stores/contactContent";

const store = useContactContentStore();
const { content } = storeToRefs(store);

onServerPrefetch(store.load);
onMounted(store.load);
</script>

<template>
  <div class="contact" v-if="content">
    <header class="contact__header">
      <div class="contact__header-container">
        <div class="contact__header-overlay">
          <h1 class="contact__title">{{ content.title }}</h1>
        </div>
      </div>
    </header>

    <main class="contact__content">
      <section class="contact__office">
        <div class="contact__office-text">
          <h2 class="contact__office-title">{{ content.office.title }}</h2>
          <div class="contact__office-item">
            <LocationIcon />
            <p>{{ content.office.address }}</p>
          </div>
          <div class="contact__office-item">
            <PhoneIcon />
            <p>{{ content.office.phone }}</p>
          </div>
          <div class="contact__office-item">
            <MessageIcon />
            <p>{{ content.office.email }}</p>
          </div>
        </div>
        <iframe
          class="contact__office-map"
          :src="content.office.mapEmbedUrl"
          width="600"
          height="450"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Carte Google Maps indiquant l'emplacement du cabinet"
        ></iframe>
      </section>

      <ContactForm :labels="content.form" :errors="content.errors" :feedback="content.feedback" />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.contact {
  &__header {
    width: 100%;
    height: 60vh;
    background-image: url("@/assets/background/contactBackground.webp");
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;

    &-container {
      width: 100%;
      max-width: 1280px;
      height: 100%;
      display: flex;
      align-items: flex-end;
    }

    &-overlay {
      width: 50%;
      max-width: 600px;
      padding: 2rem;
      margin-bottom: 5rem;
      background: rgba($white, 0.9);
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }
  }

  &__content {
    width: 100%;
  }

  &__office {
    max-width: 1200px;
    margin: 60px auto;
    display: flex;
    justify-content: space-between;
    gap: 40px;

    &-title {
      margin-bottom: 40px;
    }

    &-text {
      margin: auto 0;
    }

    &-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 20px;
    }

    &-map {
      border-radius: 5px;
      box-shadow: 0 5px 5px $dark-grey;
    }
  }
}

@media (max-width: 768px) {
  .contact {
    &__header {
      height: auto;
      background-image: none;
      display: block;

      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 250px;
        background-image: url("@/assets/background/contactBackground.webp");
        background-size: cover;
        background-position: center;
      }

      &-container {
        align-items: center;
        justify-content: center;
      }
      &-overlay {
        width: 90%;
        margin-bottom: 0;
        padding: 2rem 0;
        text-align: center;
        background: transparent;
        box-shadow: none;
      }
    }

    &__office {
      flex-direction: column;
      margin: 20px auto;
      padding: 0 20px;

      &-map {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
