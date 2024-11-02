/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/App.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/layouts/dashboard.vue'),
          children: [
            {
              path: 'home',
              name: 'DashboardHome',
              component: () => import('@/pages/dashboard/Index.vue')
            },
            {
              path: 'clients',
              name: 'Clients',
              component: () => import('@/pages/clients/Index.vue')
            },
            {
              path: 'activity',
              name: 'Activity',
              component: () => import('@/pages/activity/Index.vue')
            },
            {
              path: 'billing',
              name: 'Billing',
              component: () => import('@/pages/billing/Index.vue')
            },
            {
              path:'reports',
              name: 'Reports',
              component: () => import('@/pages/reports/Index.vue')
            },
            {
              path: 'notifications',
              name: 'Notifications',
              component: () => import('@/pages/notifications/Index.vue')
            },
            {

              path: 'configurations',
              name: 'Configurations',
              component: () => import('@/pages/configurations/Index.vue')
            },
            {
              path: 'user-management',
              name: 'UserManagement',
              component: () => import('@/pages/user-management/Index.vue')
            },
            {
              path: 'audit-trail',
              name: 'AuditTrail',
              component: () => import('@/pages/audit-trail/Index.vue')
            },
          ]
        }
      ]
    }
  ] //setupLayouts(routes),

})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
