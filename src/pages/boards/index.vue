<script setup lang="ts">
import type { Board } from "@/types";
import { computed } from "vue";
import { useAlerts } from "@/stores/Alerts";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { useAuthUserStore } from "@/stores/AuthUserStore";
import {
  BOARDS_LIST_QUERY,
  BOARD_CREATE_MUTATION,
} from "@/graphql/queries/boards";
import { useRouter } from "vue-router";

const router = useRouter();
const alerts = useAlerts();
const authUseStore = useAuthUserStore();

const loading = computed(() => loadingBoards.value || creatingBoard.value);

// Boards List
const {
  result,
  loading: loadingBoards,
  onError,
} = useQuery(BOARDS_LIST_QUERY, null, {
  fetchPolicy: "cache-and-network",
});
onError(() => alerts.error("Error loading boards"));
const boards = computed((): Board[] => result.value?.boardsList?.items || []);

// Board Create
const {
  mutate: createBoard,
  onDone: onBoardCreated,
  onError: onBoardError,
  loading: creatingBoard,
} = useMutation(BOARD_CREATE_MUTATION);

onBoardCreated((res) => {
  alerts.success("New board created!");
  router.push(`/boards/${res.data.boardCreate.id}?new=1`);
});
onBoardError(() => alerts.error("Error creating board"));

const newBoardTemplate = computed(() => {
  return {
    // @ts-expect-error team is nested under items since coming from graphQL
    teamId: authUseStore?.user?.team.items[0].id,
    title: "My New Board",
    order: JSON.stringify([
      {
        uid: "1",
        title: "Backlog",
        taskIds: [],
      },
    ]),
  };
});
</script>

<template>
  <AppPageHeading>Boards</AppPageHeading>
  <div class="flex" v-if="boards">
    <BoardCard v-for="board in boards" :key="board.id" :board="board" />
    <button class="text-gray-500" @click="createBoard(newBoardTemplate)">
      <span>New Board +</span>
    </button>
  </div>
  <AppLoader v-if="loading" :overlay="true" />
</template>
