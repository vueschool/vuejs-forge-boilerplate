<script setup lang="ts">
// Define Props
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <div>Board info {{ id }}</div>
</template>
