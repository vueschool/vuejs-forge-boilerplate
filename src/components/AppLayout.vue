<script setup lang="ts"></script>
<template>
  <header class="h-[5vh] bg-[#0d1c24] text-white">Trello</header>
  <div class="flex h-[95vh]">
    <navbar class="w-[18%] bg-[#0d1c24]">
      <ul class="text-white">
        <li>
          <router-link to="/">Boards</router-link>
        </li>
        <li>
          <router-link to="/settings">Settings</router-link>
        </li>
      </ul>
    </navbar>
    <section class="w-[82%]">
      <RouterView />
    </section>
  </div>
</template>
