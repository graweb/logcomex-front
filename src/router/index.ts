// Core
import { createRouter, createWebHistory } from 'vue-router';
// Stores
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
// Layouts
import DefaultLayout from '../layouts/DefaultLayout.vue';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        layout: DefaultLayout,
        requiresAuth: false
      },
      redirect: '/login',
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/Login.vue')
        }
      ]
    },
    {
      path: '/app',
      meta: {
        layout: AuthenticatedLayout,
        requiresAuth: true
      },
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
          meta: {
            title: "Dashboard"
          }
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/dashboard'
    }
  ]
})

// Middleware
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { isAuthenticated } = storeToRefs(authStore);

  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated.value) {
    // Se a rota requer autenticação e o usuário não está autenticado, redireciona para o login
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isAuthenticated.value) {
    // Se o usuário está autenticado e tenta acessar o login, redireciona para o dashboard
    next({ name: 'Dashboard' });
  } else {
    next();
  }
})

export default router;
