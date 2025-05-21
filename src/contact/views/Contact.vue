<script setup lang="ts">
import { useI18n } from "vue-i18n";
import phone from "@/assets/icons/phone-black.vue";
import location from "@/assets/icons/location-black.vue";
import { ref, watch } from "vue";
import emailjs from "emailjs-com";

const { t } = useI18n();

const disabled = ref(true);
const isLoading = ref(false);

const lastNameError = ref(false);
const firstNameError = ref(false);
const mailError = ref(false);
const subjectError = ref(false);
const messageError = ref(false);
const error = ref("");
const sendMessage = ref("");

const formValue = ref({
  lastName: "",
  firstName: "",
  mail: "",
  subject: "",
  message: "",
});

watch(
  () => formValue.value,
  (formValue) => {
    console.log(formValue);
    if (
      formValue.lastName !== "" &&
      formValue.firstName !== "" &&
      formValue.mail !== "" &&
      formValue.subject !== "" &&
      formValue.message !== ""
    ) {
      disabled.value = false;
    } else {
      disabled.value = true;
    }
  },
  { deep: true }
);

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sendEmail() {
  lastNameError.value = false;
  firstNameError.value = false;
  mailError.value = false;
  subjectError.value = false;
  messageError.value = false;

  if (!formValue.value.lastName) {
    error.value = t("contact.form.error.lastName");
    lastNameError.value = true;
    return;
  }

  if (!formValue.value.firstName) {
    error.value = t("contact.form.error.firstName");
    firstNameError.value = true;
    return;
  }

  if (!formValue.value.mail || !validateEmail(formValue.value.mail)) {
    error.value = t("contact.form.error.mail");
    mailError.value = true;
    return;
  }

  if (!formValue.value.subject) {
    error.value = t("contact.form.error.subject");
    subjectError.value = true;
    return;
  }

  if (!formValue.value.message || formValue.value.message.length < 15) {
    error.value = t("contact.form.error.message");
    messageError.value = true;
    return;
  }

  isLoading.value = true;

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formValue.value.firstName + " " + formValue.value.lastName + "/",
        email: formValue.value.mail,
        subject: formValue.value.subject,
        message: formValue.value.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        formValue.value = {
          lastName: "",
          firstName: "",
          mail: "",
          subject: "",
          message: "",
        };

        sendMessage.value = t("contact.form.sendMessage.success");

        error.value = "";
      },
      () => {
        sendMessage.value = t("contact.form.sendMessage.error");
      }
    )
    .finally(() => {
      isLoading.value = false;
    });
}
</script>

<template>
  <div class="header">
    <div class="header-overlay">
      <h1 class="title">{{ t("contact.title") }}</h1>
    </div>
  </div>

  <div class="content">
    <div class="office">
      <div class="office-text">
        <h2 class="office-text-title">{{ t("contact.office.title") }}</h2>

        <div class="office-text-item">
          <location class="icon" />
          <p>{{ t("contact.office.adress") }}</p>
        </div>
        <div class="office-text-item">
          <phone class="icon" />
          <p>{{ t("contact.office.tel") }}</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d176.17498117165698!2d1.5027570951208709!3d45.0492863940753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1747646905303!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="form-container">
      <h2 class="office-text-title">{{ t("contact.form.title") }}</h2>
      <form @submit.prevent="sendEmail" class="form">
        <div class="form-input">
          <div class="form-input-field">
            <label class="form-input-label" for="lastName">{{ t("contact.form.lastName") }}</label>
            <input
              :class="{ 'input-error': lastNameError }"
              id="lastName"
              v-model="formValue.lastName"
              type="text"
              :placeholder="t('contact.form.lastName')"
            />
          </div>
          <div class="form-input-field">
            <label class="form-input-label" for="firstName">{{
              t("contact.form.firstName")
            }}</label>
            <input
              :class="{ 'input-error': firstNameError }"
              id="firstName"
              v-model="formValue.firstName"
              type="text"
              :placeholder="t('contact.form.firstName')"
            />
          </div>
          <div class="form-input-field">
            <label class="form-input-label" for="mail">{{ t("contact.form.mail") }}</label>
            <input
              :class="{ 'input-error': mailError }"
              id="mail"
              v-model="formValue.mail"
              type="mail"
              :placeholder="t('contact.form.mail')"
            />
          </div>
        </div>
        <div class="form-input-field">
          <label class="form-input-label" for="subject">{{ t("contact.form.subject") }}</label>
          <input
            :class="{ 'input-error': subjectError }"
            id="subject"
            v-model="formValue.subject"
            type="text"
            :placeholder="t('contact.form.subject')"
          />
        </div>
        <div class="form-input-field">
          <label for="message">{{ t("contact.form.message.label") }}</label>
          <textarea
            id="message"
            v-model="formValue.message"
            :placeholder="t('contact.form.message.placeholder')"
            :class="{ 'input-error': messageError }"
          ></textarea>
        </div>

        <p v-show="error" class="error">{{ error }}</p>

        <p v-show="sendMessage" class="send-message">{{ sendMessage }}</p>

        <button type="submit" :disabled="disabled || isLoading" class="submit">
          <span v-if="!isLoading">Envoyer</span>
          <span v-else class="loader"></span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.header {
  width: 100%;
  height: 60vh;
  background-image: url("@/assets/background/contactBackground.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0px 5px 5px $dark-grey;
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

.content {
  width: 100%;

  .office {
    max-width: 1200px;
    margin: 60px auto;
    display: flex;
    justify-content: space-between;

    &-text {
      margin: auto 0;

      &-title {
        margin-bottom: 40px;
      }

      &-item {
        display: flex;
        margin-bottom: 20px;

        .icon {
          margin-right: 10px;
        }
      }
    }
  }

  .form-container {
    background-color: $orange-light;
    text-align: center;
    padding: 60px 0;

    .form {
      max-width: 1200px;
      margin: 0 auto;

      .error {
        text-align: start;
        color: red;
      }

      &-input {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        &-field {
          width: 100%;
        }
      }

      &-input-field {
        display: flex;
        flex-direction: column;
        align-items: start;
        input {
          width: 100%;
          height: 40px;
          margin-bottom: 20px;
          border: none;
          border-radius: 5px;
        }
        textarea {
          width: 100%;
          height: 200px;
          border: none;
          border-radius: 5px;
        }
      }

      .input-error {
        border: 1px solid red;
      }

      .submit {
        background-color: $orange;
        color: $white;
        height: 50px;
        padding: 12px;
        border-radius: 5px;
        border: 0;
        width: 20%;
        margin-top: 20px;
        cursor: pointer;

        &:disabled {
          background-color: $dark-grey;
          color: $black;
          &:hover {
            color: $black;
            cursor: not-allowed;
          }
        }
      }

      .loader {
        width: 20px;
        height: 20px;
        border: 3px solid #fff;
        border-radius: 50%;
        border-top: 3px solid #3498db;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-left: 10px;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
}
</style>
