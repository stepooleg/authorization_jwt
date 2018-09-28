<!--Для появления первой кнопки в формате 1 (осн) передается параметр :count-number=true
    Для больших пунктов передаем class="pagination-lg".
    Выравнивание производим свойством класса "justify-content"
    Количество пунктов задаем через параметр countPages-->
<template>
        <ul class="pagination btn-group mt-2" role="group" aria-label="First group">
            <template v-if="!firstNumber">
                <button
                    type="button"
                    class="btn prbg"
                    href="#"
                    tabindex="-1">1 (осн)
                </button>
            </template>
                <button
                    type="button"
                    v-for="(n, ind) in countPages"
                    class="btn btn-secondary"
                    :key="ind"
                    @click="removeNumber(n)">{{n}}
                </button>
            <button
                    type="button"
                    class="btn btn-secondary"
                    href="#">...
            </button>
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
.prbg{
    background-color: #1e88e5;
    color: white;
}
::selection {
    background-color: #1e88e5;
    color: white;
}
</style>
