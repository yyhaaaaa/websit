import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import article from '../views/article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'video',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/video.vue')
  },
  {
    path: '/note',
    name: 'note',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/note.vue')
  },
  {
    path: '/more',
    name: 'more',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/more.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: article
  }
]

const router = new VueRouter({
  routes
})

export default router
