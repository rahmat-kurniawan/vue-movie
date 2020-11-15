import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/component",
    name: "Component",
    component: () => import("../views/Component.vue"),
  },
  {
    path: "/movie",
    name: "Movie",
    component: () => import("../views/Movie.vue"),
  },
  {
    path: "/toast",
    name: "Toast",
    component: () => import("../views/Toast.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
