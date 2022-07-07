<script setup lang="ts">
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/graphql/ApolloClient";
import { useScriptTag } from "@vueuse/core";
import TheNavbar from "./components/TheNavbar.vue";

// Provide Apollo Client to all Vue Components
provide(DefaultApolloClient, apolloClient);

// Initialize TwicPic
useScriptTag(`${import.meta.env.VITE_TWICPICS_URL}?v1`);
</script>

<template>
  <TheNavbar />
  <TheDrawer />
  <TheAlerts />
</template>
