import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Short from './pages/Short.vue';
import Index from './pages/Index.vue';

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home
  },
  
  {
    path: "/short",
    name: 'ShortLink',
    component: Short
  },
  {
    path: "/lists",
    name: 'Index',
    component: Index
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;