/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  filekey: ''
}

const getters = {
  getFileKey: state => state.filekey
}

const mutations = {
  addFileKey: (state, payload) => {
    state.filekey = payload
  }
}

export default {
  state,
  getters,
  mutations
}
