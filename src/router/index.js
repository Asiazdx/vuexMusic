import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import collection from '@/pages/collection'
import popular from '@/pages/popular'
import classical from '@/pages/classical'
import light from '@/pages/light'
import radio from '@/pages/radio'
import user from '@/pages/user'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'popular',
          component: popular
        },
        {
          path:'classical',
          component:classical,
        },
        {
          path:'light',
          component:light,
        },
        {
          path:'radio',
          component:radio,
        }
      ]
    },
    {
      path:'/collection',
      name:'collection',
      component:collection
    },
    {
      path:'/user',
      name:'user',
      component:user
    }
  ]
})
