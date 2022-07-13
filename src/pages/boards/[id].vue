<script setup lang="ts">
import type { Board } from '@/types';
import { useRoute } from 'vue-router';

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
    <div>
        <h1>Board Page {{board.id}}</h1>
    </div>
</template>