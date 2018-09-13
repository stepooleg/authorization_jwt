<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row">
            <div class="col-12 text-muted mb-2">
                Действия:
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-2 collapse-list">
                        <span class="mdi mdi-comment-multiple-outline fa-2x"></span>
                    </div>
                    <div class="col-10">
                        <a href="#" class="badge badge-pill badge-info font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            Оставить комментарий
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-2 collapse-list">
                        <span class="mdi mdi-check fa-2x"></span>
                    </div>
                    <div class="col-10">
                        <a href="#" class="badge badge-pill badge-success font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            Согласовать
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-2 collapse-list">
                        <span class="mdi mdi-account-plus fa-2x"></span>
                    </div>
                    <div class="col-10">
                        <a href="#" class="badge badge-pill badge-warning font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            На доп. согласование
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <div class="row">
                    <div class="col-2 collapse-list">
                        <span class="mdi mdi-thumb-down fa-2x"></span>
                    </div>
                    <div class="col-10">
                        <a href="#" class="badge badge-pill badge-danger font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            На доработку
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'actions-document'
  }
</script>

<style scoped>
    .font-tab-mid{
        margin-top: 15px;
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
</style>
