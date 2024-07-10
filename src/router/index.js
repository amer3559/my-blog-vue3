import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/landing-page",
    name: "LandingPage",
    component: import("@/views/LandingPage.vue"),
  },
  {
    path: "/dashboard-page",
    name: "DashboardPage",
    component: import("@/views/DashboardPage.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
