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
                                  {{n}} <i class='mdi mdi-close-circle-outline ml-2'></i>
                                </template> 

                                </v-tab>
                                <v-tab-item
                                  v-for="n in 3"
                                  :key="n"
                                >
                                  <v-card flat>
                                    <v-card-text> <!-- Содержимое вкладки-->
                                      <div class="row mt-3">
                                      <task-bar :status-doc=create></task-bar>
                                      <central-document-bar :status-doc=create></central-document-bar>
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

</style>
