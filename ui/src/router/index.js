import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/pages/ListDocument'
import Card from '@/components/pages/CardDocument'
import FormAuth from '@/components/pages/FormAuth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/:id',
      name: 'Card',
      component: Card
    },
    {
      path: '/',
      name: 'FormAuth',
      component: FormAuth
    }
  ],
  mode: 'history'
})
