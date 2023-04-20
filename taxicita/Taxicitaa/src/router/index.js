import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { authGuard } from './router-guard.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/community',
      name: 'community',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CommunityView.vue'),
      meta: { auth: true },
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestView.vue'),
      meta: { auth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: { auth: true },
      
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/SignInView.vue')
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/accepted/:id',
      name: 'acceptedRequest',
      component: () => import('../views/acceptedRequestView.vue')
    }
  ]
})

router.beforeEach(authGuard);

export default router
