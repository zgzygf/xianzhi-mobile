import Vue from 'vue'
import Router from 'vue-router'
import test from '@/pages/test'
import home from '@/pages/home'
import login from '@/pages/login/login'
import zclogin from '@/pages/login/zclogin'
import order from '@/pages/ordergood/order'
import orderstatus from '@/pages/ordergood/orderstatus'
import index from '@/pages/index/index'
import inaddress from '@/pages/index/inaddress'
import moreaddress from '@/pages/index/moreaddress'
import myaddress from '@/pages/index/myaddress'
import faiedaddress from '@/pages/index/faiedaddress'
import indexsearch from '@/pages/index/indexsearch'
import saomiao from '@/pages/index/saomiao'
import orderlist from '@/pages/ordergood/orderlist'
import classify from '@/pages/classify/classify'
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
    {
      path: '/inaddress',
      name: 'inaddress',
      component: inaddress
    },
    {
      path: '/moreaddress',
      name: 'moreaddress',
      component: moreaddress
    },
    {
      path: '/myaddress',
      name: 'myaddress',
      component: myaddress
    },
    {
      path: '/faiedaddress',
      name: 'faiedaddress',
      component: faiedaddress
    },
    {
      path: '/indexsearch',
      name: 'indexsearch',
      component: indexsearch
    },
    {
      path: '/saomiao',
      name: 'saomiao',
      component: saomiao
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      component: orderlist
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    }
  ],
  mode:'history'
})
