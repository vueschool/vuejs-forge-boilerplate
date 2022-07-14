<script setup lang="ts">
import { MenuAlt3Icon, CogIcon } from "@heroicons/vue/solid";
</script>

<template>
  <navbar class="min-w-[18%] ml-[12%]">
    <ul class="flex flex-col gap-2">
      <router-link to="/" v-slot="{ isActive }" class="group">
        <li :class="isActive ? 'router-link-active' : 'hover:bg-[#E6E9ED]'">
          <MenuAlt3Icon
            class="inline h-5 w-5 mr-2 -rotate-90"
            :class="isActive ? 'group-hover:animate-pulse' : ''"
          />Boards
        </li>
      </router-link>

      <router-link to="/settings" v-slot="{ isActive }" class="group">
        <li :class="isActive ? 'router-link-active' : 'hover:bg-[#E6E9ED]'">
          <CogIcon
            class="inline h-5 w-5 mr-2"
            :class="isActive ? 'group-hover:animate-spin-slow' : ''"
          />Settings
        </li>
      </router-link>
    </ul>
  </navbar>
</template>
<style scoped>
li {
  color: #202d4c;
  font-weight: 700;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
  border-radius: 0.25rem;
}

a {
  border-radius: 0.25rem;
}

.hovered {
  background-color: #c7e8f9 !important;
}

.router-link-active {
  color: #0369a7 !important;
  background-color: #e4f0f5 !important;
}
</style>
