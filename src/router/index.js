import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PortDoco from '../views/portfolio/PortDoco.vue'
import PortBinmas from '../views/portfolio/PortBinmas.vue'
import PortKoperasi from '../views/portfolio/PortKoperasi.vue'
import PortPNBP from '../views/portfolio/PortPnbp.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path: '/docotel',
    name: 'portDoco',
    component: PortDoco
  },
  {
    path: '/binmas',
    name: 'portBinmas',
    component: PortBinmas
  },
  {
    path: '/pnbp',
    name: 'portPNBP',
    component: PortPNBP
  },
  {
    path: '/koperasi',
    name: 'portKoperasi',
    component: PortKoperasi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
