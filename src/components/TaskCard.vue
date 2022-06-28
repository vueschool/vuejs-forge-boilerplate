<script setup lang="ts">
import type { Task } from "@/types";
const props = defineProps<{
  task: Task;
}>();
</script>
<template>
  <div class="bg-white p-5">{{ task }}</div>
</template>
