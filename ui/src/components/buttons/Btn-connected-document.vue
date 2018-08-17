<template>
    <!-- Модуль кнопки связанных документов-->
        <button v-b-popover.clic.bottom.html="popoverMethod"
                class="btn btn-outline-primary btn-primary mr-1 my-2 my-sm-0 btn-header"
                type="button"
                title="Выберете связанный документ:"
                >
            <i class="fas fa-bars fa-2x"></i>
        </button>
</template>

<script>
  export default {
    name: 'btn-new-document',
    methods: {
      popoverMethod () {
        return '<div>' +
                    '<ul>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-arrow-alt-circle-right\'></i>  Основной контент </a> </li>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-arrow-alt-circle-left\'></i></i>  Приложение 1.docx </a> </li>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-exchange-alt\'></i></i>  Проект дополнительного </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-down\'></i></i>  Приложение 5.xls </a> </li>' +
                    '</ul>' +
                '</div>'
      }
    }
  }
</script>

<style scoped>

</style>
