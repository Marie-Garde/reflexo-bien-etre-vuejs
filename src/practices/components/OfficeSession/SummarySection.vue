<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();

const summary = {
  firstLine: tm("practices.insideSessionPage.summary.array.firstLine"),
  secondLine: tm("practices.insideSessionPage.summary.array.secondLine"),
  thirdLine: tm("practices.insideSessionPage.summary.array.thirdLine"),
};
</script>

<template>
  <section class="office-session__summary">
    <h2 class="office-session__section-title">
      {{ t("practices.insideSessionPage.summary.title") }}
    </h2>
    <div class="summary-overlay">
      <div class="summary-table">
        <ul class="summary-row">
          <li v-for="(item, i) in summary.firstLine" :key="i">{{ item }}</li>
        </ul>
        <hr class="summary-separator" />
        <ul class="summary-row">
          <li v-for="(item, i) in summary.secondLine" :key="i">{{ item }}</li>
        </ul>
        <hr class="summary-separator" />
        <ul class="summary-row">
          <li v-for="(item, i) in summary.thirdLine" :key="i">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as *;

.office-session__summary {
  background-image: url("@/assets/illustrations/practices/inside/reflexo-pieds-transp.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .summary-separator {
    border: none;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 20px 0;
  }

  .summary-overlay {
    max-width: 1280px;
    width: 100%;
  }

  .summary-table {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      width: 20%;
      list-style: none;
    }

    &:first-child > li {
      font-weight: bold;
    }
  }
}
</style>
