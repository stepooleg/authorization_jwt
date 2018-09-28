/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  stampList: [{
    dss_name: 'Одобренно',
    r_object_id: '4534'
  },
  {
    dss_name: 'Отклонено',
    r_object_id: '785745'
  }]
}

const getters = {
  getStampList: state => state.stampList
}

const mutations = {
  addStampList: (state, payload) => {
    state.stampList = payload
  }
}

export default {
  state,
  getters,
  mutations
}
