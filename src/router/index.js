import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/Collection.vue')
  },
  {
    path: '/record/:id',
    name: 'Record Details',
    component: () => import('../views/Record.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddRecord.vue')
  }
]

const router = new Router({
  routes
})

export default router
