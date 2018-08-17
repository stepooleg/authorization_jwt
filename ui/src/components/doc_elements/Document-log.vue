<template>
    <!--Блок карточек Лиска согласования-->
    <div class="bg-light">
        <div class="col-12 text-blue">
          <toggle-btn-line-log></toggle-btn-line-log>
            <div class="row mt-2">
                <div class="col-12 bg-white ml-2">
                    <div class="title-log text-blue">
                        <b>Этап 1:</b>
                    </div>
                    <div class="body-log border-left border-weight border-primary">
                        <div>
                            <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                            <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                            <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                            <document-card-log :card-in=docCardIn class="c-feedback ml-4"></document-card-log>
                        </div>
                    </div>
                    <div class="title-log text-blue">
                        <b>Этап 2:</b>
                    </div>
                    <div class="body-log border-left border-weight border-primary">
                        <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                        <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                        <document-card-log :card-in=docCardIn class="bg-light"></document-card-log>
                        <document-card-log :card-in=docCardIn class="c-feedback ml-4"></document-card-log>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import ToggleBtnLineLog from '../buttons/Btn-toggle-log'
  import DocumentCardLog from './Document-card-log'
  export default {
    name: 'document-log',
    data () {
      return {
        cardIn: this.docCardIn
      }
    },
    props: [
      'docCardIn'
    ],
    components: {DocumentCardLog, ToggleBtnLineLog}
  }
</script>

<style scoped>
    .text-blue{
        color: #1e88e5;
    }

</style>
