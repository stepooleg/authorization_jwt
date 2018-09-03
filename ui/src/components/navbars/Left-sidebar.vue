<template>
    <!--Левый сайдбар с аккордеон меню -->
    <div style="
            position: relative;
            top: -16px;
            overflow: visible;
            left: 15px;
            width: auto;
            min-height: 100%;
            font-size: 1.2rem; "
         class="slimScrollDiv">
        <ul class="list-group">
            <li class="list-group-item pr-0" style="width: 90%">
                <btn-new-document></btn-new-document>
            </li>
            <li class="list-group-item pr-0" style="width: 90%; flex: 1">
                <left-accordeon-menu></left-accordeon-menu>
            </li>

        </ul>
    </div>
</template>

<script>
  export default {
    name: 'left-sidebar'
  }
</script>

<style scoped>
    @import '../../assets/css/style.css';
    body{
        font-size: 1.2rem;
    }
    .list-group{
        min-height: 100%;
    }

</style>
