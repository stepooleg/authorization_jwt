<template>
    <!-- Модуль карточек Листа согласования -->

    <div class="card ml-2 mb-3 small-tab" style="max-width: 20rem;">
        <div class="card-header">
            <span class="text-muted">Срок:</span> {{cardIn.r_creation_date | moment("DD-MM-YYYY")}}
            <br>
            <span class="text-muted">Дата согласования:</span> {{cardIn.r_modify_date | moment("DD-MM-YYYY")}}
        </div>
        <div class="card-body">
            <h5 class="card-title"> {{cardIn.r_creator_name}}
                <span class="badge badge-pill badge-success float-right">
                    {{cardIn.dss_kind}}
                </span>
            </h5>
            <p class="card-text ">
                <b>
                    <div class="row">
                        <div class="col">
                            <div class="font-tab-mid float-left mr-3">
                                <i class="far fa-user-circle fa-3x text-muted"></i>
                            </div>
                            <div class="">
                                <span class="text-muted small-tab">
                                    {{cardIn.dss_dep}}
                                </span>
                                <template>
                                    <div class="row mt-3 font-tab-mid">
                                        <div class="col-10">
                                            <span class="badge badge-pill badge-light float-left ml-3 mb-3">
                                                Исправить абзац №1
                                            </span>
                                            <span class="badge badge-pill badge-light float-right mr-3">
                                                Исправлен!
                                            </span>
                                        </div>
                                    </div>
                                </template>

                            </div>
                        </div>
                    </div>
                </b>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'document-card-log',
    props: [
      'cardIn'
    ]
  }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
    body{
        background-color: #eef5f9;
        font-family: "Poppins", sans-serif;
    }
    .bg-primary-new{
        background-color: #1e88e5;
    }
    .btn-primary-new{
        color: #455a64;
    }
    .show {
        display: block;
    }
    .slidebar{
        position: fixed;
        z-index: 1500;
    }
    .box{
        box-model: border-box;
        border: 3px solid transparent;
        background-clip:padding-box;
    }
    .font-tab{
        font-size: 1.1rem;
    }
    .font-tab-mid{
        margin-top: 15px;
        font-size: 1.1rem;
    }
    .text-blue{
        color: #1e88e5;
    }
    .small-tab{
        font-size: 0.9rem;
    }
    .mid-tab{
        font-size: 1rem;
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
    .date-field-r{
        position: absolute;
        float: right;
        right: 20px;
        top: 10px;
    }
    .fr{
        float: right;
        margin-left: 10px;
        margin-top: 5px;
    }
    .card-header{
        color: #455a64;
        font-weight: bold;
    }
    .c-feedback{
        background-color: aqua;
    }
    .border-weight{
        float: right;

    }
    .btn-header{
        border: 0px;
    }
</style>
