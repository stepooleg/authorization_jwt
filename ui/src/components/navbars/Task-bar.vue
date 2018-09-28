<template>
    <!--Модуль табов левого сайдбара-->
<div class="border-line ml-3 pr-3" :class="[isActive ? activeClass : fullClass ]" >
            <div style="width: 100%; min-height: 100%; background-color: white;">
                <div  class="mt-3" style="width: 100%" :key=1 ripple>
                    <div class="row">
                        <div v-if="!isActive" class="col">
                            <b class="ml-4">Действия</b>
                        </div>
                        <div v-else="" class="col-3" style="height: 25px">
                        </div>
                        <div @click="showAction" class="col-1 mr-4"><i class="ti-menu"></i></div>
                    </div>
                </div>
                    <div class="col-12 pl-0 pr-0">
                                <div class="row mt-2">
                                        <div class="col-lg-12 text-right pr-4">
                                            <i class=" mdi mdi-star-outline "></i>
                                        </div>
                                </div>
                        <div v-if="!isActive"><table-status-doc :status=statusDoc ></table-status-doc></div>

                                    <div v-if="statusDoc !=='create'" class="row">
                                        <div class="col-12">
                                            <hr/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <action-in-document v-if="statusDoc.type === 'Входящий документ'" documentData=statusDoc></action-in-document>
                                        <action-in-create-document v-else-if="statusDoc === 'create'"></action-in-create-document>
                                        <actions-document v-else></actions-document>
                                    </div>
                                
                                </div>

            </div>
                   
</div>
</template>

<script>
import ActionInDocument from '../doc_elements/action-in-document'
import ActionInCreateDocument from '../doc_elements/action-in-create-document'
export default {
  name: 'task-bar',
  data () {
    return {
      fulltab: {
        width: '100%'
      },
      activeClass: 'nofull',
      fullClass: 'full'
    }
  },
  props: [
    'statusDoc',
    'typeDoc'
  ],
  methods: {
    showAction () {
      console.log(this.isActive)
      this.$store.commit('globalshowTaskBar', !this.isActive)
    }
  },
  computed: {
    isActive () {
      return this.$store.getters.getglobalshowTaskBar
    }
  },
  components: {ActionInDocument, ActionInCreateDocument}
}
</script>

<style>
    .full{
        min-height: 100%;
        width: 20%;
        background-color: white;
    }
    .nofull{
        min-height: 100%;
        width: 5.5%;
        background-color: white;
    }
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
