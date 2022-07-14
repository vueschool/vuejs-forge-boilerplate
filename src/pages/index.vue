<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
const boards = [
  {
    title: "My Awesome Project",
    image: {
      downloadUrl: "https://picsum.photos/200/300",
    },
    id: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
    order: "",
  },
  {
    title: "My New Project",
    image: {
      downloadUrl: "https://picsum.photos/200/300",
    },
    id: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
    order: "",
  },
  {
    title: "Trello clone",
    image: {
      downloadUrl: "https://picsum.photos/200/300",
    },
    id: "3",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
    order: "",
  },
];

//ejemplo de query
const { result } = useQuery(gql`
  query {
    boardsList {
      items {
        title
      }
    }
  }
`);
console.log("asd", result.value);
</script>
<template>
  <div class="mx-16 my-16 flex w-full">
    <BoardCard v-for="(board, index) in boards" :key="index" :board="board" />
  </div>
</template>
