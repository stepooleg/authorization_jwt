<template>
    <!--Модуль табов правого сайдбара-->
    <div class="col col-3 ">
        <div class="col-12">
            <b-tabs class="nav nav-tabs tab-content font-tab">
                <b-tab class="tab-content" active>
                    <template slot="title">
                        <b>Задание</b> <i class='fas fa-times-circle'></i>
                    </template>
                        <!-- Содержимое вкладки-->
                        <div class="row bg-light">
                            <div class="col-12">
                                <div class="row mt-2">
                                        <div class="col-12 text-right text-blue">
                                            <i class=" star_t far fa-star fa-1x"></i>
                                        </div>
                                    </div>
                                <table-status-doc :status=statusDoc></table-status-doc>
                                <div class="row">
                                        <div class="col-12">
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
                        <b>Связанные задания</b> <i class='fas fa-times-circle'></i>
                    </template>
                    <div class="row mt-3">
                        <!-- Содержимое вкладки-->
                        <div class="row mt-3">
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'task-bar',
    data () {
      return {
        status: this.statusDoc
      }
    },
    props: [
      'statusDoc'
    ]
  }
</script>

<style scoped>
    .text-blue{
        color: #1e88e5;
    }
</style>
