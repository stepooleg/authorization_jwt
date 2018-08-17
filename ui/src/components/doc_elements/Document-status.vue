<template>
    <!--Модуль блока согласования вкладка Задание -->
    <div class="row">
        <div class="col-12 bg-light border-b">
            <table class="table table-borderless ">
                <tr class="row">
                    <td class="col-4 text-muted">Тип задания:</td>
                    <td class="col-8 text-blue"><b>На согласование</b></td>
                </tr>
                <tr class="row">
                    <td class="col-4 text-muted">Статус:</td>
                    <td class="col-8 "><b>В работе</b></td>
                </tr>
                <tr class="row">
                    <td class="col-4 text-muted">Автор:</td>
                    <td class="col-8 ">
                        <b>
                            <div class="row">
                                <div class="col-3">
                                    <i class="far fa-user-circle fa-3x "></i>
                                </div>
                                <div class="col-9">
                                    <span class="summary">Егоров М.А.</span>
                                    <br>
                                    <span class="text-muted small-tab">Заместитель генерального директора по стратегическому развитию</span>
                                </div>
                            </div>
                        </b>
                    </td>
                </tr>
                <tr class="row">
                    <td class="col-4 text-muted">Дата поступления:</td>
                    <td class="col-8 "><b>01.07.2018</b></td>
                </tr>
                <tr class="row">
                    <td class="col-4 text-muted">Принято в работу:</td>
                    <td class="col-8 "><b>01.07.2018</b></td>
                </tr>
                <tr class="row">
                    <td class="col-4 text-muted">Срок:</td>
                    <td class="col-8 text-blue">
                        <b>03.07.2018</b>
                        <span class="text-muted">Осталось 2 дня</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'status-document'
  }
</script>

<style scoped>

</style>
