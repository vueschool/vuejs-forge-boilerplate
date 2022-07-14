<script setup lang="ts">
import { toRefs } from "vue";
// Define Props
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <div>Board info {{ id }}</div>
</template>
