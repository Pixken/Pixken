import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '@/views/MSite'
import Search from '@/views/Search'
import Order from '@/views/Order'
import Profile from '@/views/Profile'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
