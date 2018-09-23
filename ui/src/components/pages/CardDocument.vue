<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="col-lg-12 ml-3 ">
                    <div class="row">
                        <div style="z-index: 1000; min-height: 100%; display: flex; position: absolute; top: 8px; left: -46px;">
                            <left-sidebar></left-sidebar>
                        </div>
                        <div class="col col-lg-12 pl-0 pr-0 margin-45 bg-white border-line mt-2 onedoc">
                            <div>
                              <v-tabs
                                v-model="active"
                                slider-color="blue"
                              >
                                <v-tab
                                  v-for="n in 3"
                                  :key="n"
                                  ripple
                                >
                                <template v-if="n === 1">
                                   {{ statusDoc }} <i class='mdi mdi-close-circle-outline ml-2'></i>
                                </template>

                                <template v-else>
                                  {{rows[n].number}} <i class='mdi mdi-close-circle-outline ml-2'></i>
                                </template> 

                                </v-tab>
                                <v-tab-item
                                  v-for="n in 3"
                                  :key="n"
                                >
                                  <v-card flat>
                                    <v-card-text> <!-- Содержимое вкладки-->
                                      <div class="row">
                                      <task-bar :status-doc=onedoc></task-bar>
                                      <properti-document-bar :status-doc=onedoc></properti-document-bar>
                                      </div>
                                    </v-card-text>
                                  </v-card>
                                </v-tab-item>
                              </v-tabs>
                            </div>                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  const axios = require('axios')
  export default {
    name: 'CardDocument',
    data () {
      return {
        statusDoc: 'Мои задания',
        active: null,
        rows: [
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
            ]
          }
        ],
        onedoc: '',
        typedoc: ''
      }
    },
    mounted () {
      axios.post('http://localhost:9000/' + this.$route.params.id)
      // axios.defaults.headers.common['token'] = localStorage.getItem('user-token')
        .then(response => {
          this.statusDoc = response.data
          console.log(this.statusDoc)
        }
        )
        .catch(function (error) {
          console.log(error)
        })
      this.onedoc = this.$store.getters.getList[this.$route.params.id]
    }
  }
</script>

<style scoped>

    body{
        font-size: 1rem;
        text-transform: none! important;
    }
    .col-1 {
        padding-right: 0;
    }
    .margin-45{
        margin-left: 47px;
    }
    .prbg{
        background-color: #1e88e5;
        color: white;
    }
    .bg-white{
      background-color: white;
    }
    .border-line{
        border: 1px solid rgba(0,0,0,.125);
        border-color: #d7dfe3;
        border-radius: 4px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    }
    .onedoc{
      max-width: 96%;
    }

</style>
