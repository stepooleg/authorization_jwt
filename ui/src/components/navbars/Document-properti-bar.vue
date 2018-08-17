<template>
    <!--Правый раздел с табами "Основные, Лист согласования и т.д."-->
    <div class="col col-3 ">
        <div class="col-12">
            <nav class="bg-light">
                <b-tabs class="nav nav-tabs tab-content font-tab">
                    <b-tab class="tab-content" active>
                        <template slot="title">
                            <b>Основные</b> <i class='fas fa-times-circle'></i>
                        </template>
                        <!-- Содержимое вкладки-->
                        <div class="tab-pane fade show active bg-light" id="nav-basic-r" role="tabpanel" aria-labelledby="nav-basic-tab">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 bg-light text-right text-blue">
                                        <i class="fas fa-print mt-3 fa-2x"></i>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <properti-document-tab :status-doc=statusDoc></properti-document-tab>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab class="tab-content">
                        <template slot="title">
                            <b>Лист согласования</b> <i class='fas fa-times-circle'></i>
                        </template>
                        <!-- Содержимое вкладки-->
                        <div class="tab-pane fade show active bg-light" role="tabpanel" aria-labelledby="nav-basic-tab">
                            <div class="col-12">
                                <div class="row">
                                        <document-log :doc-card-in=statusDoc></document-log>
                                </div>
                            </div>
                        </div>
                    </b-tab>

                    <b-tab class="tab-content">
                        <template slot="title">
                            <b>История</b> <i class='fas fa-times-circle'></i>
                        </template>
                        <!-- Содержимое вкладки-->
                        <div class="row bg-light">
                        </div>
                    </b-tab>

                    <b-tab class="tab-content">
                        <template slot="title">
                            <b>Аудит</b> <i class='fas fa-times-circle'></i>
                        </template>
                        <!-- Содержимое вкладки-->
                        <div class="row bg-light">
                        </div>
                    </b-tab>

                    <b-tab class="tab-content">
                        <template slot="title">
                            <b>...</b> <i class='fas fa-times-circle'></i>
                        </template>
                        <!-- Содержимое вкладки-->
                        <div class="row bg-light">
                        </div>
                    </b-tab>
                </b-tabs>

            </nav>
            <div class="tab-content bg-light font-tab" id="nav-tabContent-rs">


                <div class="tab-pane fade" id="nav-history-r" role="tabpanel" aria-labelledby="nav-historyt-tab">Contact
                    <br>
                    <br>
                </div>
                <div class="tab-pane fade" id="nav-audit-r" role="tabpanel" aria-labelledby="nav-audit-tab">Contact
                    <br>
                    <br>
                </div>
                <div class="tab-pane fade" id="nav-all-r" role="tabpanel" aria-labelledby="nav-all-tab">Contact
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import PropertiDocumentTab from '../doc_elements/Document-properti-tab'
  import DocumentLog from '../doc_elements/Document-log'
  export default {
    name: 'properti-document-bar',
    data () {
      return {
        compDoc: this.statusDoc
      }
    },
    props: [
      'statusDoc'
    ],
    components: {DocumentLog, PropertiDocumentTab}
  }
</script>

<style scoped>
    .show {
        display: block;
    }
    .font-tab{
        font-size: 1.1rem;
    }
    .text-blue{
        color: #1e88e5;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }

</style>
