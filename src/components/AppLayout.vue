<script setup lang="ts">
import AppNavBar from "./AppNavBar.vue";
import AppHeader from "./AppHeader.vue";
</script>
<template>
  <AppHeader />
  <div class="flex h-[93vh] pt-10">
    <AppNavBar />
    <section class="overflow-auto ml-10">
      <transition>
        <RouterView />
      </transition>
    </section>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
