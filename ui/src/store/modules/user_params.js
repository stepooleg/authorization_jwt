/**
 * Created by StepanenkoOV on 24.09.2018.
 */
const state = { userParams: '', showTaskBar: false }

const mutations = {
  globalFont: (state, payload) => {
    state.userParams = payload
  },
  globalshowTaskBar: (state, payload) => {
    state.showTaskBar = payload
  }
}

const getters = {
  getFont: state => state.userParams,
  getglobalshowTaskBar: state => state.showTaskBar
}
export default {
  state,
  getters,
  mutations
}
