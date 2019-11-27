import Vue from 'vue'
import Router from 'vue-router'
import VModal from 'vue-js-modal'

import Top from '@/components/Top'
import Aboutme from '@/components/Aboutme'
import Skills from '@/components/Skills'
import Works from '@/components/Works'

Vue.use(Router)
Vue.use(VModal)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },

    {
      path: '/Aboutme',
      component: Aboutme
    },

    {
      path: '/Skills',
      component: Skills
    },

    {
      path: '/Works',
      component: Works
    }

  ]
})
