import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import AboutLayout from '@/layouts/AboutLayout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      // layout: 'Main',
      componentLayout: MainLayout,
    },
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      // layout: 'About',
      componentLayout: AboutLayout,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
