<!--Для появления первой кнопки в формате 1 (осн) передается параметр :count-number=true
    Для больших пунктов передаем class="pagination-lg".
    Выравнивание производим свойством класса "justify-content"
    Количество пунктов задаем через параметр countPages-->
<template>
        <ul class="pagination ">
            <template v-if="!firstNumber">
                <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">1 (осн)</a>
                </li>
            </template>

            <li class="page-item" v-for="n in countPages">
                <a class="page-link" @click="removeNumber(n)">{{n}}</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">...</a>
            </li>
        </ul>
</template>

<script>
  export default {
    name: 'paginator-bot',
    methods: {
      removeNumber (number) {
        this.$emit('remove', number)
        console.log(number + 'pag')
      }
    },
    props: [
      'firstNumber',
      'countPages'
    ]
  }
</script>

<style scoped>

</style>
