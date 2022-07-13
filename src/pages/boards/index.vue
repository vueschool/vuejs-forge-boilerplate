<script setup>
import { ref } from 'vue';

const boards = ref([
  {
    id: '1',
    title: 'My First Board',
    order: '[]',
    image: {
      downloadUrl: 'https://picsum.photos/480/270?board=1',
    },
  },
  {
    id: '2',
    title: 'My Second Board',
    order: '[]',
    image: {
      downloadUrl: 'https://picsum.photos/480/270?board=2',
    },
  },
  {
    id: '3',
    title: 'My Third Board',
    order: '[]',
  },
]);

function createNewBoard() {
  console.log('create new board');
}
</script>

<template>
  <div>
    <h2>Boards</h2>
    <!-- boards -->
    <div class="boards-wrapper">
      <div v-for="board in boards" :key="board.id" class="board-box">
        <router-link :to="`/boards/${board.id}`">
          <img src="../../assets/temp_1.jpg" alt="bg-image" />
          <p>{{ board.title }}</p>
        </router-link>
      </div>
      <button class="new-board" @click="createNewBoard()">New board +</button>
    </div>
  </div>
</template>

<style scoped>
.boards-wrapper {
  display: flex;
}
.board-box {
  padding: 12px;
}
.new-board {
  display: flex;
  align-items: center;
}
img {
  max-width: 150px;
  height: auto;
  border-radius: 8px;
}
</style>
