<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

// Define Props
const props = defineProps<{
  id: string;
}>();
const updateBoard = () => {
  alert("Board updated");
};

const { result, loading, error } = useQuery(gql`
  query {
    boardsList(filter: { id: { equals: "${props.id}" } }) {
      items {
        title
        columns {
          items {
            title
            tasks {
              items {
                title
                description
              }
            }
          }
        }
      }
    }
  }
`);
</script>
<template>
  <span v-if="loading">Loading your boards...</span>
  <span v-else-if="error">Error: {{ error.message }}</span>

  <div
    v-else-if="result && result.boardsList.items"
    class="h-full bg-gradient-to-b from-[#283048] to-[#859398] p-3"
  >
    <h1 class="font-bold text-xl capitalize text-white mb-4">
      {{ result.boardsList.items[0].title }}
    </h1>
    <DragAndDropArea
      :columns="result.boardsList.items[0].columns.items"
      :board="result.boardsList.items[0]"
      @update="updateBoard"
    />
  </div>
</template>
