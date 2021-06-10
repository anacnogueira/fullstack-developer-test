import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Register
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Home
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// default router
