<template>
    <!--Модуль табов списка документов-->
    <b-tabs class="nav nav-tabs tab-content">
            <b-tab class="tab-content" v-bind:class="{active : index == 0}" v-for="(tab, index) in btabsMas" :key="index">
                <template slot="title">
                    <b>{{tab}}</b>
                    <i  v-if="index > 0" @click="closeTab(index)" class='fas fa-times-circle'></i>
                </template>
                    <!-- Содержимое вкладки-->
                        <div class="col-lg-12">
                            <div class="row">
                                <table-doc
                                        :tableDoc=tableDoc
                                        :filterDoc=filterDoc></table-doc>
                            </div>
                        </div>
                <paginator-bot
                        class="pagination-lg justify-content-end"
                        :first-number="true"
                        :count-pages=ColPages
                        v-on:remove="swipPage">
                </paginator-bot>
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
        btabsMas: [
          'Мои задания',
          'ВСХ ИА-2200',
          'ИСХ ВР-2200'
        ],
        RowsInPage: 20,
        filterDoc: null
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
      },
      closeTab (index) {
        this.btabsMas.splice(index, 1)
      },
      filterList (filter) {
        this.filterDoc = filter
        console.log(this.filterDoc)
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
