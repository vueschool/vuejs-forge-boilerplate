<script setup lang="ts">
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter } from "vue-router";
import { computed, ref } from "vue";

const router = useRouter();

const expanded = ref(false);
const expandedIcon = computed(() =>
  expanded.value ? "k-i-arrow-chevron-left" : "k-i-arrow-chevron-right"
);
const items = computed(() => [
  {
    text: "Boards",
    icon: "k-i-set-column-position",
    selected: true,
    data: {
      path: "/",
    },
  },

  {
    text: "Templates",
    icon: "k-i-border-left",
    data: {
      path: "/templates",
    },
  },
  {
    text: "Settings",
    icon: "k-i-gear",
    data: {
      path: "/settings",
    },
  },
  {
    text: "Collapse",
    icon: expandedIcon.value,
    data: {
      action: () => (expanded.value = !expanded.value),
    },
  },
]);
function onSelect({ itemIndex }: { itemIndex: number }) {
  const item = items.value[itemIndex];
  if (item.data.path) router.push(item.data.path);
  if (typeof item.data.action === "function") item.data.action();
}
</script>
<template>
  <div class="p-2">
    <div
      :style="{
        width: !expanded ? '30px' : 'auto',
      }"
      class="w-[150px] k-drawer overflow-hidden"
    >
      <img
        src="https://vuejsforge.com/images/logo.svg"
        width="150"
        class="max-w-none"
        alt="Vue.js Forge"
      />
    </div>
  </div>
  <Drawer
    class="h-[90vh]"
    :expanded="expanded"
    position="start"
    mode="push"
    :mini="true"
    :items="items"
    @select="onSelect"
  >
    <DrawerContent>
      <div class="px-5">
        <router-view />
      </div>
    </DrawerContent>
  </Drawer>
</template>
<style>
html,
body,
#app,
.drawer-wrapper {
  height: 100%;
}
</style>
