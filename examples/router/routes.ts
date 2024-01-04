import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/accordion'
    },
    {
      path: '/accordion',
      component: () => import('../views/Accordion.vue')
    },
    {
      path: '/buttons',
      component: () => import('../views/Buttons.vue')
    },
    {
      path: '/inputs',
      component: () => import('../views/InputsView.vue')
    },
    {
      path: '/notify',
      component: () => import('../views/NotifyView.vue')
    },
    {
      path: '/confirm',
      component: () => import('../views/ConfirmView.vue')
    },
    {
      path: '/dropdown',
      component: () => import('../views/DropdownView.vue')
    },
    {
      path: '/chips',
      component: () => import('../views/ChipsView.vue')
    },
  ]
})

export default router
