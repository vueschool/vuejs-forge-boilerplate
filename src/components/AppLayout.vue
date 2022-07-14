<script setup lang="ts"></script>
<template>
  <header
    class="h-[7vh] bg-[#0369A7] text-white pl-6 py-1 flex justify-between text-2xl items-center font-sans"
  >
    <div class="">
      <!-- logo here -->
      <span
        class="rounded transition duration-300 hover:bg-blue-900 px-2 py-0.5"
        >Trello</span
      >
    </div>
    <div class="mr-6">Profile</div>
  </header>
  <div class="flex h-[93vh]">
    <navbar class="min-w-[18%] ml-[12%]">
      <ul class="mt-10 flex flex-col gap-2">
        <router-link to="/" v-slot="{ isActive }" ref="myHoverableElement">
          <li :class="isActive ? 'router-link-active' : 'hover:bg-[#E6E9ED]'">
            Boards
          </li>
        </router-link>

        <router-link to="/settings" v-slot="{ isActive }">
          <li :class="isActive ? 'router-link-active' : 'hover:bg-[#E6E9ED]'">
            Settings
          </li>
        </router-link>
      </ul>
    </navbar>
    <section class="overflow-auto">
      <RouterView />
    </section>
  </div>
</template>
<style>
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
