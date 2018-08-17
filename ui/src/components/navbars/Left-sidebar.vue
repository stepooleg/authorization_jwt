<template>
    <!--Левый сайдбар с аккордеон меню -->
    <div class="col col-lg-2">
        <ul class="list-group">
            <li class="list-group-item">
                <btn-new-document></btn-new-document>
            </li>
            <li class="list-group-item">
                <left-accordeon-menu></left-accordeon-menu>
            </li>
            <li class="list-group-item">
                <left-bottom-accordeon-menu></left-bottom-accordeon-menu>
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

</style>
