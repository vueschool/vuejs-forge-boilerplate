<template>
  <nav>
    <img src="https://vuejsforge.com/images/logo.svg" alt="Logo" />
    <div class="text-right">
      <kendo-menu :items="items" />
    </div>
  </nav>
</template>

<script>
import { Menu } from "@progress/kendo-vue-layout";

export default {
  components: {
    "kendo-menu": Menu,
  },
  data() {
    return {
      items: [
        {
          text: "My Team",
          icon: "ungroup",
          items: [
            { text: "Team 1" },
            {
              text: "Team 2",
            },
          ],
        },
        {
          text: "Login",
          cssStyle: {
            backgroundColor: "#666666",
            borderRadius: "4px",
            padding: "0 3px",
            color: "#FFFFFF"
          },
        },
      ],
    };
  },
};
</script>
<style>
nav {
  display: flex;
  justify-content: space-between;
  padding: 16px 17px;
  border-bottom: 1px solid #e5e7eb;
}

nav img {
  max-height: 26px;
  max-width: 150px;
}
</style>
