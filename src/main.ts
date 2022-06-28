import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";

/* prettier-ignore */
createApp(App)
  .use(router)
  .use(createPinia())
  .mount("#app");
