import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Resume from './views/Resume.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
  ]
})
