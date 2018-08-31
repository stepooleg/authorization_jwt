import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import sandbox from './modules/sandbox'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
    sandbox
  },
  strict: debug
})
