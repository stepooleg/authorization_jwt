/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  organizationsList: [{
    dss_name: 'ООО "АйДи Технологии управления"',
    r_object_id: '4534'
  },
  {
    dss_name: 'ОАО МОЭСК',
    r_object_id: '785745'
  }]
}

const getters = {
  getOrganizationList: state => state.organizationsList
}

const mutations = {
  addOrganizationList: (state, payload) => {
    state.organizationsList = payload
  }
}

export default {
  state,
  getters,
  mutations
}
