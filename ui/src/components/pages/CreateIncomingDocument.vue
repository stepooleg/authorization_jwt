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
                        <div class="col col-lg-12 pl-0 pr-0 margin-45 bg-white mt-2 onedoc">
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
                                    <v-card-text> <!-- Содержимое вкладки-->
                                      <div class="row mt-3">
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
