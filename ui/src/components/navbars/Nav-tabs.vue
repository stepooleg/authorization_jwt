<template>
    <!--Модуль табов списка документов-->
<div>
    <v-tabs
            slider-color="blue" 
            style="background-color: white;" >

            <v-tab  v-bind:class="{active : index == 0}" v-for="(tab, index) in btabsMas" :key="index" ripple>
              <b>{{tab}}</b>
              <i class='mdi mdi-close-circle-outline ml-2'></i>
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div class="col-12">
                    <div class="row">
                      <table-doc
                          :tableDoc=tableDoc
                          :filterDoc=filterDoc>
                      </table-doc>
                      </div>
                    </div>
                    <!--<paginator-bot
                      class="pagination-lg justify-content-end"
                      :first-number="true"
                      :count-pages=ColPages
                      v-on:remove="swipPage">
                    </paginator-bot>-->
                  </v-card-text>
              </v-card>
            </v-tab-item>
    </v-tabs>
    </div>
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
        RowsInPage: 10,
        filterDoc: null
      }
    },
    computed: {
      countRows () {
      //  return this.$store.getters.getList.slice((this.PageNumber - 1) * this.RowsInPage
       //   , this.PageNumber * this.RowsInPage)
      }
    },
    methods: {
      swipPage (number) {
        console.log(number)
      //  this.PageNumber = number
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
