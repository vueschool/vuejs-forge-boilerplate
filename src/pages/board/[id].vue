<script setup lang="ts">
// Define Props
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <div>Board info {{ props.id }}</div>
</template>
