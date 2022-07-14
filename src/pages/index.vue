<script setup lang="ts">
import { useBoardsStore } from '@/store/boards/index'
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    boardsList {
      items {
        id
        title
        image {
          shareUrl
        }
      }
    }
  }
`);

const boardsStore = useBoardsStore();
boardsStore.getBoards();
console.log("asdddd",boardsStore)
</script>
<template>
  <div class="mx-16 my-16 flex w-full justify-start gap-8">
    <span v-if="loading">Loading your boards...</span>
    <span v-else-if="error">Error: {{ error.message }}</span>
    <BoardCard
      v-else-if="result && result.boardsList"
      v-for="(board, index) in result.boardsList.items"
      :key="index"
      :board="board"
    />
  </div>
</template>
