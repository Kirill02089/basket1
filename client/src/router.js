import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Broadcast from './views/Broadcast'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/broadcast/:id',
      name: 'broadcast',
      component: Broadcast
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
