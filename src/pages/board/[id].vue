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
  <div>Board info {{ id }}</div>
  <span v-if="loading">Loading your boards...</span>
  <span v-else-if="error">Error: {{ error.message }}</span>
  <DragAndDropArea
    v-else-if="result && result.boardsList.items"
    :columns="result.boardsList.items[0].columns.items"
    :board="result.boardsList.items[0]"
    @update="updateBoard"
  />
</template>
