import { authService } from '../services/auth-service.js';

export const authGuard = (to, from, next) => {
  const isLoggedIn = authService.isAuthenticated();
  if (to.meta.auth && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
};