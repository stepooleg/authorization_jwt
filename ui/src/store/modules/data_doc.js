const state = { dataList: [
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Исходный документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О внедрении системы документооборота ',
    addressee: 'Адресат ООО "АйДи Технологии управления"',
    creator_icon: require('../../assets/images/users/1.jpg'),
    creator_name: 'Егоров Михаил Александрович',
    creator_position: 'Заместитель генерального директора'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'Согласованно',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Входящий документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О приглашении на конкурс лучшая СЭД года.',
    addressee: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    creator_icon: 'null',
    creator_name: 'СЭДО',
    creator_position: ''
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Приказ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О создании нового структурного подразделения ',
    addressee: 'Подписал Коновалов Р.В.',
    creator_icon: require('../../assets/images/users/4.jpg'),
    creator_name: 'Рогов Дмитрий Николаевич ',
    creator_position: 'Директор по технологическому развитию'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Исходный документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О внедрении системы документооборота ',
    addressee: 'Адресат ООО "АйДи Технологии управления"',
    creator_icon: require('../../assets/images/users/1.jpg'),
    creator_name: 'Егоров Михаил Александрович',
    creator_position: 'Заместитель генерального директора'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'Согласованно',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Входящий документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О приглашении на конкурс лучшая СЭД года.',
    addressee: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    creator_icon: 'null',
    creator_name: 'СЭДО',
    creator_position: ''
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Приказ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О создании нового структурного подразделения ',
    addressee: 'Подписал Коновалов Р.В.',
    creator_icon: require('../../assets/images/users/4.jpg'),
    creator_name: 'Рогов Дмитрий Николаевич ',
    creator_position: 'Директор по технологическому развитию'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Исходный документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О внедрении системы документооборота ',
    addressee: 'Адресат ООО "АйДи Технологии управления"',
    creator_icon: require('../../assets/images/users/1.jpg'),
    creator_name: 'Егоров Михаил Александрович',
    creator_position: 'Заместитель генерального директора'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'Согласованно',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Входящий документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О приглашении на конкурс лучшая СЭД года.',
    addressee: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    creator_icon: 'null',
    creator_name: 'СЭДО',
    creator_position: ''
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Приказ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О создании нового структурного подразделения ',
    addressee: 'Подписал Коновалов Р.В.',
    creator_icon: require('../../assets/images/users/4.jpg'),
    creator_name: 'Рогов Дмитрий Николаевич ',
    creator_position: 'Директор по технологическому развитию'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Исходный документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О внедрении системы документооборота ',
    addressee: 'Адресат ООО "АйДи Технологии управления"',
    creator_icon: require('../../assets/images/users/1.jpg'),
    creator_name: 'Егоров Михаил Александрович',
    creator_position: 'Заместитель генерального директора'
  },
  {
    if_read: true,
    checkout: false,
    favorite: false,
    status: 'На согласовании',
    creation_date: '20.01.2017г.',
    execution_date: '20.01.2018г.',
    id: '0000000000001123',
    type: 'Исходный документ',
    reg_number: 'ВР-220022 от 01.10.2016г.',
    reg_date: '01.01.2017 22:22:22,',
    description: 'О внедрении системы документооборота ',
    addressee: 'Адресат ООО "АйДи Технологии управления"',
    creator_icon: require('../../assets/images/users/1.jpg'),
    creator_name: 'Егоров Михаил Александрович',
    creator_position: 'Заместитель генерального директора'
  }
]
}

const getters = {
  getList: state => state.dataList
}

const mutations = {
  addList: (state, payload) => {
    state.dataList = payload
  }
}

export default {
  state,
  getters,
  mutations
}
