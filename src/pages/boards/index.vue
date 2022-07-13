<template>
    <div class="p-5">
        <h1>Boards</h1>
        <div class="flex flex-wrap">
            <div v-for="board in boards" :key="board.id" @click="toBoard(board)" class="w-72 m-5 cursor-pointer border rounded border-transparent hover:border-gray-300">
                <img :src="`https://via.placeholder.com/600x400?text=${board.title}`" />
                <div class="p-2">{{ board.title }}</div>
            </div>

            <div @click="createBoard()" class="w-72 m-5 cursor-pointer border rounded border-transparent hover:border-gray-300 flex items-center justify-center">
                New Board +
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Board } from '@/types';

import { useRouter, type RouteLocationRaw } from 'vue-router';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useAlerts } from '@/stores/alerts';


const $router = useRouter()

const $alerts = useAlerts()

const boards: Ref<Board[]> = ref([
    {
        id: 'board-1',
        title: 'Board 1',
        order: '1',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
    },
    {
        id: 'board-2',
        title: 'Board 2',
        order: '2',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
    },
    {
        id: 'board-3',
        title: 'Board 3',
        order: '3',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
    }
])

const toBoard = (board: Board) => $router.push(`/boards/${board.id}`)


const createBoard = () => {
    let count = boards.value.length + 1

    const board: Board = {
        id: `board-${count}`,
        title: `Board ${count}`,
        order: `${count}`,
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: new Date
    }

    boards.value.push(board)

    $alerts.success(`Board Created: ${board.title}`)
}
</script>