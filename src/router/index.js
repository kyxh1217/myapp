import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Camera from '../views/Camera.vue';
import OpenInApp from '../views/OpenInApp.vue';
import Login from '../views/login/Login.vue';
import CustHome from '../views/customer/CustHome.vue';
import CustAdd from '../views/customer/CustAdd.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/app/home',
    alias: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/app/camera',
    name: 'Camera',
    component: Camera,
  },
  {
    path: '/app/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/openInApp',
    name: 'OpenInApp',
    component: OpenInApp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cust/home',
    name: 'CustHome',
    component: CustHome,
  },
  {
    path: '/cust/add',
    name: 'CustAdd',
    component: CustAdd,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
