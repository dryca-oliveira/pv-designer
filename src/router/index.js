import Vue from 'vue'
import VueRouter from 'vue-router'
import Appbar from "../components/Appbar";
import Home from '../views/Home.vue'
import Questions from '../views/CommonQuestions.vue'
import ComingSoon from '../views/ComingSoon.vue'
import About from '../views/About.vue'
import Imo from '../views/Imo.vue'
import Bojack from '../views/Bojack.vue'
import Coronavirus from '../views/CoronaVirus.vue'


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
    path: '/sobre-mim',
    name: 'About',
    components: {
      appBar: Appbar,
      default: About,
    },
  },
  {
    path: '/perguntas-frequentes',
    name: 'CommonQuestions',
    components: {
      appBar: Appbar,
      default: Questions,
    },

  },
  {
    path: '/portifolio-imo',
    name: 'Imo',
    component: Imo
  },
  {
    path: '/portifolio-bojack',
    name: 'Bojack',
    components: {
      appBar: Appbar,
      default: Bojack,
    },
  },
  {
    path: '/portifolio-coronavirus',
    name: 'Coronavirus',
    components: {
      appBar: Appbar,
      default: Coronavirus,
    },
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
