<template>
    <!-- Модуль ряда кнопок центрального блока-->
    <div class="col-5 toggle-btn-line">
        <ul>
            <li>
                <a href="#">
                    <i class="fas fa-plus-square fa-2x text-blue mr-3 ac"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-envelope fa-2x text-blue mr-3"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-link fa-2x text-blue mr-3"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-print fa-2x text-blue mr-3"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class=" star_t far fa-star fa-2x text-blue mr-3"></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'toggle-btn-line'
  }
</script>

<style scoped>
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }
</style>
