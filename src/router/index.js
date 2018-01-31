import Vue from 'vue'
import Router from 'vue-router'
import test from '@/pages/test'
import home from '@/pages/home'
import login from '@/pages/login/login'
import zclogin from '@/pages/login/zclogin'
import order from '@/pages/ordergood/order'
import orderstatus from '@/pages/ordergood/orderstatus'
import index from '@/pages/index/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/zclogin',
      name: 'zclogin',
      component: zclogin,
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderstatus',
      name: 'orderstatus',
      component: orderstatus
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
  ],
  mode:'history'
})
