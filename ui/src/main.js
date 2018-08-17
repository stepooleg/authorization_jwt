// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import store from './components/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import TopNavbar from './components/navbars/Top-navbar'
import LeftSidebar from './components/navbars/Left-sidebar'
import BtnNewDoc from './components/buttons/Btn-new-document'
import LeftAccordionMenu from './components/navbars/Menu-left-accordeon'
import LeftBottomAccordionMenu from './components/navbars/Menu-left-accordeon-journal'
import NavTabs from './components/navbars/Nav-tabs'
import DocFilter from './components/filter/Document-filter'
import PaginatorBot from './components/pagination/Paginator'
import TableDoc from './components/tables/TableDoc'
import TaskBar from './components/navbars/Task-bar'
import CentralDocumentBar from './components/navbars/Document-central-bar'
import PropertiDocumentBar from './components/navbars/Document-properti-bar'
import TableStatusDoc from './components/tables/table-status-doc'
import ActionsDocument from './components/doc_elements/Actions-document'
import BtnConnectedDocument from './components/buttons/Btn-connected-document'
import ToggleBtnLine from './components/buttons/Btn-toggle-line'
import DocumentFrame from './components/doc_elements/Document-frame'
const moment = require('moment')
require('moment/locale/ru')

Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(require('vue-moment'), {moment})
Vue.component('top-navbar', TopNavbar)
Vue.component('left-sidebar', LeftSidebar)
Vue.component('btn-new-document', BtnNewDoc)
Vue.component('left-accordeon-menu', LeftAccordionMenu)
Vue.component('left-bottom-accordeon-menu', LeftBottomAccordionMenu)
Vue.component('nav-tabs', NavTabs)
Vue.component('doc-filter', DocFilter)
Vue.component('paginator-bot', PaginatorBot)
Vue.component('table-doc', TableDoc)
Vue.component('task-bar', TaskBar)
Vue.component('central-document-bar', CentralDocumentBar)
Vue.component('properti-document-bar', PropertiDocumentBar)
Vue.component('table-status-doc', TableStatusDoc)
Vue.component('actions-document', ActionsDocument)
Vue.component('btn-connected-document', BtnConnectedDocument)
Vue.component('toggle-btn-line', ToggleBtnLine)
Vue.component('document-frame', DocumentFrame)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})