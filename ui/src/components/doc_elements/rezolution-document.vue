<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row mt-3">
        </div>
        <div class="row mt-3">
            <div class="col-5 pl-3 pr-0">
                <div class="card">
                    <div class="card-body pt-0 pl-0 pr-0 ml-0 mr-0" style="background-color: #eef5f9">
                        <div class="row ml-0" style="width: 100%">
                            <div class="col-12 mb-2 border-line bg-white" >
                                <div class="d-flex flex-wrap mt-2" >
                                    <div class="mt-2 mb-3">
                                        <h5 class="card-title">Дерево поручений</h5>
                                    </div>
                                    <div class="col-1 mt-2 mb-3">
                                        <i @click="dialogFormVisible = true" class="ti-plus text-inverse  fa-lg p-r-10"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="" id="nestable">
                                    <ol class="dd-list pl-0" v-for="(user, index)  in treeOfInstructions" :key="index">
                                        <li class="dd-item" data-id="1">
                                            <div class="row plus-parent ml-3">
                                                <div
                                                    @click="editShow(index)"
                                                    class="plus-child"
                                                    v-if="!user.show">
                                                        <i class="ti-plus fa-lg"></i>
                                                </div>
                                                <div
                                                    @click="editShow(index)"
                                                    v-if="user.show"
                                                    class="plus-child">
                                                    <i class="ti-minus fa-lg"></i>
                                                </div>
                                                <div class=" bg-white w-90 border-line">
                                                    <div @click="checkRezol(user, index)" class="row mt-2">
                                                        <div class="col-2 mt-3 ml-3">
                                                            <img
                                                                :src="user.img"
                                                                alt="user"
                                                                class="img-circle mr-3">
                                                        </div>
                                                        <div class="col ml-3">
                                                            <div class="row mb-1">
                                                                <div
                                                                    class="col pr-0"
                                                                    style="color: #67757c; font-weight: 400;">
                                                                    {{user.name}}
                                                                </div>
                                                            </div>

                                                                <div class="col label label-danger " style="display: inline; color: white; font-weight: 300; font-size: 1rem">{{user.status}}</div>

                                                            <div class="row mb-1">
                                                                <div class="col pr-3" >{{user.position}}</div>
                                                            </div>
                                                            <div class="row mb-1">
                                                                <div class="col">срок {{user.data}}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ol
                                                    class="dd-list pl-0 child"
                                                    v-if="user.show"
                                                    v-for="(child, ind) in user.treeOfInstructions"
                                                    :key="ind">
                                                <li class="dd-item" data-id="1">
                                                    <div class="row plus-parent ml-3">
                                                        <div
                                                                @click="child.show=!child.show"
                                                                class="plus-child"
                                                                v-if="!child.show">
                                                            <i class="ti-plus fa-lg"></i>
                                                        </div>
                                                        <div
                                                                @click="child.show=!child.show"
                                                                v-if="child.show"
                                                                class="plus-child">
                                                            <i class="ti-minus fa-lg"></i>
                                                        </div>
                                                        <div class="bg-white w-90 border-line">
                                                            <div class="row mt-2" @click="userID = child">
                                                                <div class="col-2 mt-3 ml-3">
                                                                    <img
                                                                            :src="child.img"
                                                                            alt="user"
                                                                            class="img-circle mr-3">
                                                                </div>
                                                                <div class="col ml-3">
                                                                    <div class="row mb-1">
                                                                        <div
                                                                                class="col pr-0"
                                                                                style="color: #67757c; font-weight: 400;">
                                                                            {{child.name}}
                                                                        </div>
                                                                    </div>

                                                                    <div class="col label label-danger " style="display: inline; color: white; font-weight: 300; font-size: 1rem">{{user.status}}</div>

                                                                    <div class="row mb-1">
                                                                        <div class="col pr-3" >{{child.position}}</div>
                                                                    </div>
                                                                    <div class="row mb-1">
                                                                        <div class="col">срок {{child.data}}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           <div class="col-7 pl-3 pr-3">
                <div class="card" v-if="userID !== ''">
                    <div class="card-body">
                        <div class="row">
                                        <div class="col-12">
                                            <div class="d-flex flex-wrap">
                                                <div>
                                                    <h5 class="card-title">Содержание</h5>
                                                </div>
                                                <div class="col-1">
                                                    <i @click="dialogFormVisible = true" class="ti-marker-alt text-inverse p-r-10 fa-lg"></i>
                                                </div>
                                                <div class="col-1">
                                                    <i @click="delRezolution" class="ti-trash text-inverse p-r-10 fa-lg"></i>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col">Ответственный исполнитель:</div>
                                                <div class="col-7">
                                                    <div class="row">
                                                        <div class="col-2">
                                                                <img 
                                                                    :src="userID.img"
                                                                    alt="user" 
                                                                    class="img-circle mr-3">
                                                        </div>
                                                        <div class="col ml-3 pt-3" >
                                                            <div class="row" style="color: #67757c; font-weight: 400;">{{userID.name}}</div>
                                                            <div class="row">{{userID.position}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col">Исполнитель:</div>
                                                <div class="col-7">
                                                    <div class="row mt-3" v-for="(ex, inEx) in userID.cont.executors" :key="inEx">
                                                         <div class="col-2">
                                                                <img 
                                                                    :src="ex.img"
                                                                    alt="user" 
                                                                    class="img-circle mr-3">
                                                        </div>
                                                        <div class="col ml-3 pt-0">
                                                            <div class="row" style="color: #67757c; font-weight: 400;">{{ex.name}}</div>
                                                            <div class="row">{{ex.position}}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="row mt-3">
                                                <div class="col">Срок исполнения:</div>
                                                <div class="col-7">{{userID.cont.periodOfExecution}}</div>
                                            </div>
                                             <div class="row mt-3">
                                                <div class="col">Дата исполнения:</div>
                                                <div class="col-7">{{userID.cont.dataOfExecution}}</div>
                                            </div>
                                            <hr>
                                            <div class="row mt-3">
                                                <div class="col">Поручение:</div>
                                                <div class="col-7">
                                                    <div>
                                                        {{userID.cont.commission}}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="Добавить согласующего" :visible.sync="dialogFormVisible" width=25%>
                            <el-form>
                                <el-form-item label="Согласант">
                                    <el-select v-model="newname" placeholder="Пожалуйста выберете согласанта">
                                        <el-option
                                                :label="u.name"
                                                :value="ind"
                                                v-for="(u,ind) in userList"
                                                :key="ind">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Срок   " >
                                     <el-date-picker
                                        v-model="newday"
                                        type="date"
                                        popper-class="bottPick"
                                        value-format="dd.MM.yyyy"
                                        placeholder="Выберете дату">
                                     </el-date-picker>
                                </el-form-item>
                                <el-form-item label="Исполнитель">
                                    <el-select v-model="newExecut" placeholder="Пожалуйста выберете исполнителя">
                                        <el-option
                                                :label="u.name"
                                                :value="ind"
                                                v-for="(u,ind) in userList"
                                                :key="ind">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Срок   " >
                                    <el-date-picker
                                            v-model="newdayTwo"
                                            type="date"
                                            popper-class="bottPick"
                                            value-format="dd.MM.yyyy"
                                            placeholder="Выберете дату">
                                    </el-date-picker>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogFormVisible = false">Отмена</el-button>
                                    <el-button type="primary" @click="onSave()">Сохранить</el-button>
                                </span>
                        </el-dialog>

    </div>
</template>

<script>
export default {
  name: 'rezolution-document',
  data () {
    return {
      show: false,
      newExecut: '',
      newname: '',
      newday: '',
      newdayTwo: '',
      userIndex: '',
      dialogFormVisible: false,
      userID: '',
      userList: this.$store.getters.getUserList
    }
  },
  methods: {
    onSave () {
      this.$store.commit('addTreeOfInstructions', {
        show: false,
        img: this.userList[this.newname].img,
        name: this.userList[this.newname].name,
        status: 'На исполнение',
        position: this.userList[this.newname].position,
        data: this.newday,
        cont: {
          nameAuthor: this.userList[this.newname].name,
          img: this.userList[this.newname].img,
          executors: this.executorsList,
          periodOfExecution: this.newday,
          dataOfExecution: this.newdayTwo
        }
      })
      this.dialogFormVisible = false
      this.newname = ''
      this.newday = ''
      this.newdayTwo = ''
    },
    checkRezol (user, index) {
      this.userID = user
      this.userIndex = index
    },
    delRezolution () {
      this.treeOfInstructions.splice(this.userIndex, 1)
      this.userIndex = ''
      this.newExecut = ''
      this.userID = ''
    },
    editShow (index) {
      this.$store.commit('editShow', {
        id: index,
        show: !this.treeOfInstructions[index].show
      })
    }
  },
  computed: {
    executorsList () {
      console.log('ghfghf')
      let temp = []
      temp.push({
        img: this.userList[this.newExecut].img,
        name: this.userList[this.newExecut].name,
        position: this.userList[this.newExecut].position })
      console.log(temp)
      return temp
    },
    treeOfInstructions () {
      return this.$store.getters.getTreeOfInstructions
    }
  }
}
</script>

<style scoped>
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
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
        -webkit-box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
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
   .w-90{
       max-width: 90%;
   }
   .el-dialog{
       width: 25%;
   }

   .el-date-editor {
       width: 235px;
       float: right;
   }
    .el-select{
        display: flex;
        width: 235px;
        float: right;
    }
    hr {
        background-color: rgba(0,0,0,.125);
    }
    .bordel-line{
        border: 1px solid rgba(0,0,0,.125);
        border-color: #d7dfe3;
        border-radius: 4px;
        box-shadow: 0 5px 20px rgba(0,0,0,.05);
        -webkit-box-shadow: 0 5px 20px rgba(0,0,0,.05);
    }
    .bg-white{
        background-color: white;
    }
    .plus-parent{
        position: relative;
    }
    .plus-child{
        position: absolute;
        top: 0;
        left: -25px;
        width: 50%;
        bottom: 0;
        height: 30%;
        margin: auto;
    }
</style>
