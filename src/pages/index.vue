<script setup lang="ts">
import { computed } from 'vue';
import { useBoardsStore } from '@/store/boards/index';
import { useUsersStore } from '@/store/users/index';

const boardsStore = useBoardsStore();
const usersStore = useUsersStore();
boardsStore.getBoards();
usersStore.getUsers();

const usuarios = computed(()=>{
  return usersStore.users
});

</script>
<template>
  <div class="mx-16 my-16 flex w-full justify-start gap-8">
    <span v-if="boardsStore.isFetchingBoards">Loading your boards...</span>
    <span v-else-if="boardsStore.isErrorBoards">Error: {{ boardsStore.isErrorBoards.message }}</span>
    <BoardCard
      v-else-if="boardsStore.boards.length"
      v-for="(board, index) in boardsStore.boards"
      :key="index"
      :board="board"
    />
  </div>
</template>
