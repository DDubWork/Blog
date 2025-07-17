import Blog from '../pages/BlogPage.vue'
import Home from '../pages/BaseHomepage.vue'
import Admin from '../pages/AdminPanel.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Blog', component: Blog },
  { path: '/home', name: 'Home', component: Home },
  { path: '/d', name: 'Admin', component: Admin },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
