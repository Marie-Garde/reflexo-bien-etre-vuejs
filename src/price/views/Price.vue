<script setup lang="ts">
import { useI18n } from "vue-i18n";
import HeaderPage from "@/components/HeaderPage.vue";
import Button from "@/components/Button.vue";

const { t, tm } = useI18n();

const title = t("price.title");
const types = tm("price.type");

const labelButton = t("price.takeAppointment");
</script>

<template>
  <HeaderPage :label="title" background="green" />

  <div class="content">
    <div class="prices">
      <ul class="prices-list">
        <li v-for="type in types">
          <h2 class="prices-list-title">{{ type.title }}</h2>
          <p class="prices-list-description red">{{ type.description }}</p>

          <div v-for="(item, index) in type.prices" :key="index" class="prices-item">
            <p class="prices-item-title">
              {{ item.title }}
            </p>
            <p class="prices-item-price red">{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>

    <aside>
      <Button :label="labelButton" background="orange" class="take-appointment-button" />
    </aside>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/variables.scss" as *;

.content {
  display: flex;
  justify-content: space-between;
  gap: 2vw;
  max-width: 1200px;
  margin: 40px auto;
}

.prices {
  &-list {
    list-style: none;
    padding-left: 0;
    li {
      margin-bottom: 40px;
      .prices-list-title {
        margin-bottom: 20px;
      }
      .prices-list-description {
        margin-bottom: 20px;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;
    position: relative;
    padding: 10px 0;

    &-title {
      width: 12%;
      text-align: left;
      padding-right: 30px;
    }

    &-price {
      width: 50%;
      padding-left: 30px;
      text-align: left;
    }

    &:before {
      content: "";
      position: absolute;
      left: 10%;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: #ccc;
      transform: translateX(-50%);
    }
  }
}

aside {
  width: 50%;
}

.take-appointment-button {
  padding: 20px 32px;
  font-size: 1.2rem;
}
</style>
