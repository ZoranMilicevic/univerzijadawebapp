import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login_Register/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Login_Register/Register.vue')
  },
  {
    path: '/organizerMain',
    name: 'organizerMain',
    component: () => import('../Organizer/OrganizerMain.vue')
  },
  {
    path: '/organiserChangePass',
    name: 'organiserChangePass',
    component: () => import('../Organizer/OrganiserChangePass.vue')
  },
  {
    path: '/organiserInformation',
    name: 'organiserInformation',
    component: () => import('../Organizer/OrganiserInformation.vue')
  },
  {
    path: '/organiserRequests',
    name: 'organiserRequests',
    component: () => import('../Organizer/OrganiserRequests.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
