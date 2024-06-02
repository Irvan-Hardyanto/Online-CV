import { createWebHistory, createRouter } from "vue-router";
import DashboardPage from "../components/DashboardPage.vue";
import AdminPage from "../components/AdminPage.vue";

const routes = [
  { path: "/", component: DashboardPage },
  { path: "/admin", component: AdminPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
