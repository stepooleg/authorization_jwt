<template>
    <div class="col col-lg-12">
        <div class="col col-lg-12 bg-white mt-3">
            <form>
                <div class="form-row align-items-center">
                    <div class="col-lg-2 my-1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                                   id="autoSizingCheck2">
                            <label class="form-check-label" for="autoSizingCheck2">
                                Только просмотренные
                            </label>
                        </div>
                    </div>
                    <div class="col-lg-2 my-1">
                        <label class="sr-only" for="inlineFormCustomSelect">Список
                            заданий</label>
                        <select v-model="typeTask" class="form-control custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Тип задания</option>
                            <option value="На согласовании">На согласовании</option>
                            <option value="Согласованно">Согласованно</option>
                            <option value="Выполняется">Выполняется</option>
                            <option value="Выполненно">Выполненно</option>
                        </select>
                    </div>
                    <div class="col-lg-2 my-1">
                        <label class="sr-only" for="inlineFormCustomSelectDoc">Список
                            документов</label>
                        <select v-model="typeDoc" tabindex="1" class="form-control custom-select mr-sm-2" id="inlineFormCustomSelectDoc">
                            <option selected>Тип документа</option>
                            <option value="Приказ">Приказ</option>
                            <option value="Исходный документ">Исходный документ</option>
                            <option value="Входящий документ">Входящий документ</option>
                        </select>
                    </div>
                    <div class="col-lg-4 my-1">
                        <label class="sr-only" for="inlineFormInputType">Поиск</label>
                        <input v-model="search" type="text" class="form-control" id="inlineFormInputType"
                               placeholder="Поиск">
                    </div>
                </div>
            </form>
        </div>
        <div class="table-responsive bg-light table m-t-20 table-hover no-wrap contact-list footable-loaded footable ">
            <table id="demo-foo-addrow" class="table table-responsive table-hover no-wrap contact-list" data-page-size="10">
                <thead>
                <tr>
                    <th style="width: 3%">
                        <div class="form-check">
                            <input @click="checkEdit" class="form-check-input" type="checkbox" v-model="check"
                                   id="r1">
                            <label class="form-check-label" for="r1"></label>
                        </div>
                    </th>
                    <th style="width: 3%"></th>
                    <th style="width: 15%"><b>Задания</b></th>
                    <th style="width: 15%"><b>Документ</b></th>
                    <th style="width: 15%"><b>Краткое содержание</b></th>
                    <th style="width: 15%"><b>От кого</b></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, index) in filterDoc" :key="index" @dblclick="openToCard(index)">
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="row.checkout"
                                   v-bind:id="index">
                            <label class="form-check-label" v-bind:for="index"></label>
                        </div>
                    </td>
                    <td style="width: 10px">
                        <div @click="row.stars=!row.stars">
                            <i class=" mdi mdi-star-outline"  v-if="!row.stars"></i>
                            <i class=" mdi mdi-star"  v-else></i>
                        </div>
                    </td>
                    <td>
                        <div class="font-medium"><b>{{row.status}}</b></div>
                        <div><b>Дата: {{row.date}}</b></div>
                        <div><b>Срок {{row.dedline}}</b></div>
                    </td>
                    <td>
                        <span class="label label-danger" v-if="row.typedoc==='Приказ'">{{row.typedoc}}</span>
                        <span class="label label-primary" v-if="row.typedoc==='Входящий документ'">{{row.typedoc}}</span>
                        <span class="label label-success" v-if="row.typedoc==='Исходный документ'">{{row.typedoc}}</span>
                        <div>{{row.number}}</div>
                    </td>
                    <td>
                        <div class="font-medium"><b v-for="(line, ind) in row.descriptionList" :key="ind">
                            {{line}}<br>
                        </b>
                            <div>{{row.adress}}</div>
                        </div>
                    </td>
                    <td>
                        <a href="app-contact-detail.html">
                            <img v-bind:src="row.img.src" alt="user" class="img-circle mr-3" v-if="row.img.image"/>
                            <span class="round mr-3" v-else>{{row.author.charAt(0)}}</span>
                            {{row.author}}
                        </a>
                        <div class="ml-6">
                            <span
                                    v-for="(name, index) in row.typeList"
                                    :key="index">{{name}}<br>
                            </span>
                        </div>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'TableDoc',
    data () {
      return {
        icon: true,
        check: false,
        typeTask: 'Тип задания',
        typeDoc: 'Тип документа',
        filterDoc: [],
        search: ''
      }
    },
    methods: {
      openToCard (id) {
        this.$router.push(
          {
            name: 'Card',
            params: {id}
          }
        )
      },
      checkEdit () {
        this.rows.forEach(e => {
          e.checkout = !this.check
          console.log(e.checkout)
        }
        )
      },
      filter () {
        console.log()
        if ((this.typeTask.isEmpty && this.typeDoc.isEmpty) || (this.typeDoc === 'Тип документа' && this.typeTask === 'Тип задания')) {
          this.filterDoc = this.rows
        } else if (this.typeDoc !== 'Тип документа' && this.typeTask !== 'Тип задания') {
          this.filterDoc = this.rows.filter(e => {
            return e.typedoc === this.typeDoc
          }
          ).filter(e => {
            return e.status === this.typeTask
          })
        } else if (this.typeDoc !== 'Тип документа' && this.typeTask === 'Тип задания') {
          this.filterDoc = this.rows.filter(e => {
            return e.typedoc === this.typeDoc
          }
          )
        } else if (this.typeDoc === 'Тип документа' && this.typeTask !== 'Тип задания') {
          this.filterDoc = this.rows.filter(e => {
            return e.status === this.typeTask
          }
          )
        }
      }
    },
    watch: {
      search () {
        this.filterDoc = this.rows.filter(e => {
          console.log(e.descriptionList.join(' ').indexOf(this.search) > -1)
          return ~e.descriptionList.join(' ').indexOf(this.search)
        })
      },
      typeDoc () {
        this.filter()
      },
      typeTask () {
        this.filter()
      }
    },
    computed: {
      rows () {
        return this.$store.getters.getList
      }
    },
    mounted () {
      this.filterDoc = this.$store.getters.getList
    },
    props: [
      'tableDoc'
    ]
  }
</script>

<style scoped>
    @import '../../assets/css/style.css';
    .col-12{
        padding-left: 0;
        padding-right: 0;
    }
    table {
        margin-bottom: 0;
        width:100%;
        table-layout: fixed;
    }
    .contact-list td img{
        width: 50px;
    }
    .ml-6{
        margin-left: 70px;
    }
    .mdi-star-outline{
        font-size: 1.7rem;
    }
    .form-row{
        padding-left: 10px;
    }
    .btn-filter{
        background-color: #1e88e5;
        color: white;
    }
    .mdi-star{
        font-size: 1.7rem;
    }
</style>
