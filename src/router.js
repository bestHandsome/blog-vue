import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Notes from './views/Notes.vue'
import Works from './views/Works'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
        path: '/notes',
        name: 'notes',
        component: Notes
    },
  ]
})
