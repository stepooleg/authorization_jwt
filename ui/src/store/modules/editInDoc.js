const state = { ddt_incoming: {
  r_object_id: '0000000000001111',
  dss_reg_number: 'ИСХ-01',
  dsdt_reg_date: '20.01.2017 23:01:01',
  dss_crsp_reg_number: 'ИСХ-010',
  dsdt_crsp_reg_date: '20.01.2017 23:01:01',
  dss_initial_reg_number: 'ВХ-014',
  dsdt_initial_reg_date: '23.01.2017 20:01:01',
  dsi_number_of_page: '2',
  dss_crsp_name: 'Егоров Михаил Александрович',
  dsid_crsp_org: '00000000000000l0',
  dss_adrs_name: ['name1','name2','name3'],
  dss_reg_name: 'IvanovII',
  dss_note: 'Примечание',
  dsi_number_of_appendix: '5',
  dss_description: 'О внедрении системы документооборота',
  dsc_content: 'Содержание документа',
  dss_crsp_resolution: 'Утверждаю',
  dsid_document_kind: '00000000000000kZ',
  dsid_stamp: '00000000000000kY'
}
}
const getters = {
  getIncomingOne: state => state.ddt_incoming
}
const mutations = {
  addIncomingOneDoc: (state, payload) => {
    state.ddt_incoming.r_object_id = payload.r_object_id
    state.ddt_incoming.dss_reg_number = payload.dss_reg_number
    state.ddt_incoming.dsdt_reg_date = payload.dsdt_reg_date
    state.ddt_incoming.dss_crsp_reg_number = payload.dss_crsp_reg_number
    state.ddt_incoming.dsdt_crsp_reg_date = payload.dsdt_crsp_reg_date
    state.ddt_incoming.dss_initial_reg_number = payload.dss_initial_reg_number
    state.ddt_incoming.dsdt_initial_reg_date = payload.dsdt_initial_reg_date
    state.ddt_incoming.dsi_number_of_page = payload.dsi_number_of_page
    state.ddt_incoming.dss_crsp_name = payload.dss_crsp_name
    state.ddt_incoming.dsid_crsp_org = payload.dsid_crsp_org
    state.ddt_incoming.dss_adrs_name = payload.dss_adrs_name
    state.ddt_incoming.dss_reg_name = payload.dss_reg_name
    state.ddt_incoming.dss_note = payload.dss_note
    state.ddt_incoming.dsi_number_of_appendix = payload.dsi_number_of_appendix
    state.ddt_incoming.dss_description = payload.dss_description
    state.ddt_incoming.dsc_content = payload.dsc_content
    state.ddt_incoming.dss_crsp_resolution = payload.dss_crsp_resolution
    state.ddt_incoming.dsid_document_kind = payload.dsid_document_kind
    state.ddt_incoming.dsid_stamp = payload.dsid_stamp
  },
  addIncomingOneReg_number: (state, payload) => {
    state.ddt_incoming.dss_reg_number = payload.reg_number
  },
  addIncomingOneReg_date: (state, payload) => {
    state.ddt_incoming.dsdt_reg_date = payload.reg_date
  },
  addIncomingOneOut_number: (state, payload) => {
    state.ddt_incoming.dss_crsp_reg_number = payload.out_number
  },
  addIncomingOneOut_date: (state, payload) => {
    state.ddt_incoming.dsdt_crsp_reg_date = payload.out_date
  },
  addIncomingOneAnswer_doc: (state, payload) => {
    state.ddt_incoming.dss_initial_reg_number = payload.answer_doc
  },
  addIncomingOneAnswer_date: (state, payload) => {
    state.ddt_incoming.dsdt_initial_reg_date = payload.answer_date
  },
  addIncomingOnePages: (state, payload) => {
    state.ddt_incoming.dsi_number_of_page = payload.pages
  },
  addIncomingOneCreator_name: (state, payload) => {
    state.ddt_incoming.dss_crsp_name = payload.creator_name
  },
  addIncomingOneOrganization: (state, payload) => {
    state.ddt_incoming.dsid_crsp_org = payload.organization
  },
  addIncomingOneAddressee: (state, payload) => {
    state.ddt_incoming.dss_adrs_name = payload.addressee
  },
  addIncomingOneType: (state, payload) => {
    state.ddt_incoming.dsid_document_kind = payload.type
  },
  addIncomingOneStatus: (state, payload) => {
    state.ddt_incoming.dsid_stamp = payload.status
  },
  addIncomingOneApplication: (state, payload) => {
    state.ddt_incoming.dss_note = payload.application
  },
  addIncomingOneDescription: (state, payload) => {
    state.ddt_incoming.dss_description = payload.description
  },
  addIncomingOneContent: (state, payload) => {
    state.ddt_incoming.dsc_content = payload.content
  },
  addIncomingOneResolution: (state, payload) => {
    state.ddt_incoming.dss_crsp_resolution = payload.resolution
  },
  addIncomingOneAnnotation: (state, payload) => {
    state.ddt_incoming.dss_reg_name = payload.annotation
  }
}
export default {
  state,
  getters,
  mutations
}
