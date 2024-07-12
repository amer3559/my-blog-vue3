import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      visibale: true,
      layout: "DefaultLayout",
    },
  },
  {
    path: "/landing-page",
    name: "LandingPage",
    component: () => import("@/views/LandingPage.vue"),
    meta: {
      title: "Posts",
      visibale: true,
      layout: "DefaultLayout",
    },
  },
  {
    path: "/dashboard-page",
    name: "DashboardPage",
    component: () => import("@/views/DashboardPage.vue"),
    meta: {
      title: "Dashboard",
      visibale: true,
      layout: "AuthLayout",
    },
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/TestView.vue"),
    meta: {
      title: "Test",
      visibale: true,
      layout: "DefaultLayout",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFoundView.vue"),
    meta: {
      title: "NotFound",
      visibale: false,
      layout: "DefaultLayout",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | My Blog`;
  next();
});

export default router;
