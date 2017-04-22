import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/Home'
import Menu from '@/components/page/Menu'
import Shop from '@/components/page/Shop'
import Mine from '@/components/page/Mine'
import details from '@/components/page/details'


Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/details/:id',
      name: 'details',
      component: details
    }
    
  ]
})
