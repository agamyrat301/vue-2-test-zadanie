import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue'; // Example component
import Login from '@/components/Login.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
