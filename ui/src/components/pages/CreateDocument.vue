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
      this.onedoc = this.$store.getters.getList[this.$route.params.id]
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
