<script setup lang="ts">
import type { Board } from "@/types";
import { ref } from "vue";
const boards = ref<Partial<Board>[]>([
  {
    id: "1",
    title: "My First Board",
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=1",
    },
  },
  {
    id: "2",
    title: "My Second Board",
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=2",
    },
  },
  {
    id: "3",
    title: "My Third Board",
    order: "[]",
  },
]);
</script>

<template>
  <h1 class="text-3xl mb-5">Boards</h1>
  <div class="flex">
    <BoardCard v-for="board in boards" :key="board.id" :board="board" />
    <button class="text-gray-500" @click="createBoard(newBoardTemplate)">
      <span>New Board +</span>
    </button>
  </div>
</template>
