<template>
    <div class="row">
        <div class="col-lg-12 bg-white border-b">
            <table class="table table-borderless ">
                <tr class="row">
                    <td class="col-lg-4 text-muted">Тип задания:</td>
                    <td class="col-lg-8 text-blue" ><b>{{status.status}}</b></td>
                </tr>
                <tr class="row">
                    <td class="col-lg-4 text-muted">Статус:</td>
                    <td class="col-lg-8 "><b>В работе</b></td>
                </tr>
                <tr class="row">
                    <td class="col-lg-4 text-muted">
                        Автор:
                    </td>
                    <td class="col-lg-8" >
                        <b>
                            <div class="row">
                                <div class="col-lg-12">
                                    <img
                                            v-bind:src="status.img.src"
                                            alt="user"
                                            class="img-circle mr-3"
                                            style="width: 70px"/>
                                </div>
                                <div class="col-lg-12">
                                    <span class="summary">{{status.author}}</span>
                                    <br>
                                    <span class="text-muted small-tab" v-for="(line, ind) in status.typeList" :key="ind">{{line}}<br>
                                    </span>
                                </div>
                            </div>
                        </b>
                    </td>
                </tr>
                <tr class="row">
                    <td class="col-lg-4 text-muted">
                        <b class="text-muted">Дата поступления:</b>
                    </td>
                    <td class="col-lg-8 ">
                        <b>
                            <span class="text-muted">{{status.date | moment("DD-MM-YYYY")}}</span>
                        </b>
                    </td>
                </tr>
                <tr class="row">
                    <td class="col-lg-4 text-muted">Принято в работу:</td>
                    <td class="col-lg-8 "><b>{{status.date | moment("DD-MM-YYYY")}}</b></td>
                </tr>
                <tr class="row">
                    <td class="col-lg-4 text-muted">Срок:</td>
                    <td class="col-lg-8 text-blue">
                        <div><b>{{status.dedline}}</b></div>
                        <span class="text-muted">Осталось 2 дня</span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'table-status-doc',
    props: [
      'status'
    ]
  }
</script>

<style scoped>

    .text-blue{
        color: #1e88e5;
    }
    .small-tab{
        font-size: 0.9rem;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }

</style>
