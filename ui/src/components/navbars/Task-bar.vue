<template>
    <!--Модуль табов левого сайдбара-->
<div class="border-line ml-3" style="width: 20%">
            <v-tabs
            slider-color="blue" style=" min-height: 100%; width: 100%; background-color: white;">
                <v-tab  style="width: 100%" :key=1 ripple>
                        <b>Задание</b>      
                        <i class='mdi mdi-close-circle-outline ml-2'></i>
                </v-tab>
                <v-tab v-if="statusDoc !== 'create'"  style="width: 100%" :key=2 ripple>
                        <b>Связанные задания</b>      
                        <i class='mdi mdi-close-circle-outline ml-2'></i>
                </v-tab>
                <v-tab-item>
                    <v-card flat>
                    <v-card-text>
                    <div class="col-12">
                                <div class="row mt-2">
                                        <div class="col-lg-12 text-right">
                                            <i class=" mdi mdi-star-outline"></i>
                                        </div>
                                </div>
                                <table-status-doc :status=statusDoc ></table-status-doc>
                                    <div v-if="statusDoc !=='create'" class="row">
                                        <div class="col-12">
                                            <hr/>
                                                <div class="form-group">
                                                    <label 
                                                        v-if="statusDoc.type !== 'Входящий документ'" 
                                                        class="text-muted" 
                                                        for="exampleFormControlTextarea">Комментарий</label>
                                                    <textarea 
                                                        class="form-control" 
                                                        id="exampleFormControlTextarea" 
                                                        rows="5"></textarea>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="row collapse-list">
                                        <action-in-document v-if="statusDoc.type === 'Входящий документ'" documentData=statusDoc></action-in-document>
                                        <action-in-create-document v-else-if="statusDoc === 'create'"></action-in-create-document>
                                        <actions-document v-else></actions-document>
                                    </div>
                                
                                </div>
                            </v-card-text>
                        </v-card>
                </v-tab-item>
            </v-tabs>
                   
</div>
</template>

<script>
import ActionInDocument from '../doc_elements/action-in-document'
import ActionInCreateDocument from '../doc_elements/action-in-create-document'
export default {
  name: 'task-bar',
  data () {
    return {
      status: this.statusDoc,
      fulltab: {
        width: '100%'
      }
    }
  },
  props: [
    'statusDoc',
    'typeDoc'
  ],
  components: {ActionInDocument, ActionInCreateDocument}
}
</script>

<style>
    .border-line{
        border: 1px solid rgba(0,0,0,.125);
        border-color: #d7dfe3;
        border-radius: 4px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    }
    .text-blue{
        color: #1e88e5;
    }
    .fulltab{
        width: 100%;
    }
    .mdi-star-outline{
        font-size: 1.5rem;
    }
    .collapse-list{
        flex: 1 1 0%;
    }
    .navbar-dark .navbar-nav .nav-link {
    color: white;
    }

</style>
