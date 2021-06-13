import Vue from 'vue'
import VueRouter from 'vue-router'
import Appbar from "../components/Appbar";
import Home from '../views/Home.vue'
import Questions from '../views/CommonQuestions.vue'
import ComingSoon from '../views/ComingSoon.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      appBar: Appbar,
      default: Home,
    },

  },
  {
    path: '/about',
    name: 'About',
    components: {
      appBar: Appbar,
      default: About,
    },
  },
  {
    path: '/perquntas-frequentes',
    name: 'CommonQuestions',
    component: Questions
  },
  {
    path: '/em-breve',
    name: 'ComingSoon',
    component: ComingSoon
  },

]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash, behavior: 'smooth', }
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes
})

export default router
