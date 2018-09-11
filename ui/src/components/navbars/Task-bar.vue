<template>
    <!--Модуль табов левого сайдбара-->
<div class="ml-3 mr-4" style="width: 20%">
            <b-tabs content-class="fulltab" class="nav nav-tabs tab-content font-tab" style="width: 100%">
                <b-tab  class="tab-content" style="width: 100%" active>
                    <template slot="title">
                        <b>Задание</b>
                        <i class='mdi mdi-close-circle-outline'></i>
                    </template>
                        <!-- Содержимое вкладки-->
                        <div class="row bg-white pr-0 mr-0" >
                            <div class="col-lg-12">
                                <div class="row mt-2">
                                        <div class="col-lg-12 text-right">
                                            <i class=" mdi mdi-star-outline"></i>
                                        </div>
                                    </div>
                                <table-status-doc :status=statusDoc></table-status-doc>
                                <div class="row">
                                        <div class="col-lg-12">
                                            <hr/>
                                            <div class="form-group">
                                                <label class="text-muted" for="exampleFormControlTextarea">Комментарий</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                <div class="row collapse-list">
                                    <actions-document></actions-document>
                                </div>
                            </div>
                        </div>
                </b-tab>
                <b-tab class="tab-content">
                    <template slot="title">
                        <b>Связанные задания</b>
                        <i class='mdi mdi-close-circle-outline'></i>
                    </template>
                    <div class="row mt-3">
                        <!-- Содержимое вкладки-->
                        <div class="row mt-3">
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
</div>
</template>

<script>
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
      'statusDoc'
    ]
  }
</script>

<style>
    .text-blue{
        color: #1e88e5;
    }
    .fulltab{
        width: 100%;
    }
    .mdi-star-outline{
        font-size: 1.5rem;
    }

</style>
