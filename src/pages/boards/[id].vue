<script setup lang="ts">
import { toRefs, computed } from "vue";
import type { Task } from "@/types";
import { useAlerts } from "@/stores/Alerts";
import { useQuery, useMutation } from "@vue/apollo-composable";
import {
  GET_BOARD_QUERY,
  DELETE_BOARD_MUTATION,
  UPDATE_BOARD_MUTATION,
  CREATE_TASK_ON_BOARD_MUTATION,
} from "@/graphql/queries/boards";
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
} = useQuery(
  GET_BOARD_QUERY,
  { id: boardId.value },
  {
    fetchPolicy: "cache-and-network",
  }
);
onBoardError(() => alerts.error("Error loading board"));
const board = computed(() => boardData.value?.board || null);
const tasks = computed(() => board.value?.tasks?.items);

// handle board updates
const { mutate: updateBoard, onDone: onBoardUpdated } = useMutation(
  UPDATE_BOARD_MUTATION
);
onBoardUpdated(() => alerts.success("Board successfully updated!"));
const updateBoardTitle = (title: string) => {
  if (board.value.title === title) return;
  updateBoard({ id: boardId.value, title });
};

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

// handle create task
const {
  mutate: createTaskOnBoard,
  onError: onErrorCreatingTask,
  onDone: onDoneCreatingTask,
} = useMutation(CREATE_TASK_ON_BOARD_MUTATION);
let taskResolve = (task: Task) => {};
let taskReject = (message: Error) => {};
function addTask(task: Task) {
  return new Promise((resolve, reject) => {
    taskResolve = resolve;
    taskReject = reject;
    createTaskOnBoard({
      boardId: boardId.value,
      ...task,
    });
  });
}
onErrorCreatingTask((error) => {
  taskReject(error);
  alerts.error("Error creating task");
});
onDoneCreatingTask((res) => {
  taskResolve(res.data.boardUpdate.tasks.items[0]);
  alerts.success("New task created!");
});
</script>
<template>
  <div v-if="board">
    <div class="flex justify-between">
      <AppPageHeading>
        <input
          @keydown.enter="($event.target as HTMLInputElement).blur()"
          @blur="updateBoardTitle(($event.target as HTMLInputElement).value)"
          type="text"
          :value="board.title"
        />
      </AppPageHeading>
      <BoardMenu
        :board="board"
        @deleteBoard="deleteBoardIfConfirmed"
        @imageUpload="refetchBoard()"
      />
    </div>

    <BoardDragAndDrop
      :board="board"
      :tasks="tasks"
      @update="updateBoard"
      :addTask="addTask"
    />
  </div>
  <AppLoader v-if="loadingBoard" :overlay="true" />
  <RouterView />
</template>
