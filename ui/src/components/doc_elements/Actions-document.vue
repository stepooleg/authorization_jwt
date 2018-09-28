<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row">
            <div class="col-12 text-muted mb-2 ml-4">
                Действия:
            </div>
        </div>

        <ul class="feeds">
            <li>
                <div class="bg-info row ml-2"><i class="mdi mdi-comment-multiple-outline text-white"></i></div> Оставить комментарий</li>
            <li>
                <div class="bg-success row ml-2"><i class="mdi mdi-check text-white"></i></div> Согласовать</li>
            <li>
                <div class="bg-warning row ml-2"><i class="mdi mdi-account-plus text-white"></i></div> На доп. согласование</li>
            <li>
                <div class="bg-danger row ml-2"><i class="mdi mdi-thumb-down text-white"></i></div> На доработку</li>
        </ul>

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
