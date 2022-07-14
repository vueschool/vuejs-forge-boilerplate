<script setup lang="ts">
import BoardNavBar from "@/components/BoardNavBar.vue";
// Define Props
const props = defineProps<{
  id: string;
}>();
</script>
<template>
  <div class="flex">
    <div>Board info {{ props.id }}</div>
  </div>
</template>
