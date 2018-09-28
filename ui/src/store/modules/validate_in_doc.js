/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  validateList: {
    isValidRegNumber: false,
    isValidInitialRegNumber: false,
    isValidNumberOfPage: false,
    isValidNumberOfAppendix: false
  }
}

const getters = {
  getisValidRegNumber: state => state.validateList.isValidRegNumber,
  getisValidInitialRegNumber: state => state.validateList.isValidInitialRegNumber,
  getisValidNumberOfPage: state => state.validateList.isValidNumberOfPage,
  getisValidNumberOfAppendix: state => state.validateList.isValidNumberOfAppendix
}

const mutations = {
  addIsValidRegNumber: (state, payload) => {
    state.validateList.isValidRegNumber = payload
  },
  addIsValidInitialRegNumber: (state, payload) => {
    state.validateList.isValidInitialRegNumber = payload
  },
  addIsValidNumberOfPage: (state, payload) => {
    state.validateList.isValidNumberOfPage = payload
  },
  addIsValidNumberOfAppendix: (state, payload) => {
    state.validateList.isValidNumberOfAppendix = payload
  }
}

export default {
  state,
  getters,
  mutations
}
