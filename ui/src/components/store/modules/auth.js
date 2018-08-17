/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
// import { USER_REQUEST } from '../actions/user'
const axios = require('axios')

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    console.log(user.username)
    commit(AUTH_REQUEST)
    console.log(user.password)
    let url = 'http://localhost:8080/ticketservice-2.0.0/auth?username=dhdfgjhjh&password=1231'
    axios(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
//        withCredentials: true,
      credentials: 'same-origin'
    })
      .then(resp => {
        console.log(resp.token)
       // localStorage.setItem('user-token', resp.token)
        // Here set the header of your ajax library to the token value.
        // example with axios
       // this.axios.defaults.headers.common['Authorization'] = resp.token
        console.log(resp.token)
        // commit(AUTH_SUCCESS, resp)
        // dispatch(USER_REQUEST)
        // resolve(resp)
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
        localStorage.removeItem('user-token')
      })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('user-token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
