import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import sandbox from './modules/sandbox'
import datadoc from './modules/dataDoc'
import chatdoc from './modules/chatDoc'
import createindoc from './modules/createinDoc'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
    datadoc,
    sandbox,
    chatdoc,
    createindoc

  },
  strict: debug
})
