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
                        <div class="col col-lg-12 pl-0 pr-0 margin-45 bg-white mt-2 onedoc" >
                            <div>
                              <v-tabs
                                v-model="active"
                                slider-color="blue"
                                style="background-color: #eef5f9;"
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
                                  {{n}} <i class='mdi mdi-close-circle-outline ml-2'></i>
                                </template> 

                                </v-tab>
                                <v-tab-item
                                  v-for="n in 3"
                                  :key="n"
                                  style="background-color: white;"
                                >
                                  <v-card flat>
                                    <v-card-text style="background-color: #eef5f9; padding-bottom: 0;"> <!-- Содержимое вкладки-->
                                      <div class="row ">
                                      <task-bar :status-doc=create></task-bar>
                                      <properti-document-bar :status-doc=create></properti-document-bar>
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
    name: 'CreateIncomingDocument',
    data () {
      return {
        statusDoc: 'Мои задания',
        active: null,
        create: 'create',
        typedoc: ''
      }
    },
    mounted () {
      console.log('Токен для списка пользователей: ' + localStorage.getItem('user-token'))
      let url = process.env.REST_SERV + 'entity/list'
      let token = localStorage.getItem('user-token')

          // let value = 'dss_name'
      const userList = axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          type: 'dm_user',
          token: token
        },
//      withCredentials: true,
        credentials: 'same-origin'
      })
          .then(response => {
            this.$store.commit('addUserList', response.data)
            console.log('Полученный список пользователя: ' + JSON.stringify(response.data))
          })
      const orgList = axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          type: 'ddt_organization',
          token: token
        },
//      withCredentials: true,
        credentials: 'same-origin'
      })
        .then(response => {
          this.$store.commit('addOrganizationList', response.data)
          console.log('Полученный список организаций: ' + JSON.stringify(response.data))
        }
            )
      const kindList = axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          type: 'ddt_document_kind',
          token: token
        },
//      withCredentials: true,
        credentials: 'same-origin'
      })
        .then(response => {
          this.$store.commit('addKindList', response.data)
          console.log('Полученный список видов: ' + JSON.stringify(response.data))
        })
      const stampList = axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          type: 'ddt_stamp',
          token: token
        },
//      withCredentials: true,
        credentials: 'same-origin'
      })
        .then(response => {
          this.$store.commit('addStampList', response.data)
          console.log('Полученный список штампов: ' + JSON.stringify(response.data))
        })
      Promise.all([userList, orgList, kindList, stampList])
      .then(pets => console.log(pets))
      .catch(error => console.log(error))
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
    .margin-70{
        margin-left: 70px;
    }
    .prbg{
        background-color: #1e88e5;
        color: white;
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
    .v-tabs_bar{
        background-color: #eef5f9;
    }
    .v-tabs__container{
        background-color: #eef5f9;
    }


</style>
