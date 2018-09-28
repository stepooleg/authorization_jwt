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
                        <div class="col col-lg-12 pl-0 pr-0 margin-45 bg-white border-line mt-2 onedoc">
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
  export default {
    name: 'CardDocument',
    data () {
      return {
        statusDoc: 'Мои задания',
        onedoc: ''
      }
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
