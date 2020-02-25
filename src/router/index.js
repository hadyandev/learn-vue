import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("@/views/Friends.vue")
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("@/views/Blogs.vue")
  },
  {
    path: "/profile/:friend",
    name: "Profile",
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
