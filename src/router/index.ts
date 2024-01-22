/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // base
  {
    name: "root",
    path: "/",
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("@/pages/home.vue"),
      },
      {
        name: "test",
        path: "/test",
        component: () => import("@/pages/test.vue"),
      },
      {
        name: "test2",
        path: "/test2",
        component: () => import("@/pages/test2.vue"),
      },
      {
        name: "test3",
        path: "/test3",
        component: () => import("@/pages/test3.vue"),
      },
    ],
  },

  // redirects
  {
    path: "",
    redirect: {name: "home"}
  },

  // error
  {
    name: "notFound",
    path: "/:pathmatch(.*)*",
    component: () => import("@/pages/notfound.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
