<script setup lang="ts">
import { cloneDeep } from "lodash-es";
import { reactive } from "vue";
import type { Board, Column } from "@/types";
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";

// props
const props = defineProps<{
  board: Board;
  columns: Column[];
}>();
// events
const emit = defineEmits<{
  (e: "update", payload: Partial<Board>): void;
}>();
// local data
const board = reactive(cloneDeep(props.board));
const columns = reactive(cloneDeep(props.columns));
</script>

<template>
  <div class="flex py-12 items-start">
    <draggable
      v-for="(column, i) in columns"
      :key="i"
      :list="column.tasks.items"
      group="tasks"
      item-key="id"
      ghost-class="ghost-card"
      class="column bg-gray-100 flex flex-col justify-between rounded-lg px-3 py-3 rounded mr-4 w-[300px]"
    >
      <template #item="{ element: task }">
        <TaskCard :task="task" class="mt-3 cursor-move" />
      </template>
    </draggable>
  </div>
</template>
