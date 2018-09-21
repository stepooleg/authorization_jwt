<template>
    <!--Правый раздел с табами "Основные, Лист согласования и т.д."-->
    <div class="col col-10 centerdoc pr-1" style="font-size: 1.2rem;">
        <div class="col-12 pr-0 border-line pl-0">
            <v-tabs
            slider-color="blue" style="background-color: white; ">
                <v-tab  :key=1 ripple >
                    <b>Контент</b>
                </v-tab>
                <v-tab  :key=2 ripple>  
                        <b>Основные</b>
                </v-tab>
                <v-tab  :key=3 ripple>
                   <b v-if="statusDoc.type === 'Входящий документ'">История</b>
                   <b v-else-if="statusDoc === 'create'">История</b>
                   <b v-else>Лист согласования</b>  
                </v-tab>
                <v-tab :key=4 ripple>
                    <b>Аудит</b> 
                </v-tab>
                <v-tab :key=5 ripple>
                    <b>Резолюции</b>
                </v-tab>
                <v-tab :key=6 ripple>
                    <b>Лист согласования</b>
                </v-tab>
                 <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                     <central-document-bar :status-doc=statusDoc v-if="statusDoc === 'create'"></central-document-bar>  
                          <central-document-bar v-else></central-document-bar>  
                 </v-tab-item>
                 <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                       <div class="col-12">
                                <div class="row">
                                    <div class="col-12 bg-white text-right text-blue">
                                        <i class="mdi mdi-printer mt-3 fr"></i>
                                    </div>
                                </div>
                                <div class="row mt-2">
                                    <document-in-tab v-if="statusDoc.type === 'Входящий документ'" :status-doc=statusDoc></document-in-tab>
                                    <document-in-tab v-else-if="statusDoc === 'create'" :status-doc=statusDoc></document-in-tab>
                                    <properti-document-tab v-else :status-doc=statusDoc></properti-document-tab>
                                </div>
                            </div>         
                 </v-tab-item>
                 <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                        <div class="col-12">
                            <div class="row">
                                <document-log :doc-card-in=statusDoc></document-log>
                            </div>
                        </div>
                 </v-tab-item>
                 <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                     <central-document-bar></central-document-bar>
                 </v-tab-item>
                 <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                    <rezolution-document></rezolution-document>
                 </v-tab-item>
                  <v-tab-item style="border-top: 1px solid rgba(0,0,0,.125);">
                    <reconciliation-document></reconciliation-document>
                 </v-tab-item>
            </v-tabs>
        </div>
    </div>
</template>

<script>
  import DocumentInTab from '../doc_elements/Document-in-tab'
  import PropertiDocumentTab from '../doc_elements/Document-properti-tab'
  import DocumentLog from '../doc_elements/Document-log'
  import RezolutionDocument from '../doc_elements/rezolution-document'
  import ReconciliationDocument from '../doc_elements/reconciliation-document'
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
    components: {
      DocumentLog,
      PropertiDocumentTab,
      DocumentInTab,
      RezolutionDocument,
      ReconciliationDocument
    }
  }
</script>

<style scoped>
    .border-line{
        border: 1px solid rgba(0,0,0,.125);
        border-color: #d7dfe3;
        border-radius: 4px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    }
    .show {
        display: block;
    }
    .text-blue{
        color: #1e88e5;
        font-size: 1rem;
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
    i{
        font-size: 1.5rem;
    }
    .centerdoc{
        max-width: 78%; 
    }
    
</style>
