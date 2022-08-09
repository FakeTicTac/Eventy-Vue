import { createRouter, createWebHistory } from 'vue-router'

// Import Of Route Components.
import Home from "@/views/Home.vue"

import Login from "@/views/Account/Login.vue";
import Signup from "@/views/Account/Signup.vue";

import MyEvents from "@/views/event/MyEvents.vue";
import EventOverview from "@/views/event/EventOverview.vue";
import EventManagement from "@/views/event/EventManagement.vue";

import NotFound from '@/views/NotFound.vue';


/**
 * Application Routes With Their Configurations.
 */
const routes = [

  // Basic Routes Registration.
  {
    path: '/',
    name: 'home',
    component: Home
  },


  // Account Related Routes Registration.
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


  // Event Related Routes Registration.
  {
    path: '/manage-event/:id',
    name: 'event-management',
    component: EventManagement,
    props: true
  },
  {
    path: '/event/:id',
    name: 'event-overview',
    component: EventOverview,
    props: true
  },
  {
    path: '/myevents',
    name: 'myevents',
    component: MyEvents,
  },


  // 404 Not Found Route Registration.
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router