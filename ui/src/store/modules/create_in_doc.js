const state = { ddt_incoming: {
  dss_reg_number: '',
  dsdt_reg_date: null,
  dss_crsp_reg_number: '',
  dsdt_crsp_reg_date: null,
  dss_initial_reg_number: '',
  dsdt_initial_reg_date: null,
  dsi_number_of_page: 0,
  dss_crsp_name: '',
  dsid_crsp_org: '',
  // dss_adrs_name: '',
  dss_reg_name: '',
  dss_note: '',
  dsi_number_of_appendix: '',
  dss_description: '',
  dss_crsp_resolution: '',
  dsid_document_kind: '',
  dsid_stamp: '',
  dsc_content: ''
}
}
const getters = {
  getIncoming: state => state.ddt_incoming
}
const mutations = {
  addIncomingReg_number: (state, payload) => {
    state.ddt_incoming.dss_reg_number = payload.reg_number
  },
  addIncomingReg_date: (state, payload) => {
    state.ddt_incoming.dsdt_reg_date = payload.reg_date
  },
  addIncomingOut_number: (state, payload) => {
    state.ddt_incoming.dss_crsp_reg_number = payload.out_number
  },
  addIncomingOut_date: (state, payload) => {
    state.ddt_incoming.dsdt_crsp_reg_date = payload.out_date
  },
  addIncomingAnswer_doc: (state, payload) => {
    state.ddt_incoming.dss_initial_reg_number = payload.answer_doc
  },
  addIncomingAnswer_date: (state, payload) => {
    state.ddt_incoming.dsdt_initial_reg_date = payload.answer_date
  },
  addIncomingPages: (state, payload) => {
    state.ddt_incoming.dsi_number_of_page = payload.pages
  },
  addIncomingCreator_name: (state, payload) => {
    state.ddt_incoming.dss_crsp_name = payload.creator_name.name
  },
  addIncomingOrganization: (state, payload) => {
    state.ddt_incoming.dsid_crsp_org = payload.organizations
  },
  // addIncomingAddressee: (state, payload) => {
  //   state.ddt_incoming.dss_adrs_name = payload.addressee
  // },
  addIncomingType: (state, payload) => {
    state.ddt_incoming.dsid_document_kind = payload.type
  },
  addIncomingStatus: (state, payload) => {
    state.ddt_incoming.dsid_stamp = payload.status
  },
  addIncomingApplication: (state, payload) => {
    state.ddt_incoming.dss_note = payload.application
  },
  addIncomingDescription: (state, payload) => {
    state.ddt_incoming.dss_description = payload.description
  },
  addIncomingContent: (state, payload) => {
    state.ddt_incoming.dsc_content = 'fileKey:' + payload
  },
  addIncomingResolution: (state, payload) => {
    state.ddt_incoming.dss_crsp_resolution = payload.resolution
  },
  addIncomingAnnotation: (state, payload) => {
    state.ddt_incoming.dss_reg_name = payload.annotation
  },
  addIncomingOfAppendix: (state, payload) => {
    state.ddt_incoming.dsi_number_of_appendix = payload
  }
}
export default {
  state,
  getters,
  mutations
}
