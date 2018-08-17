<template>
    <!-- Элементы фильтра списка документов -->
    <div class="col col-12">
        <form>
            <div class="form-row align-items-center bg-light p-1">
                <div class="col-sm-2 my-1">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                               id="autoSizingCheck2">
                        <label class="form-check-label" for="autoSizingCheck2">
                            Только просмотренные
                        </label>
                    </div>
                </div>
                <div class="col-sm-2 my-1">
                    <label class="sr-only" for="inlineFormCustomSelect">Список
                        заданий</label>
                    <select class="form-control mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Тип задания</option>
                        <option value="1">Первый</option>
                        <option value="2">Второй</option>
                        <option value="3">Третий</option>
                    </select>
                </div>
                <div class="col-sm-2 my-1">
                    <label class="sr-only" for="inlineFormCustomSelectDoc">Список
                        документов</label>
                    <select class="form-control mr-sm-2" id="inlineFormCustomSelectDoc">
                        <option selected>Тип документа</option>
                        <option value="1">Первый</option>
                        <option value="2">Второй</option>
                        <option value="3">Третий</option>
                    </select>
                </div>
                <div class="col-sm-4 my-1">
                    <label class="sr-only" for="inlineFormInputType">Поиск</label>
                    <input type="text" class="form-control" id="inlineFormInputType"
                           placeholder="">
                </div>
                <div class="col-sm-2 my-1">
                    <button type="submit" class="btn btn-primary">Отфильтровать</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  export default {
    name: 'doc-filter'
  }
</script>

<style scoped>

</style>
