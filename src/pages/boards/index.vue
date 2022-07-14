<script setup lang="ts">
import type { Board } from "@/types";

const staticBoards = [
  {
    id: "1",
    title: "The First Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=1"
    }
  },
  {
    id: "2",
    title: "The Second Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=2"
    }
  },
  {
    id: "3",
    title: "The Third Board",
    // array wrapped in a string will be compiled to just an array - typescript thing
    order: "[]",
    image: {
      downloadUrl: "https://picsum.photos/480/270?board=3"
    }
  }
]
</script>
<template>
<main>

</main>
</template>