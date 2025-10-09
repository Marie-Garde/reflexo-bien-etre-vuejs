<script setup lang="ts">
import { useI18n } from "vue-i18n";
import PhoneIcon from "@/assets/icons/phone-black.vue";
import LocationIcon from "@/assets/icons/location-black.vue";
import MessageIcon from "@/assets/icons/message-black.vue";
import ContactForm from "@/contact/components/ContactForm.vue";

const { t } = useI18n();
</script>

<template>
  <div class="contact">
    <header class="contact__header">
      <div class="contact__header-container">
        <div class="contact__header-overlay">
          <h1 class="contact__title">{{ t("contact.title") }}</h1>
        </div>
      </div>
    </header>

    <main class="contact__content">
      <section class="contact__office">
        <div class="contact__office-text">
          <h2 class="contact__office-title">{{ t("contact.office.title") }}</h2>
          <div class="contact__office-item">
            <LocationIcon />
            <p>{{ t("contact.office.adress") }}</p>
          </div>
          <div class="contact__office-item">
            <PhoneIcon />
            <p>{{ t("contact.office.tel") }}</p>
          </div>
          <div class="contact__office-item">
            <MessageIcon />
            <p>contact@reflexo-bien-etre.fr</p>
          </div>
        </div>
        <iframe
          class="contact__office-map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d176.17498117165698!2d1.5027570951208709!3d45.0492863940753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1747646905303!5m2!1sfr!2sfr"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen="false"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <ContactForm />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.contact {
  &__header {
    width: 100%;
    height: 60vh;
    background-image: url("@/assets/background/contactBackground.jpg");
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
      height: 40vh;

      &-overlay {
        left: 50%;
        width: 80%;
        padding: 15px;
        bottom: 2%;
      }
    }

    &__office {
      flex-direction: column;
      margin: 40px auto;
      padding: 0 20px;

      &-map {
        width: 100%;
        height: 300px;
      }
    }
  }
}
</style>
