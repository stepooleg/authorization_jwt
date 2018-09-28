<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row mt-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-3">
                        <button
                                @click="addStage"
                                type="button"
                                class="btn btn-block btn-outline-info">
                            Добавить этап
                        </button>
                    </div>
                    <div class="col-8"></div>
                    <div class="col-1 pt-1">
                        <i class="mdi mdi-printer fa-lg" style="color: #1e88e5"></i>
                    </div>
                </div>
            </div>
            <div class="col-9"></div>
        </div>
        <div class="row mt-3">
            <div
                id="basicgrid"
                class="jsgrid"
                style="position: relative;  width: 100%;"
                >

            <div class="jsgrid-grid-body"  v-for="(n,i) in form" :key="i">
                <div class="jsgrid-grid-header"  >
                     <span class="ml-3">Этап № {{i+1}}</span>
                     <i @click="checkAdd(i)"
                        class="mdi mdi-account-plus ml-4 fa-lg"
                        v-if="!show" ></i>
                     <i @click="closeTable(i)"
                       class="mdi mdi-close mr-2 fa-lg " style="float: right"></i>

                </div>
                <table class="jsgrid-table table table-striped table-hover">
                    <tr class="jsgrid-header-row">
                        <th class="jsgrid-header-cell" style="width: 2%;"></th>
                        <th class="jsgrid-header-cell jsgrid-align-right" style="width: 15%;">Согласующий</th>
                        <th class="jsgrid-header-cell" style="width: 10%;">Статус</th>
                        <th class="jsgrid-header-cell jsgrid-align-center" style="width: 6%;">Срок</th>
                        <th class="jsgrid-header-cell jsgrid-align-center" style="width: 100px;">Решение</th>
                        <th class="jsgrid-header-cell" style="width: 2%;"></th>
                    </tr>
                    <tbody>

                        <tr class="jsgrid-row" v-for="(row, index) in n" :key="index">
                            <td
                                class="jsgrid-cell"
                                style="width: 2%">
                                    <i @click="show=!show"
                                        class="mdi mdi-plus mt-4 fa-lg"
                                        v-if="show" ></i>
                            </td>
                            <td class="jsgrid-cell" style="width: 15%">
                                <div class="row">
                                    <div class="col-3">
                                        <img
                                        :src="row.img"
                                        alt="user"
                                        class="img-circle mr-3">
                                    </div>
                                    <div class="col">
                                        <div class="row">{{row.name}}</div>
                                        <div class="row">{{row.position}}</div>
                                    </div>
                                </div>
                            </td>
                            <td class="jsgrid-cell" style="width: 10%;">
                                <span class="label label-danger">
                                    {{row.status}}
                                </span>
                                {{row.dateIn}}
                            </td>
                            <td class="jsgrid-cell jsgrid-align-center" style="width: 6%;">{{row.term}} {{row.date}}</td>
                            <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">
                                <input type="checkbox" disabled="">
                            </td>
                            <td class="jsgrid-cell jsgrid-control-field jsgrid-align-center" style="width: 2%;">
                                <button
                                        @click="deleteRow(index,i)"
                                        class="jsgrid-button jsgrid-delete-button mt-3"
                                        type="button"
                                        title="Delete">
                                </button>
                            </td>
                        </tr>
                        <el-dialog title="Добавить согласующего" :visible.sync="dialogFormVisible">
                            <el-form :model="modal">
                                <el-form-item label="Согласант" :label-width="formLabelWidth">
                                    <el-select v-model="newname" placeholder="Пожалуйста выберете согласанта">
                                        <el-option
                                                :label="u.name"
                                                :value="ind"
                                                v-for="(u,ind) in users"
                                                :key="ind">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Срок" :label-width="formLabelWidth">
                                    <el-input v-model="newday"></el-input>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">Отмена</el-button>
                                    <el-button type="primary" @click="onSave()">Сохранить</el-button>
                                </span>
                        </el-dialog>
                    </tbody>
                </table>
            </div>
            <div class="jsgrid-load-shader" style="display: none; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 1000;"></div><div class="jsgrid-load-panel" style="display: none; position: absolute; top: 50%; left: 50%; z-index: 1000;">Please, wait...
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'reconciliation-document',
  data () {
    return {
      show: false,
      chekId: '',
      dialogFormVisible: false,
      newname: '',
      newday: '',
      modal: {},
      form: [
        []
      ],
      users: [{
        name: 'Егоров М.А.',
        position: 'руководитель проектов',
        img: require('../../assets/images/users/1.jpg')
      }, {
        name: 'Рогов Д.Н.',
        position: 'директор департамента',
        img: require('../../assets/images/users/4.jpg')
      }, {
        name: 'Щекотов Р.A.',
        position: 'директор департамента',
        img: require('../../assets/images/users/5.jpg')
      }],
      formLabelWidth: '120px'
    }
  },
  methods: {
    onSave () {
      this.form[this.chekId].push({
        name: this.users[this.newname].name,
        newday: this.newday + 'дней',
        position: this.users[this.newname].position,
        date: '10.03.2018',
        dateIn: 'Отправленно: 01.03.2018г.',
        delivery: false,
        status: 'На согласовании',
        resolution: '',
        img: this.users[this.newname].img
      })
      this.dialogFormVisible = false
      this.newname = ''
      this.newday = ''
    },
    addStage () {
      this.form.push([])
    },
    deleteRow (i, stage) {
      this.form[stage].splice(i, 1)
    },
    closeTable (stage) {
      console.log(this.form)
      console.log(stage)
      this.form.splice(this.form.indexOf(stage), 1)
    },
    checkAdd (i) {
      this.dialogFormVisible = true
      this.chekId = i
    }
  }
}
</script>

<style scoped>
@import url("../../assets/plugins/jsgrid/jsgrid.min.css");
@import url("../../assets/plugins/jsgrid/jsgrid-theme.min.css");
    .card{
        font-size: 1rem;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list{
        color: #455a64;
        list-style-type: none;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }
    .border-line{
        border: 1px solid rgba(0,0,0,.125);
        border-color: #d7dfe3;
        border-radius: 4px;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
    }
    li {
    list-style-type: none;
   }
   img{
       width: 50px;
       height: 50px;
   }
   .child{
       margin-left: 20px;
   }
   .v-card{
       background-color: white;
       padding-right: 0;
   }
   .el-select{
       display: block;
   }
    .jsgrid-grid-header{
        overflow: hidden;
    }
</style>
