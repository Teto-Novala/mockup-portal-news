import IdBusinnesView from "@/views/businnes/id/IdBusinnesView.vue";
import IdEntertainmentView from "@/views/entertainment/id/IdEntertainmentView.vue";
import IdHealthView from "@/views/health/id/IdHealthView.vue";
import IdScienceView from "@/views/science/id/IdScienceView.vue";
import IdSportsView from "@/views/sports/id/IdSportsView.vue";
import IdTechnologyView from "@/views/technology/id/IdTechnologyView.vue";
import { createRouter, createWebHistory } from "vue-router";

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
      component: () => import("../views/businnes/BusinnesView.vue"),
    },
    {
      path: "/entertainment",
      name: "entertainment",
      component: () => import("../views/entertainment/EntertainmentView.vue"),
    },
    {
      path: "/health",
      name: "health",
      component: () => import("../views/health/HealthView.vue"),
    },
    {
      path: "/science",
      name: "science",
      component: () => import("../views/science/ScienceView.vue"),
    },
    {
      path: "/sports",
      name: "sports",
      component: () => import("../views/sports/SportsView.vue"),
    },
    {
      path: "/technology",
      name: "technology",
      component: () => import("../views/technology/TechnologyView.vue"),
    },
    {
      path: "/businnes/:id",
      name: "businnes-id",
      component: IdBusinnesView,
    },
    {
      path: "/entertainment/:id",
      name: "entertainment-id",
      component: IdEntertainmentView,
    },
    {
      path: "/health/:id",
      name: "health-id",
      component: IdHealthView,
    },
    {
      path: "/science/:id",
      name: "science-id",
      component: IdScienceView,
    },
    {
      path: "/sports/:id",
      name: "sports-id",
      component: IdSportsView,
    },
    {
      path: "/technology/:id",
      name: "technology-id",
      component: IdTechnologyView,
    },
  ],
});

export default router;
