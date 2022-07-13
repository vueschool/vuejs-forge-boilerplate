<script setup lang="ts">
import type { Board } from '@/types';
import { useRoute } from 'vue-router';
import ImageDropzone from "@/components/ImageDropzone.vue";

const $route = useRoute()

const board: Board = {
    id: $route.params.id as string,
    title: `Board ${$route.params.id}`,
    order: `${$route.params.id}`,
    createdAt: new Date,
    updatedAt: new Date,
    deletedAt: new Date

}
</script>

<template>
  <ImageDropzone />
</template>