<script setup lang="ts">

import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter, type RouteLocationRaw } from 'vue-router';
import { ref } from 'vue';


const $router = useRouter()
const expanded = ref(true)
const selected = ref(-1)

const items = [{
    text: "Boards",
    icon: "k-i-layout-1-by-4",
    selected: true,
    data: {
        path: "/boards",
    },
}, {
    text: "Templates",
    icon: "k-i-delicious-box",
    selected: true,
    data: {
        path: "/templates",
    },
}, {
    text: "Settings",
    icon: "k-i-gear",
    selected: true,
    data: {
        path: "/settings",
    },
}, {
    text: "Collapse",
    icon: "k-i-arrow-60-left",
    selected: true,
    data: {
        path: "/collapse",
    },
}]

const onSelect = (event: any) => {
    console.log('selected', event, items[event.itemIndex].data)
    $router.push(items[event.itemIndex].data)
    selected.value = event.itemIndex
}
</script>

<template>
<Drawer
      :expanded="expanded"
      position="start"
      mode="push"
      :mini="true"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selected,
        }))
      "
      @select="onSelect"
    >
      <DrawerContent>
        <RouterView />
      </DrawerContent>
    </Drawer>
</template>
