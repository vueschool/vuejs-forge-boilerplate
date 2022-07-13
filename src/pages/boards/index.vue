<script setup>
import { ref } from "vue";

const boards = ref(["My First Board", "My Second Board", "My Third Board"]);

function createNewBoard () {
  console.log("create new board");
}
</script>

<template>
  <div>
    <h2>Boards</h2>
    <!-- boards -->
    <div class="boards-wrapper">
      <div
        v-for="board in boards"
        :key="board.id"
        class="board-box"
      >
        <img
          src="../../assets/temp_1.jpg"
          alt="bg-image"
        />
        <p>{{ board }}</p>
      </div>
      <button
        class="new-board"
        @click="createNewBoard()"
      >New board +</button>
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
