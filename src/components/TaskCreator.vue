<script setup lang="ts">
import { ref, nextTick } from "vue";
import { Input as KInput } from "@progress/kendo-vue-inputs";
const active = ref(false);
const input = ref<HTMLInputElement>(null);
const value = ref("");
const emit = defineEmits<{
  (e: "create", payload: string): void;
  (e: "cancel"): void;
}>();

const handleActivate = () => {
  active.value = true;
  nextTick(() => input.value.focus());
};
const handleEnter = () => {
  emit("create", value.value);
  value.value = "";
  active.value = false;
};
const handleEsc = () => {
  value.value = "";
  emit("cancel");
  active.value = false;
};
</script>

<template>
  <div class="w-full">
    <KInput
      ref="input"
      type="text"
      v-if="active"
      v-model="value"
      @keypress.enter="handleEnter"
      @keypress.esc="handleEsc"
      @blur="handleEsc"
    />
    <button
      v-else
      @click="handleActivate()"
      class="text-gray-600 block w-full text-left p-1"
    >
      + Create Task
    </button>
  </div>
</template>

<style scoped></style>
