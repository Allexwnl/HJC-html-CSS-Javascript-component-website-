import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('../views/documents.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../component-pages/Login/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../component-pages/Login/register.vue'),
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: () => import('../component-pages/suggestions/SuggestieView.vue'),
    },
    {
      path: '/GradientButtons',
      name: 'GradientButtons',
      component: () => import('../component-pages/buttons/GradientButtons.vue'),
    },
    {
      path: '/ButtonStyles',
      name: 'ButtonStyles',
      component: () => import('../component-pages/buttons/ButtonStyles.vue'),
    },
    {
      path: '/ButtonAnimation',
      name: 'ButtonAnimation',
      component: () => import('../component-pages/buttons/ButtonAnimation.vue'),
    },
    {
      path: '/FunctionButtons',
      name: 'FunctionButtons',
      component: () => import('../component-pages/buttons/ButtonFunctions.vue'),
    },
    {
      path: '/SideBars',
      name: 'SideBars',
      component: () => import('../component-pages/SideBars.vue'),
    },
    {
      path: '/DataTables',
      name: 'DataTables',
      component: () => import('../component-pages/DataTables.vue'),
    },
    {
      path: '/ImageCards',
      name: 'ImageCards',
      component: () => import('../component-pages/cards/ImageCards.vue'),
    },
  ],
})

export default router
