<template>
     <!--Блок вывода содерщимого документа-->
    <div class="col ">
        <div class="col-lg-12">
            <div class="row mt-3 text-right">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-1">
                            <btn-connected-document v-if="statusDoc !=='create'"></btn-connected-document>
                        </div>
                        <template v-if="statusDoc !=='create'">
                        <div class="col-5">
                            <paginator-bot
                                    :count-pages=5
                                    :first-number="false">
                            </paginator-bot>
                        </div>
                        <toggle-btn-line></toggle-btn-line>
                        </template>
                    </div>
                </div>
            </div>
            <div class="row" v-if="statusDoc ==='create'">
                <document-frame-create></document-frame-create>
            </div>
            <div class="row" v-else>
                <document-frame></document-frame>
            </div>
        </div>
    </div>
</template>

<script>
import DocumentFrameCreate from '../doc_elements/Document-frame-create'
export default {
  name: 'central-document-bar',
  props: [
    'statusDoc'
  ],
  components: {
    DocumentFrameCreate
  }
}
</script>

<style scoped>

</style>
