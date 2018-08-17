<template>
    <!--Модуль табов списка документов-->
    <b-tabs class="nav nav-tabs tab-content">
            <b-tab class="tab-content" active>
                <template slot="title">
                    <b>Мои задания</b> <i class='fas fa-times-circle'></i>
                </template>
                <div class="row mt-3">
                    <!-- Содержимое вкладки-->
                    <div class="col col-12">
                        <div class="row">
                            <doc-filter></doc-filter>
                        </div>
                        <table-doc :tableDoc=tableDoc></table-doc>
                    </div>
                </div>
                <paginator-bot
                        class="pagination-lg justify-content-end"
                        :first-number="true"
                        :count-pages=ColPages v-on:remove="swipPage">

                </paginator-bot>
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
                {{ColPages}}////////{{PageNumber}}
            </b-tab>
    </b-tabs>
</template>

<script>
  export default {
    name: 'nav-tabs',
    props: [
      'tableDoc'
    ],
    data () {
      return {
        PageNumber: 1,
        RowsInPage: 20
      }
    },
    computed: {
      countRows () {
        return this.tableDoc.slice((this.PageNumber - 1) * this.RowsInPage
          , this.PageNumber * this.RowsInPage)
      },
      ColPages () {
        return this.tableDoc.length / this.RowsInPage
      }
    },
    methods: {
      swipPage (number) {
        console.log(number)
        this.PageNumber = number
      }
    }
  }
</script>

<style scoped>

    .text-fix{
        width: 35%;
    }
    .task-fix{
        display: flex;
        flex-wrap: wrap;
        width: 10%;
    }
</style>
