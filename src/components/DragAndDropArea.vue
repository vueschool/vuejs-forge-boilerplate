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
  <div class="flex h-4/5">
    <draggable
      :list="columns"
      group="columns"
      item-key="id"
      ghost-class="ghost-card"
      class="flex w-full"
    >
      <template #item="{ element: column }">
        <div class="bg-[#ebecf0] mr-4 p-2 rounded">
          <p class="font-medium mb-1">{{ column.title }}</p>
          <draggable
            v-for="(column, i) in columns"
            :key="i"
            :list="column.tasks.items"
            group="tasks"
            item-key="id"
            ghost-class="ghost-card"
            class="w-[300px]"
          >
            <template #item="{ element: task }">
              <TaskCard :task="task" class="mt-3 cursor-move" />
            </template>
          </draggable>
        </div>
      </template>
    </draggable>
  </div>
</template>
