import AboutView from '@/view/AboutView.vue';
import HomeView from '@/view/HomeView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about/:id', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
