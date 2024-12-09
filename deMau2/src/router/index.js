import { createRouter, createWebHistory } from 'vue-router';
import AutherList from '@/components/AutherList.vue';

const routes = [
  { path: '/tac-gia', component: AutherList },
  { path: '/tac-gia/add', component: () => import('@/components/AutherForm.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;