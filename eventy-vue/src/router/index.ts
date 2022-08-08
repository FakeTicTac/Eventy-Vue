import { createRouter, createWebHistory } from 'vue-router'

// Import Of Route Components.
import Home from "@/views/Home.vue"

import Login from "@/views/Account/Login.vue";
import Signup from "@/views/Account/Signup.vue";


/**
 * Application Routes With Their Configurations.
 */
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router