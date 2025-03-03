<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { homeRoutesName } from "@/home/routes/routesName";
import { aboutRoutesName } from "@/about/routes/routesName";
import { appointmentRoutesName } from "@/appointment/routes/routesName";
import { contactRoutesName } from "@/contact/routes/routesName";
import { practicesRoutesName } from "@/practices/routes/routesPath";
import { priceRoutesName } from "@/price/routes/routesName";
import { seasonsRoutesName } from "@/season/routes/routesName";
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: homeRoutesName.HOME }">Home</RouterLink>
      <RouterLink :to="{ name: aboutRoutesName.HOME }">Présentation</RouterLink>
      <RouterLink :to="{ name: practicesRoutesName.HOME }">Mes pratiques</RouterLink>
      <RouterLink :to="{ name: seasonsRoutesName.HOME }">Ce qui bouge</RouterLink>
      <RouterLink :to="{ name: priceRoutesName.HOME }">Tarifs</RouterLink>
      <RouterLink :to="{ name: contactRoutesName.HOME }"> Contact </RouterLink>
      <RouterLink :to="{ name: appointmentRoutesName.HOME }">Prendre rendez-vous</RouterLink>
    </nav>
  </header>
</template>
