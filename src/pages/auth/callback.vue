<script setup lang="ts">
import { useAuthUserStore } from "@/stores/AuthUserStore";
import { useRouter } from "vue-router";
const auth = useAuthUserStore();
const router = useRouter();

auth.handleAuthentication().then(async () => {
  await auth.initUser();
  router.push("/");
});
</script>
<template>
  <AppLoader :overlay="true" />
</template>
