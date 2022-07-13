<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
router.push('/boards');
</script>
<template>
  <div class="flex justify-center items-center h-[80vh]">
    <div class="text-center">
      <img
        class="block"
        src="https://vuejsforge.com/images/logo.svg"
        alt="Vue.js Forge"
      />
      <AppButton class="block">
        <a href="https://vi.to/hubs/vuejs-forge/" target="_blank"
          >Get Started</a
        >
      </AppButton>
    </div>
  </div>
</template>
