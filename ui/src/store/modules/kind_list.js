/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  kindList: [{
    dss_name: 'Исходящий',
    r_object_id: '4534'
  },
  {
    dss_name: 'Входящий',
    r_object_id: '785745'
  }]
}

const getters = {
  getKindList: state => state.kindList
}

const mutations = {
  addKindList: (state, payload) => {
    state.kindList = payload
  }
}

export default {
  state,
  getters,
  mutations
}
