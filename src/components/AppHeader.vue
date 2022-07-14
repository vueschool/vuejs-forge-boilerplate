<script setup lang="ts">
import { UserIcon } from "@heroicons/vue/solid";
import TrelloIcon from "@/assets/Icons/Trello.vue";
</script>
<template>
  <header
    class="h-[7vh] bg-[#0369A7] text-white px-6 py-1 flex justify-between text-2xl items-center font-sand font-extrabold tracking-wider"
  >
    <div class="cursor-pointer">
      <span
        class="rounded transition duration-300 hover:bg-[#5F98C2] px-2 py-0.5"
      >
        <TrelloIcon class="h-6 w-6 inline -mt-1" />
        Trello</span
      >
    </div>
    <div class="">
      <UserIcon class="h-6 w-6" />
    </div>
  </header>
</template>
