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
    redirect: '/organiserRequests',
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
  {
    path: '/organiserReservation',
    name: 'organiserReservation',
    component: () => import('../Organizer/OrganiserReservation.vue')
  },
  {
    path: '/organiserReservationInfo',
    name: 'organiserReservationInfo',
    component: () => import('../Organizer/OrganiserReservationInfo.vue')
  },
  {
    path: '/organiserRequestInfo',
    name: 'organiserRequestInfo',
    component: () => import('../Organizer/OrganiserRequestInfo.vue')
  },

  {
    path: '/studentMain',
    redirect: '/studentGames',
    name: 'studentMain',
    component: () => import('../Student/StudentMain.vue')
  },
  {
    path: '/studentGames',
    name: 'studentGames',
    component: () => import('../Student/StudentGames.vue')
  },
  {
    path: '/studentInfo',
    name: 'studentInfo',
    component: () => import('../Student/StudentInfo.vue')
  },
  {
    path: '/studentChangePass',
    name: 'studentChangePass',
    component: () => import('../Student/StudentChangePass.vue')
  },
  {
    path: '/studentReqest',
    name: 'studentReqest',
    component: () => import('../Student/StudentRequest.vue')
  },
  {
    path: '/kalemegdan',
    name: 'kalemegdan',
    component: () => import('../Student/Kalemegdan.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
