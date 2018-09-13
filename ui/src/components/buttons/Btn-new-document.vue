<template>
    <!-- Модуль кнопки создания документа-->
    <div class="row mt-3 mb-3">
        <div class="col-4 text-right" v-bind:class="{'show': views}" >
        <button @click="views=!views"
        aria-haspopup="true" 
                data-toggle="dropdown"
                class="btn btn-info btn-circle btn-lg waves-effect waves-light"
                type="button"
                title="Выберете тип документа">
            <i class="mdi mdi-plus"></i>
        </button>
        <div class="dropdown-menu animated flipInX" :class="{'show': views}" x-placement="bottom-start" style="z-index: 100000; position: absolute; transform: translate3d(0px, 37px, 0px); top: 30px; left: 50px; will-change: transform;">
                                        <router-link 
                                            to="ddt_incoming/create" 
                                            class="dropdown-item">Входящий документ
                                        </router-link>
                                        <a class="dropdown-item" href="#">Исходящий документ</a>
                                        <a class="dropdown-item" href="#">Внутренний документ</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Распорядительный документ</a>
                                        <a class="dropdown-item" href="#">Инициативная задача</a>
                                    </div>
        </div>
                                
    </div>
</template>

<script>
  export default {
    name: 'btn-new-document',
    data () {
      return {
        views: false
      }
    }
  }
</script>

<style scoped>
    @import '../../assets/css/style.css';
    .col-4{
        padding-left: 0;
    }
    .txt{
        font-size: 18px;
    }
</style>
