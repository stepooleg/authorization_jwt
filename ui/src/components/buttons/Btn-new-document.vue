<template>
    <!-- Модуль кнопки создания документа-->
    <div class="row mt-3 mb-3">
        <button v-b-popover.clic.bottom.html="popoverMethod"
                class="btn btn-outline-primary btn-primary mr-1 my-2 my-sm-0 btn-header"
                type="button"
                title="Выберете тип документа"
                >
            <i class="fas fa-plus-circle fa-3x"></i>
        </button>
        <div class="mt-2 create_btn">Создать</div>
    </div>
</template>

<script>
  export default {
    name: 'btn-new-document',
    methods: {
      popoverMethod () {
        return '<div>' +
                    '<ul>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-arrow-alt-circle-right\'></i>Входящий документ </a> </li>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-arrow-alt-circle-left\'></i></i> Исходящий документ </a> </li>' +
                        '<li> <a href=\'#\'><i class=\'fas fa-exchange-alt\'></i></i> Внутренний документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-arrow-alt-circle-down\'></i></i> Распорядительный документ </a> </li>' +
                        '<li> <a href=\'#\'> <i class=\'fas fa-long-arrow-alt-right\'></i></i>Инициативная задача</a> </li>' +
                    '</ul>' +
                '</div>'
      }
    }
  }
</script>

<style scoped>

</style>
