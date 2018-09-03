<template>
    <!-- Модуль кнопки связанных документов-->
        <span v-b-popover.clic.bottom.html="popoverMethod"
                class="mr-1 my-2 my-sm-0"
                title="Выберете связанный документ:">
             <i class="btn mdi mdi-menu "></i>
        </span>
</template>

<script>
  export default {
    name: 'btn-new-document',
    methods: {
      popoverMethod () {
        return '<div>' +
                    '<ul>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-right\'> </i>  Основной контент </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-left\'> </i>  Приложение 1.docx </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-exchange-alt\'> </i>  Проект дополнительного </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-down\'> </i>  Приложение 5.xls </a> </li>' +
                    '</ul>' +
                '</div>'
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
