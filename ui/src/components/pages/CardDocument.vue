<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="col-lg-12 ml-3">
                    <div class="row">
                        <div class="col col-lg-12">
                            <b-tabs class="nav nav-tabs tab-content font-tab">
                                <b-tab :title ="statusDoc.dss_doc_number" :titleLinkClass="'fas fa-times-circle'" class="tab-content" active>
                                    <div class="row mt-3">
                                        <!-- Содержимое вкладки-->
                                        <div class="row mt-3">
                                            <task-bar :status-doc=statusDoc></task-bar>
                                            <central-document-bar></central-document-bar>
                                            <properti-document-bar :status-doc=statusDoc></properti-document-bar>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab>
                                    <template slot="title">
                                        <b>ВСХ ИА-2200</b> <i class='fas fa-times-circle'></i>
                                    </template>
                                </b-tab>
                                <b-tab>
                                    <template slot="title">
                                        <b>ИСХ ВР-2200</b> <i class='fas fa-times-circle'></i>
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
        statusDoc: 'Мои задания'
      }
    },
    mounted () {
      axios.post('http://localhost:9000/' + this.$route.params.id)
        .then(response => {
          this.statusDoc = response.data
          console.log(this.statusDoc)
        }
        )
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
    .font-tab{
        font-size: 1.1rem;
    }
</style>
