import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import auth from './modules/auth'
import sandbox from './modules/sandbox'
import datadoc from './modules/data_doc'
import chatdoc from './modules/chat_doc'
import createindoc from './modules/create_in_doc'
import datalistindoc from './modules/data_list_in_doc'
import userparams from './modules/user_params'
import userlist from './modules/user_list'
import treeofinstructions from './modules/tree_of_instructions'
import organizationslist from './modules/organizations_list'
import kindlist from './modules/kind_list'
import stamplist from './modules/stamp_list'
import uploadfile from './modules/upload_file'
import validateindoc from './modules/validate_in_doc'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    auth,
    datadoc,
    sandbox,
    chatdoc,
    createindoc,
    datalistindoc,
    userparams,
    userlist,
    treeofinstructions,
    organizationslist,
    kindlist,
    stamplist,
    uploadfile,
    validateindoc
  },
  strict: debug
})
