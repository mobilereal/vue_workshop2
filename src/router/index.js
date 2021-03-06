import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Student from '@/components/Student.vue'
import studenthw from '@/components/Student.vue'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'



import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from "axios"
import VueAxios from "vue-axios"

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

Vue.use(axios, VueAxios)

const routes = [
  {
    path: '/',
    name: 'Student',
    component: Student
  },
  {
    path: '/',
    name: 'Studenthw',
    component: studenthw
  },
  {
    path: '/Page1/:id/:Fname/:Lname/:gender/:lv',
    name: 'Page1',
    component: Page1

  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

