/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  userList: [{
    dss_name: 'admin123',
    name: 'Егоров Михаил Александрович',
    position: 'руководитель проектов',
    img: require('../../assets/images/users/1.jpg')
  }, {
    dss_name: 'qwerty',
    name: 'Рогов Дмитрий Николаевич',
    position: 'Директор по технологическому развитию',
    img: require('../../assets/images/users/4.jpg')
  }, {
    dss_name: 'newlogin',
    name: 'Щекотов Роман Анатольевич',
    position: 'директор департамента',
    img: require('../../assets/images/users/5.jpg')
  }]
}

const getters = {
  getUserList: state => state.userList
}

const mutations = {
  addUserList: (state, payload) => {
    state.userList = payload
  }
}

export default {
  state,
  getters,
  mutations
}
