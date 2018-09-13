const state = { ddt_incoming: {
  'reg_number': 'dgdg',
  'reg_date': '',
  'out_number': '',
  'out_date': '',
  'answer_doc': '',
  'answer_date': '',
  'pages': '',
  'creator_name': '',
  'organization': '',
  'addressee': '',
  'type': '',
  'status': '',
  'application': '',
  'description': '',
  'content': '',
  'resolution': '',
  'annotation': ''
}
}
const getters = {
  getIncoming: state => state.ddt_incoming
}
const mutations = {
  addIncomingReg_number: (state, payload) => {
    state.ddt_incoming.reg_number = payload.reg_number
  },
  addIncomingReg_date: (state, payload) => {
    state.ddt_incoming.reg_date = payload.reg_date
  },
  addIncomingOut_number: (state, payload) => {
    state.ddt_incoming.out_number = payload.out_number
  },
  addIncomingOut_date: (state, payload) => {
    state.ddt_incoming.out_date = payload.out_date
  },
  addIncomingAnswer_doc: (state, payload) => {
    state.ddt_incoming.answer_doc = payload.answer_doc
  },
  addIncomingAnswer_date: (state, payload) => {
    state.ddt_incoming.answer_date = payload.answer_date
  },
  addIncomingPages: (state, payload) => {
    state.ddt_incoming.pages = payload.pages
  },
  addIncomingCreator_name: (state, payload) => {
    state.ddt_incoming.creator_name = payload.creator_name
  },
  addIncomingOrganization: (state, payload) => {
    state.ddt_incoming.organization = payload.organization
  },
  addIncomingAddressee: (state, payload) => {
    state.ddt_incoming.addressee = payload.addressee
  },
  addIncomingType: (state, payload) => {
    state.ddt_incoming.type = payload.type
  },
  addIncomingStatus: (state, payload) => {
    state.ddt_incoming.status = payload.status
  },
  addIncomingApplication: (state, payload) => {
    state.ddt_incoming.application = payload.application
  },
  addIncomingDescription: (state, payload) => {
    state.ddt_incoming.description = payload.description
  },
  addIncomingContent: (state, payload) => {
    state.ddt_incoming.content = payload.content
  },
  addIncomingResolution: (state, payload) => {
    state.ddt_incoming.resolution = payload.resolution
  },
  addIncomingAnnotation: (state, payload) => {
    state.ddt_incoming.annotation = payload.annotation
  }
}
export default {
  state,
  getters,
  mutations
}
