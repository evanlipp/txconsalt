import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "main",
    path: "/",
    component: () => import("@/views/MainView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
