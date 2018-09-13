<template>
    <!--Блок парасемров документа на вкладке Основные-->
    <div class="col-11 bg-white ml-3">
        <div class="row mt-4 ">
            <div class="col text-muted pl-2 pr-0">Статус документа:
           <span class="text-blue pl-4"> {{statusDoc.status}}</span>
           </div>
            
        </div>
        <div class="row mt-2 ">
            <div class="col-6 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Рег номер</label>
                    <input 
                        v-model="reg_number" 
                        type="text" 
                        id="Number" 
                        class="form-control" 
                        placeholder="123">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
            <div class="col-6 text-muted">
                <label class="control-label">Дата:</label>
            <input 
                type="text" 
                class="form-control text-blue" 
                :value="datepick" 
                @click="pickdate=!pickdate" 
                placeholder="гггг-мм-дд">
            <div 
                v-if="pickdate" 
                style="
                    text-transform: capitalize; 
                    background-color: white; 
                    position: absolute; 
                    top: 60px; 
                    right: 10px; 
                    z-index: 10000;">
            <v-flex xs12 sm6 class="hidden-xs-only">
                <v-date-picker 
                    style="text-transform: capitalize;" 
                    locale ="ru-RU" 
                    v-model="reg_date" 
                    color="blue lighten-1" 
                    header-color="blue">
                </v-date-picker>
            </v-flex>
            </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-6 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">В ответ на:</label>
                    <input 
                        v-model="answer_doc" 
                        type="text" 
                        id="answer_doc" 
                        class="form-control" 
                        placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
            <div class="col-6 text-muted">
                <label class="control-label">от:</label>
            <input 
                type="text" 
                class="form-control text-blue" 
                :value="datepickanswer" 
                @click="pickdateanswer=!pickdateanswer" 
                placeholder="гггг-мм-дд">
            <div 
                v-if="pickdateanswer" 
                style="
                    text-transform: capitalize; 
                    background-color: white; 
                    position: absolute; 
                    top: 60px; 
                    right: 10px; 
                    z-index: 10000;">
            <v-flex xs12 sm6 class="hidden-xs-only">
                <v-date-picker 
                    style="text-transform: capitalize;" 
                    locale ="ru-RU" 
                    v-model="answer_date" 
                    color="blue lighten-1" 
                    header-color="blue">
                </v-date-picker>
            </v-flex>
            </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-6 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Листов/Приложений</label>
                    <input v-model="pages" type="text" id="pages" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
            <div class="col-6 text-muted">
                <div class="form-group">
                    <label class="control-label">&nbsp</label>
                    <input v-model="application" type="text" id="application" class="form-control" placeholder=" ">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-12 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Автор/Организация</label>
                    <input v-model="creator_name" type="text" id="creator_name" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                    <label class="control-label"></label>
                    <input v-model="organization" type="text" id="organization" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-12 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Адресат</label>
                    <input v-model="addressee" type="text" id="addressee1" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                    <label class="control-label"></label>
                    <input v-model="addressee" type="text" id="addressee2" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-12 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Вид документа:</label>
                    <input v-model="type" type="text" id="type" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
        </div>
        <div class="row mt-2 ">
            <div class="col-12 text-muted pl-2 pr-0">
                <div class="form-group">
                    <label class="control-label">Гриф:</label>
                    <input v-model="status" type="text" id="status" class="form-control" placeholder="">
                    <small class="form-control-feedback"> </small> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'properti-document-tab',
    data () {
      return {
        pickdate: false,
        pickdateanswer: false,
        reg_number: '',
        reg_date: '',
        out_number: '',
        out_date: '',
        answer_doc: '',
        answer_date: '',
        pages: '',
        creator_name: '',
        organization: '',
        addressee: '',
        type: '',
        status: '',
        application: '',
        description: '',
        content: '',
        resolution: '',
        annotation: ''
      }
    },
    computed: {
      datepick () {
        return this.reg_date
      },
      datepickanswer () {
        return this.answer_date
      }
    },
    watch: {
      reg_number () {
        this.$store.commit('addIncomingReg_number', {reg_number: this.reg_number})
        console.log(this.$store.getters.getIncoming.reg_number)
      },
      reg_data () {
        this.$store.commit('addIncomingReg_data', {reg_data: this.reg_data})
        console.log(this.$store.getters.getIncoming.reg_data)
      },
      answer_doc () {
        this.$store.commit('addIncomingAnswer_doc', {answer_doc: this.answer_doc})
        console.log(this.$store.getters.getIncoming.answer_doc)
      },
      answer_date () {
        this.$store.commit('addIncomingAnswer_date', {answer_date: this.answer_date})
        console.log(this.$store.getters.getIncoming.answer_date)
      },
      pages () {
        this.$store.commit('addIncomingPages', {pages: this.pages})
        console.log(this.$store.getters.getIncoming.pages)
      },
      application () {
        this.$store.commit('addIncomingApplication', {application: this.application})
        console.log(this.$store.getters.getIncoming.application)
      },
      creator_name () {
        this.$store.commit('addIncomingCreator_name', {creator_name: this.creator_name})
        console.log(this.$store.getters.getIncoming.creator_name)
      },
      addressee () {
        this.$store.commit('addIncomingAddressee', {addressee: this.addressee})
        console.log(this.$store.getters.getIncoming.addressee)
      },
      type () {
        this.$store.commit('addIncomingType', {creator_name: this.type})
        console.log(this.$store.getters.getIncoming.type)
      },
      status () {
        this.$store.commit('addIncomingStatus', {status: this.status})
        console.log(this.$store.getters.getIncoming.status)
      }
    },
    props: [
      'statusDoc'
    ],
    mounted () {
      console.log(this.reg_date)
    }
  }
</script>

<style scoped>
    body{
        background-color: #eef5f9;
        font-family: "Poppins", sans-serif;
    }
    .text-blue{
        color: #1e88e5;
        font-size: 1rem;
    }
    .text-muted{
        font-size: 1rem;
    }
    .small-tab{
        font-size: 0.9rem;
    }
    .mid-tab{
        font-size: 1rem;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }
    .date-field-r{
        position: absolute;
        float: right;
        right: 20px;
        top: 10px;
    }
    .fr{
        float: right;
        margin-left: 10px;
        margin-top: 5px;
    }
    .hidden-xs-only{
        text-transform: capitalize;
    }
</style>
