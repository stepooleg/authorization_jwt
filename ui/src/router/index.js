import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/pages/ListDocument'
import Card from '@/components/pages/CardDocument'
import FormAuth from '@/components/pages/FormAuth'
import CreateIncomingDocument from '@/components/pages/CreateIncomingDocument'
import ListIncomingDocument from '@/components/pages/ListIncomingDocument'
import Admin from '@/components/pages/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/entity/list',
      name: 'ListIncomingDocument',
      component: ListIncomingDocument
    },
    {
      path: '/ddt_incoming/create',
      name: 'CreateIncomingDocument',
      component: CreateIncomingDocument
    },
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
