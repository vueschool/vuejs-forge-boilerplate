<script setup lang="ts">
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

defineProps<{
  modelValue?: string;
}>();

defineEmits<{
  (e: "update:modelValue", payload: string): void;
}>();
</script>
<template>
  <div class="flex items-center">
    <button
      v-for="color in colors"
      @click="$emit('update:modelValue', color)"
      :key="color"
      class="rounded mr-2"
      :class="`bg-${color}-500 ${modelValue === color ? 'p-1' : 'p-2'}`"
    >
      <span
        v-if="modelValue === color"
        class="k-icon k-i-check text-white"
      ></span>
    </button>
  </div>
</template>
