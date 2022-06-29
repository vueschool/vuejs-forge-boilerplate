<script setup lang="ts">
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/graphql/ApolloClient";

// Provide Apollo Client to all Vue Components
provide(DefaultApolloClient, apolloClient);
</script>

<template>
  <TheDrawer />
  <TheAlerts />
</template>
