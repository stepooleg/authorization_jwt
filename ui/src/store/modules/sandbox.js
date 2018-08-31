const state = { positionView: false }

const mutations = {
  rew: (state) => {
    state.positionView = !state.positionView
  }
}

const getters = {
  readStatus: state => state.positionView
}
export default {
  state,
  getters,
  mutations
}
