<script setup lang="ts">
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/graphql/ApolloClient";
import { useScriptTag } from "@vueuse/core";
import TheNavbar from "./components/TheNavbar.vue";
import { useAuthUserStore } from "./stores/AuthUserStore";

// Provide Apollo Client to all Vue Components
provide(DefaultApolloClient, apolloClient);

// Initialize TwicPic
useScriptTag(`${import.meta.env.VITE_TWICPICS_URL}?v1`);

const authUserStore = useAuthUserStore();
authUserStore.initUser();
</script>

<template>
  <TheNavbar />
  <TheDrawer />
  <TheAlerts />
</template>
