import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post/:slug',
    name: 'post',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "post" */ './views/Post.vue')
  },
  {
    path: '*',
    component: () => import( /* webpackChunkName: "error" */ './views/Error.vue')
  }
]



export default new Router({
  routes,
})