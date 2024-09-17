import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create-todo',
      name: 'create-todo',
      component: () => import('@/views/CreateTodoView.vue')
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('@/views/TodoDetailView.vue'),
      props: true
    }
  ]
})

export default router
