import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import index from './pages/index/index.vue'
import city from './pages/city/city.vue'
import detail from './pages/detail/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/city',
      component: city
    },
    {
      path: '/detail/:id',
      component: detail
    }
  ],
  scrollBehavior (to, from, savedposition) {
    return { x: 0, y: 0 }
  }
})
