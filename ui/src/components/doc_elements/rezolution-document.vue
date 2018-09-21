<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row mt-3">
            <div class="col-3">
                <button type="button" class="btn btn-block btn-outline-info">Добавить поручение</button>
            </div>
            <div class="col-9"></div>
        </div>
        <div class="row mt-3">
            <div class="col-5 pl-3 pr-0">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex flex-wrap">
                                    <div>
                                        <h5 class="card-title">Дерево поручений</h5>
                                    </div>
                                </div>
                                <hr>
                            </div>
                            <div class="col-12">
                                <div class="myadmin-dd dd" id="nestable">
                                    <ol class="dd-list pl-0" v-for="(user, index)  in treeOfInstructions" :key="index">
                                        <li class="dd-item" data-id="1">
                                            <div class="row">
                                                <i
                                                  @click="show=!show"
                                                  class="mdi mdi-plus mt-4 fa-lg"
                                                  v-if="!show" ></i>
                                                <i
                                                  @click="show=!show"
                                                  class="mdi mdi-minus mt-4 fa-lg"
                                                  v-if="show" ></i>
                                                <div class="dd-handle w-90">
                                                    <div @click="userID=index" class="row">
                                                        <div class="col-2">
                                                            <img
                                                                :src="user.img"
                                                                alt="user"
                                                                class="img-circle mr-3">
                                                        </div>
                                                        <div class="col">
                                                            <div class="row">
                                                                <div class="col pr-0">{{user.name}}</div>
                                                                <div class="col">{{user.status}}</div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col pr-0">{{user.position}}</div>
                                                                <div class="col">срок {{user.data}}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ol
                                                    class="dd-list pl-0 child"
                                                    v-if="show"
                                                    v-for="(child, ind) in user.cont"
                                                    :key="ind">
                                                <li class="dd-item" data-id="1">
                                                    <div class="row">
                                                        <i
                                                                @click="show=!show"
                                                                class="mdi mdi-plus mt-4 fa-lg"
                                                                v-if="!show" ></i>
                                                        <i
                                                                @click="show=!show"
                                                                class="mdi mdi-minus mt-4 fa-lg"
                                                                v-if="show" ></i>
                                                        <div class="dd-handle w-90">
                                                            <div class="row " @click="userID=ind">
                                                                <div class="col-2">
                                                                    <img
                                                                            :src="child.img"
                                                                            alt="user"
                                                                            class="img-circle mr-3">
                                                                </div>
                                                                <div class="col">
                                                                    <div class="row">
                                                                        <div class="col pr-0">{{child.name}}</div>
                                                                        <div class="col">{{child.status}}</div>
                                                                    </div>
                                                                    <div class="row">
                                                                        <div class="col pr-0">{{child.position}}</div>
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
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                                        <div class="col-12">
                                            <div class="d-flex flex-wrap">
                                                <div>
                                                    <h5 class="card-title">Содержание</h5>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>
                                        <div
                                                class="col-12"
                                                v-for="(card, cardId) in treeOfInstructions[userID].cont"
                                                :key="cardId">
                                            <div class="row">
                                                <div class="col">Ответственный исполнитель:</div>
                                                <div class="col-7">
                                                    <div class="row">
                                                        <div class="col-2">
                                                                <img 
                                                                    :src="card.image"
                                                                    alt="user" 
                                                                    class="img-circle mr-3">
                                                        </div>
                                                        <div class="col ml-3 pt-3">
                                                            {{card.nameAuthor}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col">Исполнитель:</div>
                                                <div class="col-7">
                                                    <div class="row mt-3" v-if="(ex, inEx) in card" :key="inEx">
                                                         <div class="col-2">
                                                                <img 
                                                                    :src="ex.img"
                                                                    alt="user" 
                                                                    class="img-circle mr-3">
                                                        </div>
                                                        <div class="col ml-3 pt-3">
                                                            {{ex.name}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="row mt-3">
                                                <div class="col">Срок исполнения:</div>
                                                <div class="col-7">{{card.periodOfExecution}}</div>
                                            </div>
                                             <div class="row mt-3">
                                                <div class="col">Дата исполнения:</div>
                                                <div class="col-7">{{card.dataOfExecution}}</div>
                                            </div>
                                            <div class="row mt-3">
                                                <div class="col">Поручение:</div>
                                                <div class="col-7">
                                                    <textarea
                                                            rows='5'
                                                            class="form-control"
                                                            v-model="card.commission">
                                                    </textarea>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'rezolution-document',
  data () {
    return {
      show: false,
      userID: '',
      treeOfInstructions: [{
        img: require('../../assets/images/users/1.jpg'),
        name: 'Егоров М.А.',
        status: 'На исполнение',
        position: 'руководитель проекта',
        data: 'срок 01.01.2015г.',
        cont: {
          image: require('../../assets/images/users/1.jpg'),
          nameAuthor: 'Егоров М.А.',
          executors: [
               {img: require('../../assets/images/users/4.jpg'), name: 'Щекотов Д.Н.'},
               {img: require('../../assets/images/users/2.jpg'), name: 'Боцанова С.С.'}
          ],
          periodOfExecution: '25.12.2018г.',
          dataOfExecution: '25.12.2018г.',
          commission: 'Прошу разобраться и доложить'
        },
        child: [{
          img: require('../../assets/images/users/1.jpg'),
          name: 'Егоров М.А.',
          status: 'На исполнение',
          position: 'руководитель проекта',
          data: 'срок 01.01.2015г.',
          cont: {
            image: require('../../assets/images/users/1.jpg'),
            nameAuthor: 'Егоров М.А.',
            executors: [
                    {img: require('../../assets/images/users/4.jpg'), name: 'Щекотов Д.Н.'},
                    {img: require('../../assets/images/users/2.jpg'), name: 'Боцанова С.С.'}
            ],
            periodOfExecution: '25.12.2018г.',
            dataOfExecution: '25.12.2018г.',
            commission: 'Прошу разобраться и доложить'
          }
        }]
      }]
    }
  },
  methods: {
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
   .w-90{
       max-width: 90%;
   }
</style>
