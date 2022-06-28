<script setup lang="ts">
import { toRefs, ref } from "vue";
import type { Board, Task } from "@/types";
import { useAlerts } from "@/stores/Alerts";
const alerts = useAlerts();

// Define Props
const props = defineProps<{
  id: string;
}>();
const { id: boardId } = toRefs(props);

const board = ref<Partial<Board>>({
  id: boardId.value,
  title: "My First Board",
  order: JSON.stringify([{ id: "1", title: "backlog", taskIds: ["1", "2"] }]),
});

const tasks = ref<Partial<Task>[]>([
  { id: "1", title: "Make toast" },
  { id: "2", title: "Clean room" },
]);

function updateBoard(b: Board) {
  board.value = b;
  alerts.success("Board updated!");
}
</script>
<template>
  <div>
    <AppPageHeading>
      {{ board.title }}
    </AppPageHeading>

    <BoardDragAndDrop :board="board" :tasks="tasks" @update="updateBoard" />
    <pre>
      {{ board }}
    </pre>
  </div>
</template>
