<script setup lang="ts">
import { ref, reactive, computed, type PropType } from "vue";
import emailjs from "emailjs-com";
import type { ContactContent } from "../interface/ContactContent";

const props = defineProps({
  labels: { type: Object as PropType<ContactContent["form"]>, required: true },
  errors: { type: Object as PropType<ContactContent["errors"]>, required: true },
  feedback: { type: Object as PropType<ContactContent["feedback"]>, required: true },
});

const formValue = reactive({
  lastName: "",
  firstName: "",
  mail: "",
  phone: "",
  subject: "",
  message: "",
});

const fieldErrors = reactive<Record<string, boolean | string>>({
  lastName: false,
  firstName: false,
  mail: false,
  phone: false,
  subject: false,
  message: false,
  general: "",
});

const isLoading = ref(false);
const formSubmittedMessage = ref("");

const isSubmitDisabled = computed(() => {
  return (
    !formValue.lastName ||
    !formValue.firstName ||
    !formValue.subject ||
    !formValue.message ||
    (!formValue.mail && !formValue.phone)
  );
});

function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string) {
  const phoneRegex = /^\+?[0-9]{7,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

function validateForm() {
  // Reset errors
  fieldErrors.lastName = false;
  fieldErrors.firstName = false;
  fieldErrors.mail = false;
  fieldErrors.phone = false;
  fieldErrors.subject = false;
  fieldErrors.message = false;
  fieldErrors.general = "";

  let hasError = false;

  if (!formValue.lastName) {
    fieldErrors.lastName = true;
    if (!fieldErrors.general) fieldErrors.general = props.errors.lastName;
    hasError = true;
  }
  if (!formValue.firstName) {
    fieldErrors.firstName = true;
    if (!fieldErrors.general) fieldErrors.general = props.errors.firstName;
    hasError = true;
  }
  if (!formValue.subject) {
    fieldErrors.subject = true;
    if (!fieldErrors.general) fieldErrors.general = props.errors.subject;
    hasError = true;
  }
  if (formValue.message.length < 15) {
    fieldErrors.message = true;
    if (!fieldErrors.general) fieldErrors.general = props.errors.message;
    hasError = true;
  }

  if (!formValue.mail && !formValue.phone) {
    fieldErrors.mail = true;
    fieldErrors.phone = true;
    if (!fieldErrors.general) fieldErrors.general = props.errors.mailOrPhone;
    hasError = true;
  } else {
    if (formValue.mail && !validateEmail(formValue.mail)) {
      fieldErrors.mail = true;
      if (!fieldErrors.general) fieldErrors.general = props.errors.mail;
      hasError = true;
    }
    if (formValue.phone && !validatePhone(formValue.phone)) {
      fieldErrors.phone = true;
      if (!fieldErrors.general) fieldErrors.general = props.errors.phone;
      hasError = true;
    }
  }

  return !hasError;
}

function resetForm() {
  formValue.lastName = "";
  formValue.firstName = "";
  formValue.mail = "";
  formValue.phone = "";
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
        phone: formValue.phone,
        subject: formValue.subject,
        message: formValue.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(
      () => {
        resetForm();
        formSubmittedMessage.value = props.feedback.success;
      },
      () => {
        formSubmittedMessage.value = props.feedback.error;
      },
    )
    .finally(() => {
      isLoading.value = false;
    });
}

const formFields = computed(() => [
  { name: "lastName", type: "text", label: props.labels.lastName, half: true },
  { name: "firstName", type: "text", label: props.labels.firstName, half: true },
  { name: "mail", type: "email", label: props.labels.mail, half: false },
  { name: "phone", type: "tel", label: props.labels.phone, half: false },
  { name: "subject", type: "text", label: props.labels.subject, half: false },
  { name: "message", type: "textarea", label: props.labels.message, half: false },
]);
</script>

<template>
  <section class="contact__form-container">
    <h2 class="contact__section-title">{{ props.labels.title }}</h2>
    <form @submit.prevent="sendEmail" class="form">
      <div class="form__group form__group--horizontal">
        <div
          v-for="field in formFields.filter((f) => f.half)"
          :key="field.name"
          class="form__field"
        >
          <label class="form__label" :for="field.name">{{ field.label }}</label>
          <input
            :class="{ 'input-error': fieldErrors[field.name] }"
            :id="field.name"
            v-model="formValue[field.name as keyof typeof formValue]"
            :type="field.type"
            :placeholder="field.label"
          />
        </div>
      </div>

      <div v-for="field in formFields.filter((f) => !f.half)" :key="field.name" class="form__field">
        <label class="form__label" :for="field.name">{{ field.label }}</label>
        <input
          v-if="field.type !== 'textarea'"
          :class="{ 'input-error': fieldErrors[field.name] }"
          :id="field.name"
          v-model="formValue[field.name as keyof typeof formValue]"
          :type="field.type"
          :placeholder="field.label"
        />
        <textarea
          v-if="field.type === 'textarea'"
          :id="field.name"
          v-model="formValue[field.name as keyof typeof formValue]"
          :placeholder="props.labels.messagePlaceholder"
          :class="{ 'input-error': fieldErrors[field.name] }"
        ></textarea>
      </div>

      <p v-if="fieldErrors.general" class="form__error-message">{{ fieldErrors.general }}</p>
      <p v-if="formSubmittedMessage" class="form__success-message">
        {{ formSubmittedMessage }}
      </p>

      <button type="submit" :disabled="isSubmitDisabled || isLoading" class="form__submit">
        <span v-if="!isLoading">{{ props.labels.send }}</span>
        <span v-else class="loader"></span>
      </button>
    </form>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.contact__form-container {
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
      font-family: inherit;

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

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .contact__form-container {
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
</style>
