<script setup lang="ts">
import { toRefs, ref, computed } from "vue";
import type { Board, Task } from "@/types";
import { useAlerts } from "@/stores/Alerts";
import { useQuery, useMutation } from "@vue/apollo-composable";
import {
  GET_BOARD_QUERY,
  DELETE_BOARD_MUTATION,
  UPDATE_BOARD_MUTATION,
} from "@/graphql/queries/boards";
import { v4 as uuidv4 } from "uuid";
import AppLoader from "../../components/AppLoader.vue";
import { useRouter } from "vue-router";

const alerts = useAlerts();
const router = useRouter();

// Define Props
const props = defineProps<{
  id: string;
}>();
const { id: boardId } = toRefs(props);

// Init Page Data with Board and tasks
const {
  result: boardData,
  loading: loadingBoard,
  onError: onBoardError,
  refetch: refetchBoard,
} = useQuery(GET_BOARD_QUERY, { id: boardId.value });
onBoardError(() => alerts.error("Error loading board"));
const board = computed(() => boardData.value?.board || null);
const tasks = computed(() => board.value?.tasks?.items);

// handle board updates
const { mutate: updateBoard } = useMutation(UPDATE_BOARD_MUTATION);

//handle delete board
const { mutate: deleteBoard, onError: onErrorDeletingBoard } = useMutation(
  DELETE_BOARD_MUTATION
);
onErrorDeletingBoard(() => alerts.error("Error deleting board"));
async function deleteBoardIfConfirmed() {
  const yes = confirm("Are you sure you want to delete this board?");
  if (yes) {
    await deleteBoard({ id: boardId.value });
    router.push("/");
    alerts.success(`Board successfully deleted`);
  }
}

function addTask(task: Task) {
  return new Promise((resolve, reject) => {
    const taskWithId = {
      ...task,
      id: uuidv4(),
    };
    tasks.value.push(taskWithId);
    resolve(taskWithId);
  });
}
</script>
<template>
  <div v-if="board">
    <div class="flex justify-between">
      <AppPageHeading>
        {{ board.title }}
      </AppPageHeading>
      <BoardMenu :board="board" @deleteBoard="deleteBoardIfConfirmed" />
    </div>

    <BoardDragAndDrop
      :board="board"
      :tasks="tasks"
      @update="updateBoard"
      :addTask="addTask"
    />
  </div>
  <AppLoader v-if="loadingBoard" :overlay="true" />
</template>
