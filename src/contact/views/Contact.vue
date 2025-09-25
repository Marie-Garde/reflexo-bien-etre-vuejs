<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, reactive, computed } from "vue";
import emailjs from "emailjs-com";

import PhoneIcon from "@/assets/icons/phone-black.vue";
import LocationIcon from "@/assets/icons/location-black.vue";

const { t } = useI18n();

const formValue = reactive({
  lastName: "",
  firstName: "",
  mail: "",
  subject: "",
  message: "",
});

const errors = reactive({
  lastName: false,
  firstName: false,
  mail: false,
  subject: false,
  message: false,
  general: "",
});

const isLoading = ref(false);
const formSubmittedMessage = ref("");

const isSubmitDisabled = computed(() => {
  return !Object.values(formValue).every((value) => value !== "");
});

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateForm() {
  errors.lastName = !formValue.lastName;
  errors.firstName = !formValue.firstName;
  errors.mail = !validateEmail(formValue.mail);
  errors.subject = !formValue.subject;
  errors.message = formValue.message.length < 15;

  if (errors.lastName) errors.general = t("contact.form.error.lastName");
  else if (errors.firstName) errors.general = t("contact.form.error.firstName");
  else if (errors.mail) errors.general = t("contact.form.error.mail");
  else if (errors.subject) errors.general = t("contact.form.error.subject");
  else if (errors.message) errors.general = t("contact.form.error.message");
  else errors.general = "";

  return !Object.values(errors).some((error) => error === true);
}

function resetForm() {
  formValue.lastName = "";
  formValue.firstName = "";
  formValue.mail = "";
  formValue.subject = "";
  formValue.message = "";
}

function sendEmail() {
  formSubmittedMessage.value = "";
  if (!validateForm()) {
    return;
  }

  isLoading.value = true;

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: `${formValue.firstName} ${formValue.lastName}`,
        email: formValue.mail,
        subject: formValue.subject,
        message: formValue.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        resetForm();
        formSubmittedMessage.value = t("contact.form.sendMessage.success");
      },
      () => {
        formSubmittedMessage.value = t("contact.form.sendMessage.error");
      }
    )
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <div class="contact">
    <header class="contact__header">
      <div class="contact__header-overlay">
        <h1 class="contact__title">{{ t("contact.title") }}</h1>
      </div>
    </header>

    <main class="contact__content">
      <section class="contact__office">
        <div class="contact__office-text">
          <h2 class="contact__section-title">{{ t("contact.office.title") }}</h2>
          <div class="contact__office-item">
            <LocationIcon class="icon" />
            <p>{{ t("contact.office.adress") }}</p>
          </div>
          <div class="contact__office-item">
            <PhoneIcon class="icon" />
            <p>{{ t("contact.office.tel") }}</p>
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

      <section class="contact__form-container">
        <h2 class="contact__section-title">{{ t("contact.form.title") }}</h2>
        <form @submit.prevent="sendEmail" class="form">
          <div class="form__group form__group--horizontal">
            <div class="form__field">
              <label class="form__label" for="lastName">{{ t("contact.form.lastName") }}</label>
              <input
                :class="{ 'input-error': errors.lastName }"
                id="lastName"
                v-model="formValue.lastName"
                type="text"
                :placeholder="t('contact.form.lastName')"
              />
            </div>
            <div class="form__field">
              <label class="form__label" for="firstName">{{ t("contact.form.firstName") }}</label>
              <input
                :class="{ 'input-error': errors.firstName }"
                id="firstName"
                v-model="formValue.firstName"
                type="text"
                :placeholder="t('contact.form.firstName')"
              />
            </div>
          </div>
          <div class="form__field">
            <label class="form__label" for="mail">{{ t("contact.form.mail") }}</label>
            <input
              :class="{ 'input-error': errors.mail }"
              id="mail"
              v-model="formValue.mail"
              type="email"
              :placeholder="t('contact.form.mail')"
            />
          </div>
          <div class="form__field">
            <label class="form__label" for="subject">{{ t("contact.form.subject") }}</label>
            <input
              :class="{ 'input-error': errors.subject }"
              id="subject"
              v-model="formValue.subject"
              type="text"
              :placeholder="t('contact.form.subject')"
            />
          </div>
          <div class="form__field">
            <label class="form__label" for="message">{{ t("contact.form.message.label") }}</label>
            <textarea
              id="message"
              v-model="formValue.message"
              :placeholder="t('contact.form.message.placeholder')"
              :class="{ 'input-error': errors.message }"
            ></textarea>
          </div>

          <p v-if="errors.general" class="form__error-message">{{ errors.general }}</p>
          <p v-if="formSubmittedMessage" class="form__success-message">
            {{ formSubmittedMessage }}
          </p>

          <button type="submit" :disabled="isSubmitDisabled || isLoading" class="form__submit">
            <span v-if="!isLoading">Envoyer</span>
            <span v-else class="loader"></span>
          </button>
        </form>
      </section>
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
    box-shadow: 0 5px 5px $dark-grey;

    &-overlay {
      position: absolute;
      bottom: 5%;
      left: 20%;
      transform: translate(-50%, -50%);
      width: 50%;
      max-width: 600px;
      padding: 20px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 10px;
      text-align: left;
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

  &__form-container {
    background-color: $orange-white;
    text-align: center;
    padding: 60px 0;

    .form {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;

      &__group {
        &--horizontal {
          display: flex;
          gap: 20px;
          width: 100%;
        }
      }

      &__field {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        margin-bottom: 20px;
      }

      &__label {
        margin-bottom: 5px;
      }

      input,
      textarea {
        width: 100%;
        border: 1px solid transparent;
        border-radius: 5px;
        padding: 10px;
        font-size: 1rem;

        &.input-error {
          border-color: red;
        }
      }

      input {
        height: 40px;
      }

      textarea {
        height: 200px;
        resize: vertical;
      }

      &__error-message {
        color: red;
        text-align: left;
        margin-bottom: 10px;
      }

      &__success-message {
        color: green;
        text-align: left;
        margin-bottom: 10px;
      }

      &__submit {
        background-color: $orange;
        color: $white;
        height: 50px;
        padding: 12px;
        border-radius: 5px;
        border: 0;
        width: 200px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 1.2rem;
        transition: background-color 0.3s ease;

        &:disabled {
          background-color: $dark-grey;
          color: $black;
          cursor: not-allowed;
        }

        .loader {
          width: 20px;
          height: 20px;
          border: 3px solid #fff;
          border-radius: 50%;
          border-top: 3px solid #3498db;
          animation: spin 1s linear infinite;
          display: inline-block;
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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

    &__form-container {
      padding: 40px 0;

      .form {
        &__group {
          &--horizontal {
            flex-direction: column;
            gap: 0;
          }
        }
      }
    }
  }
}
</style>
