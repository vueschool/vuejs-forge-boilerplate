<script setup lang="ts">
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { Popup as KPopup } from "@progress/kendo-vue-popup";
import { ref } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter, type RouteLocationRaw } from "vue-router";

const showTeamDropdown = ref(false);
const $router = useRouter();
const expanded = ref(true);
const selected = ref(-1);

const items = [
  {
    text: "Boards",
    icon: "k-i-layout-1-by-4",
    selected: true,
    data: {
      path: "/boards",
    },
  },
  {
    text: "Templates",
    icon: "k-i-delicious-box",
    selected: true,
    data: {
      path: "/templates",
    },
  },
  {
    text: "Settings",
    icon: "k-i-gear",
    selected: true,
    data: {
      path: "/settings",
    },
  },
  {
    text: "Collapse",
    icon: "k-i-arrow-60-left",
    selected: true,
    data: {
      path: "/collapse",
    },
  },
];

const onSelect = (event: any) => {
  console.log("selected", event, items[event.itemIndex].data);
  $router.push(items[event.itemIndex].data);
  selected.value = event.itemIndex;
};

const toggleTeams = () => {
  showTeamDropdown.value = !showTeamDropdown.value;
};
</script>

<template>
  <div class="w-screen h-screen overflow-auto flex flex-col">
    <div
      class="p-4 border-bottom border-2 flex justify-between"
      style="margin: -1px"
    >
      <img
        src="https://vuejsforge.com/images/logo.svg"
        width="150"
        class="max-w-none"
        alt="Vue.js Forge"
      />
      <div>
        <button ref="button" class="mr-5 text-[#ff6358]" @click="toggleTeams">
          <span class="k-icon k-i-ungroup"></span>&nbsp;&nbsp;My Team
        </button>

        <KPopup anchor="button" :show="showTeamDropdown" class="mt-5 w-48">
          <ul>
            <li class="px-5 py-2">Team 1</li>
            <li class="px-5 py-2">Team 2</li>
          </ul>
        </KPopup>

        <KButton
          rounded="full"
          shape="rectangle"
          icon="logout"
          theme-color="warning"
          >Logout</KButton
        >
      </div>
    </div>
    <Drawer
      class="flex-1"
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
  </div>
</template>
