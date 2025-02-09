import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Users from '../views/Users.vue';
import UserDetail from '@/views/UserDetail.vue';
import NotFound from '@/views/NotFound.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import ProductCategoriesView from '@/views/ProductCategoriesView.vue';
import PersonalView from '@/views/PersonalView.vue';
import CustomFooterView from '@/views/CustomFooterView.vue';
import AboutView from '@/views/AboutView.vue';
import AboutMenuView from '@/views/AboutMenuView.vue';
import UserMenuView from '@/views/UserMenuView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // redirect: '/products',
    // redirect: {
    //   name: 'products',
    // },
    // redirect: to => {
    //   console.log(to);
    //   return {
    //     path: '/products',
    //   };
    // },
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/:patchMatch(.*)*',
    name: 'notfound',
    component: NotFound,
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/users',
    name: 'users',
    alias: ['/peoples'],
    components: {
      default: Users,
      CustomFooterView,
      CustomMenuView: UserMenuView,
    },
    meta: {
      isPublic: true,
    },
  },
  {
    path: '/users/:userId(\\d+)+',
    name: 'userDetail',
    component: UserDetail,
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    beforeEnter: (to, from) => {
      return true;
    },
    meta: {
      isPublic: true,
      layoutName: 'CustomLayout',
    },
  },
  {
    path: '/products/:Id',
    name: 'productDetail',
    component: ProductDetailView,
    children: [
      {
        path: 'categories',
        component: ProductCategoriesView,
      },
      {
        path: 'personal',
        component: PersonalView,
      },
    ],
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/about/:custom?',
    name: 'about',
    components: {
      default: AboutView,
      CustomMenuView: AboutMenuView,
    },
    meta: {
      isPublic: false,
    },
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('@/views/Information.vue'),
    meta: {
      isPublic: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  sensitive: true,
  scrollBehavior(to, from, savedPosition) {
    console.log(to);
    console.log(from);
    console.log(savedPosition);
    return new Promise(resolve => {
      setTimeout(() => {
        if (savedPosition) {
          resolve({ left: 0, top: savedPosition.top });
        } else {
          resolve({ left: 0, top: 700 });
        }
      });
    });
  },
});
router.beforeEach((to, from) => {
  console.log('Each', to, from);
  if (to.meta.isPublic) {
    return true;
  } else {
    return { name: 'home' };
  }
});

export default router;
