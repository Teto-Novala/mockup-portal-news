import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/businnes",
      name: "businnes",
      component: () => import("../views/BusinnesView.vue"),
    },
    {
      path: "/entertainment",
      name: "businnes",
      component: () => import("../views/EntertainmentView.vue"),
    },
  ],
});

export default router;
