<template>
     <!--Блок вывода содерщимого документа-->
    <div class="col col-lg-6 bg-light ">
        <div class="col-lg-12">
            <div class="row mt-3 text-right">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-1">
                            <btn-connected-document></btn-connected-document>
                        </div>
                        <div class="col-lg-5">
                            <paginator-bot
                                    :count-pages=5
                                    :first-number="false">
                            </paginator-bot>
                        </div>
                        <toggle-btn-line></toggle-btn-line>
                    </div>
                </div>
            </div>
            <div class="row">
                <document-frame></document-frame>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'central-document-bar'
  }
</script>

<style scoped>

</style>
