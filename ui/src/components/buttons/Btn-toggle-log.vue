<template>
    <!-- Модуль ряда кнопок правого блока-->
    <div class="row">
        <div class="col-12 bg-white icon-btn">
            <a>
                <i class="mdi mdi-format-list-bulleted mt-3 mr-3"></i>
            </a>
            <a>
                <i class="mdi mdi-account-plus mt-3 mr-3" ></i>
            </a>
            <a>
                <i class="mdi mdi-logout mt-3 mr-3"></i>
            </a>
            <a>
                <i class="mdi mdi-reply-all mt-3 mr-3"></i>
            </a>
            <a>
                <i class="mdi mdi-printer mt-3"></i>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'toggle-btn-line-log'
  }
</script>

<style scoped>
.icon-btn{
    font-size: 1.5rem;
}
</style>
