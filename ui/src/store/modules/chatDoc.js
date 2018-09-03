const state = { chat: [
  {
    name: 'Егоров М.А.',
    message: 'Коллеги, прошу согласовать задачу №112. Об итогах прошу проинформировать.',
    image: require('../../assets/images/users/1.jpg'),
    classmsg: 'box bg-light-info'
  },
  {
    name: 'Иванова А.А.',
    message: 'Я отправила Вам копию.',
    image: require('../../assets/images/users/2.jpg'),
    classmsg: 'box bg-light-success'
  },
  {
    name: null,
    message: 'Ну что же, ждем одобрения.',
    image: null,
    classmsg: 'box bg-light-inverse'
  },
  {
    name: null,
    message: 'Прошу согласовать бюджет проекта.',
    image: null,
    classmsg: 'box bg-light-inverse'
  },
  {
    name: null,
    message: 'Я отправила Вам копию',
    image: null,
    classmsg: 'box bg-light-inverse'
  },
  {
    name: 'Angelina Rhodes',
    message: 'Что у нас по срокам?',
    image: require('../../assets/images/users/3.jpg'),
    classmsg: 'box bg-light-primary'
  }
] }

const getters = {
  getChat: state => state.chat
}

export default {
  state,
  getters
}
