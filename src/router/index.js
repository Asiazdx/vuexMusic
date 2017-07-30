import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import popular from '@/pages/popular'
import collection from '@/pages/collection'
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
