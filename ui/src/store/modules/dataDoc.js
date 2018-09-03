const state = { dataList: [
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Исходный документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О внедрении системы электронного документооборота ',
      'архивного дела на предприятии топливо - энергетического'
    ],
    adress: 'Адресат ООО "АйДи Технологии управления"',
    img: {
      image: true,
      src: require('../../assets/images/users/1.jpg')
    },
    author: 'Егоров Михаил Александрович',
    typeList: [
      'Заместитель генерального директора',
      'по стратегическому развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'Согласованно',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Входящий документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О приглашении на конкурс лучшая СЭД года.'
    ],
    adress: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    img: {
      image: false,
      src: ''
    },
    author: 'СЭДО',
    typeList: [
      ''
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Приказ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О создании нового структурного подразделения '
    ],
    adress: 'Подписал Коновалов Р.В.',
    img: {
      image: true,
      src: require('../../assets/images/users/4.jpg')
    },
    author: 'Рогов Дмитрий Николаевич ',
    typeList: [
      'Директор по технологическому ',
      'развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Исходный документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О внедрении системы электронного документооборота ',
      'архивного дела на предприятии топливо - энергетического'
    ],
    adress: 'Адресат ООО "АйДи Технологии управления"',
    img: {
      image: true,
      src: require('../../assets/images/users/1.jpg')
    },
    author: 'Егоров Михаил Александрович',
    typeList: [
      'Заместитель генерального директора',
      'по стратегическому развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'Согласованно',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Входящий документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О приглашении на конкурс лучшая СЭД года.'
    ],
    adress: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    img: {
      image: false,
      src: ''
    },
    author: 'СЭДО',
    typeList: [
      ''
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Приказ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О создании нового структурного подразделения '
    ],
    adress: 'Подписал Коновалов Р.В.',
    img: {
      image: true,
      src: require('../../assets/images/users/4.jpg')
    },
    author: 'Рогов Дмитрий Николаевич ',
    typeList: [
      'Директор по технологическому ',
      'развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Исходный документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О внедрении системы электронного документооборота ',
      'архивного дела на предприятии топливо - энергетического'
    ],
    adress: 'Адресат ООО "АйДи Технологии управления"',
    img: {
      image: true,
      src: require('../../assets/images/users/1.jpg')
    },
    author: 'Егоров Михаил Александрович',
    typeList: [
      'Заместитель генерального директора',
      'по стратегическому развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'Согласованно',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Входящий документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О приглашении на конкурс лучшая СЭД года.'
    ],
    adress: 'Корреспондент конкурса ООО "Лучшая СЭД года"',
    img: {
      image: false,
      src: ''
    },
    author: 'СЭДО',
    typeList: [
      ''
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Приказ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О создании нового структурного подразделения '
    ],
    adress: 'Подписал Коновалов Р.В.',
    img: {
      image: true,
      src: require('../../assets/images/users/4.jpg')
    },
    author: 'Рогов Дмитрий Николаевич ',
    typeList: [
      'Директор по технологическому ',
      'развитию'
    ]
  },
  {
    checkout: false,
    stars: false,
    status: 'На согласовании',
    date: '20.01.2017г.',
    dedline: '20.01.2018г.',
    typedoc: 'Исходный документ',
    number: 'ВР-220022 от 01.10.2016г.',
    descriptionList: [
      'О внедрении системы электронного документооборота ',
      'архивного дела на предприятии топливо - энергетического'
    ],
    adress: 'Адресат ООО "АйДи Технологии управления"',
    img: {
      image: true,
      src: require('../../assets/images/users/1.jpg')
    },
    author: 'Егоров Михаил Александрович',
    typeList: [
      'Заместитель генерального директора',
      'по стратегическому развитию'
    ]}]}

const getters = {
  getList: state => state.dataList
}

export default {
  state,
  getters
}
