import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '@/views/MealsByName.vue';
import MealsByLetter from '@/views/MealsByLetter.vue';
import MealDetail from '@/views/MealDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/by-name/:name?',
    name: 'byName',
    component: MealsByName,
  },
  {
    path: '/by-letter/:letter?',
    name: 'byLetter',
    component: MealsByLetter,
  },
  {
    path: '/meal/:id',
    name: 'mealDetail',
    component: MealDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
