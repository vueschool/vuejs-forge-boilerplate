import { createRouter, createWebHistory } from "vue-router";

// this works with the vite plugin to support file based routing
import routes from "~pages";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
