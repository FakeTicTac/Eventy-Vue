import { createRouter, createWebHistory } from 'vue-router'

/**
 * Application Routes With Their Configurations.
 */
const routes = [
  {
    path: '',
    name: '',
    component: {}
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router