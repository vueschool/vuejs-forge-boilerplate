<script setup lang="ts">
import { Loader as KLoader } from "@progress/kendo-vue-indicators";
defineProps<{
  overlay: boolean;
}>();
</script>
<template>
  <div :class="{ overlay }">
    <KLoader type="pulsing" />
  </div>
</template>

<style scoped>
.overlay {
  @apply absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center;
  background: rgba(255, 255, 255, 0.95);
  z-index: 2;
}
</style>
