import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/fixtures",
    name: "fixtures",
    component: () =>
      import(/* webpackChunkName: "fixtures" */ "../views/FixturesView.vue"),
  },
  {
    path: "/results",
    name: "results",
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/ResultsView.vue"),
  },
  {
    path: "/standings",
    name: "standings",
    component: () =>
      import(/* webpackChunkName: "standings" */ "../views/StandingsView.vue"),
  },
  {
    path: "/scorers",
    name: "scorers",
    component: () =>
      import(/* webpackChunkName: "scorers" */ "../views/ScorersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
