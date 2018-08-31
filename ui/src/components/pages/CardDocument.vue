<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="col-lg-12 ml-3">
                    <div class="row">
                        <div style="z-index: 1000; min-height: 100%; display: flex; position: absolute; top: 8px; left: -46px;">
                            <left-sidebar></left-sidebar>
                        </div>
                        <div class="col col-lg-12 pl-0 margin-70">
                            <b-tabs class="nav nav-tabs tab-content font-tab">
                                <b-tab
                                        :title ="statusDoc.dss_doc_number"
                                        :titleLinkClass="'mdi mdi-close-circle-outline'"
                                        class="tab-content"
                                        active>
                                    <div class="row mt-3">
                                        <!-- Содержимое вкладки-->
                                        <div class="row mt-3">
                                            <task-bar :status-doc=onedoc></task-bar>
                                            <central-document-bar></central-document-bar>
                                            <properti-document-bar :status-doc=onedoc></properti-document-bar>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab>
                                    <template slot="title">
                                        <b>ВСХ ИА-2200</b>
                                        <i class='mdi mdi-close-circle-outline'></i>
                                    </template>
                                </b-tab>
                                <b-tab>
                                    <template slot="title">
                                        <b>ИСХ ВР-2200</b>
                                        <i class='mdi mdi-close-circle-outline'></i>
                                    </template>
                                </b-tab>
                            </b-tabs>
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
        onedoc: ''
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
      this.onedoc = this.rows[this.$route.params.id]
    }
  }
</script>

<style scoped>
    body{
        font-size: 1.2rem;
    }
    .col-1 {
        padding-right: 0;
    }
    .margin-70{
        margin-left: 70px;
    }
    .prbg{
        background-color: #1e88e5;
        color: white;
    }
</style>
