<template>
        <div class="col-4 text-right mt-2" v-bind:class="{'show': views}" >
        <button @click="views=!views"
        aria-haspopup="true" 
                data-toggle="dropdown"
                class="btn btn-info mdi mdi-menu waves-effect waves-light"
                type="button"
                title="Выберете тип документа">
        </button>
        <div class="dropdown-menu animated flipInX" :class="{'show': views}" x-placement="bottom-start" style="z-index: 100000; position: absolute; transform: translate3d(0px, 37px, 0px); top: 30px; left: 50px; will-change: transform;">
                                        <a class="dropdown-item" href="#">Основной контент</a>
                                        <a class="dropdown-item" href="#">Приложение 1.docx</a>
                                        <a class="dropdown-item" href="#">Проект дополнительного</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Приложение 5.xls</a>
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
    i{
        color: #67757c;
        font-size: 1.5rem;
    }
    i:hover{
        color: #0d47a1;
        cursor: pointer;
        background-color: #007bff;
        color: white;
    }
</style>
