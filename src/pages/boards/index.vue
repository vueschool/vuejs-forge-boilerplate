<script setup lang="ts">
import type { Board } from "@/types";
import { ref } from "vue";

const boards = ref<Partial<Board>[]>([
  {
    title: "My First Board",
    order: "[]",
    image: {},
  },
  {
    title: "My First Board",
    order: "[]",
  },
]);
</script>

<template></template>
