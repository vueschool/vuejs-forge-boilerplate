<script setup lang="ts">
import { useBase64, useDropZone } from '@vueuse/core';
import { ref } from 'vue';
const dropzoneEl = ref<HTMLElement | null>(null);
const file = ref();
const { base64: url } = useBase64(file);
const { isOverDropZone } = useDropZone(dropzoneEl, (files) => {
  if (!files) return;
  file.value = files[0];
  console.log(file.value);
});
function onFileChange(e: any) {
  file.value = e.target.files[0];
  console.log(file.value);
}
function reset() {
  file.value = null;
}
</script>

<template>
  <div
    ref="dropzoneEl"
    class="flex m-4"
    :class="{
      border: isOverDropZone,
      'bg-orange-100': isOverDropZone,
      'border-orange-400': isOverDropZone,
    }"
    style="width: 300px; height: 200px; background: #3332; position: relative"
  >
    <div class="m-auto opacity-50">Drop a image over or select</div>
    <div v-if="url" class="absolute left-0 top-0 bottom-0 right-0 object-cover">
      <img :src="url" class="h-full" />
    </div>
    <input
      class="absolute z-1 left-0 top-0 bottom-0 right-0 opacity-0"
      type="file"
      accept="image/*"
      @input="onFileChange"
    />
  </div>
  <button @click="reset">Reset</button>
</template>
