<script setup lang="ts">
import {
  Card as KCard,
  CardTitle as KCardTitle,
} from "@progress/kendo-vue-layout";
import type { Board } from "@/types";
defineProps<{
  board: Board;
}>();
const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
</script>
<template>
  <router-link :to="`/boards/${board.id}`" class="block w-96">
    <KCard class="m-5">
      <AppImage
        v-if="board.image"
        :src="board.image?.downloadUrl"
        width="384"
        class="aspect-video w-full"
      />
      <div
        v-else
        class="aspect-video w-full"
        :style="{ backgroundColor: randomColor }"
      ></div>
      <KCardTitle class="p-2">
        <span class="text-gray-700 text-xl">{{ board.title }}</span>
      </KCardTitle>
    </KCard>
  </router-link>
</template>
