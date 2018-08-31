<template>
    <!-- Модуль кнопки создания документа-->
    <div class="row mt-3 mb-3">
        <div class="col-4 text-right">
        <button v-b-popover.clic.bottom.html="popoverMethod"
                class="btn btn-info btn-circle btn-lg waves-effect waves-light"
                type="button"
                title="Выберете тип документа">
            <i class="mdi mdi-plus"></i>
        </button>
        </div>
        <div class="mt-2 create_btn" v-show="show">Создать</div>
    </div>
</template>

<script>
  export default {
    name: 'btn-new-document',
    methods: {
      popoverMethod () {
        return '<div>' +
                    '<ul class=\'txt\'>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-right\'/></i> Входящий документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-left\'/></i> Исходящий документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-exchange-alt\'/></i> Внутренний документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-down\'/></i> Распорядительный документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-long-arrow-alt-right\'/></i> Инициативная задача</a> </li>' +
                    '</ul>' +
                '</div>'
      }
    },
    computed: {
      show () {
        return this.$store.getters.readStatus
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
