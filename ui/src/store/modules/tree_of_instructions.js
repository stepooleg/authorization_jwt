/**
 * Created by StepanenkoOV on 26.09.2018.
 */
const state = {
  treeOfInstructions: [{
    show: false,
    img: require('../../assets/images/users/1.jpg'),
    name: 'Егоров Михаил Александрович',
    status: 'На исполнение',
    position: 'руководитель проекта',
    data: '01.01.2015г.',
    cont: {
      img: require('../../assets/images/users/1.jpg'),
      nameAuthor: 'Егоров Михаил Александрович',
      executors: [
        {img: require('../../assets/images/users/4.jpg'), name: 'Щекотов Роман Анатольевич', position: 'директор департамента'},
        {img: require('../../assets/images/users/2.jpg'), name: 'Боцанова Светлана Сергеевна', position: 'разработчик'}
      ],
      periodOfExecution: '25.12.2018г.',
      dataOfExecution: '25.12.2018г.',
      commission: 'Прошу разобраться и доложить'
    },
    treeOfInstructions: [{
      show: false,
      img: require('../../assets/images/users/4.jpg'),
      name: 'Рогов Дмитрий Николаевич',
      status: 'На исполнение',
      position: 'Директор по технологическому развитию',
      data: '01.03.2017г.',
      cont: {
        img: require('../../assets/images/users/4.jpg'),
        nameAuthor: 'Рогов Дмитрий Николаевич',
        executors: [
          {
            img: require('../../assets/images/users/5.jpg'),
            name: 'Щекотов Роман Анатольевич',
            position: 'директор департамента'
          },
          {
            img: require('../../assets/images/users/2.jpg'),
            name: 'Боцанова Боцанова Светлана Сергеевна',
            position: 'разработчик'
          }
        ],
        periodOfExecution: '25.12.2018г.',
        dataOfExecution: '25.12.2018г.',
        commission: 'Прошу разобраться и доложить'
      }
    }]
  }]
}

const getters = {
  getTreeOfInstructions: state => state.treeOfInstructions
}

const mutations = {
  addTreeOfInstructions: (state, payload) => {
    state.treeOfInstructions.push(payload)
  },
  editShow: (state, payload) => {
    state.treeOfInstructions[payload.id].show = payload.show
  }
}
export default {
  state,
  getters,
  mutations
}
