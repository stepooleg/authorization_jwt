<template>
    <!-- Модуль ряда кнопок центрального блока-->
    <div class="col-6 toggle-btn-line">
        <ul>
            <li class="mr-2">
                <button href="#" class="btn">
                    <i class="mdi mdi-plus-box-outline"></i>
                </button>
            </li>
            <li class="mr-2">
                <button href="#" class="btn">
                    <i class="mdi mdi-email-outline"></i>
                </button>
            </li>
            <li class="mr-2">
                <button href="#" class="btn">
                    <i class="mdi mdi-link-variant"></i>
                </button>
            </li>
            <li class="mr-2">
                <button href="#" class="btn">
                    <i class="mdi mdi-printer"></i>
                </button>
            </li>
            <li class="mr-2">
                <button href="#" class="btn">
                    <i class="mdi mdi-star-outline"></i>
                </button>
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
    i{
        font-size: 1.5rem;
    }

    .btn:hover{
        background-color: #007bff;
        color: white;
    }

</style>
