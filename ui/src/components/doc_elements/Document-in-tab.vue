<template>
    <!--Блок парасемров документа на вкладке Основные-->
    <div class="col-11 bg-white ml-3" >
        <form action="#" class="form-horizontal form-bordered">
            <div class="form-body">
                {{isValidRegNnumber}}
                <div class="row form-group ">
                    <label class="control-label text-right col-md-3 text-muted">Статус документа:</label>
                        <span class="text-muted pl-4"> {{statusDoc.status}}</span>


                </div>
                <div class="form-group row" :class="[!isValidRegNumber ? validClass : '' ]">
                    <label class="control-label text-right col-md-3 text-muted">Рег. номер:</label>
                    <div class="col-md-9">
                        <input type="text" placeholder="123456" class="form-control form-control-danger" v-model="reg_number">
                        <small v-if="!isValidRegNumber" class="form-control-feedback">Поле должно быть заполнено</small> </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Дата:</label>
                    <div class="col-md-9">
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
                    top: 40px;
                    right: 15px;
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
                        <small class="form-control-feedback"></small> </div>
                </div>
                <div class="form-group row" :class="[!isValidInitialRegNumber ? validClass : '' ]">
                    <label class="control-label text-right col-md-3 text-muted">В ответ на:</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control form-control-danger" placeholder="" v-model="answer_doc">
                        <small v-if="!isValidInitialRegNumber" class="form-control-feedback">Поле должно быть заполнено</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">От:</label>
                    <div class="col-md-9">
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
                    top: 40px;
                    right: 15px;
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
                        <small class="form-control-feedback"></small>
                    </div>
                </div>
                <div class="form-group row" :class="[!isValidNumberOfPage ? validClass : '' ]">
                    <label class="control-label text-right col-md-3 text-muted">Листов</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control form-control-danger" v-model="pages">
                        <small v-if="!isValidNumberOfPage" class="form-control-feedback">Поле должно быть заполнено</small>
                    </div>
                </div>
                <div class="form-group row" :class="[!isValidNumberOfAppendix ? validClass : '' ]">
                    <label class="control-label text-right col-md-3 text-muted">Приложений</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control form-control-danger" v-model="application">
                        <small v-if="!isValidNumberOfAppendix" class="form-control-feedback">Поле должно быть заполнено</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Автор</label>
                    <div class="col-md-9">
                        <select v-model="creator_name" class="form-control custom-select text-muted">
                            <option
                                :value="user"
                                v-for="(user, index) in userList"
                                :key="index">{{user.dss_first_name}}  {{user.dss_middle_name}} {{user.dss_last_name}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Организация</label>
                    <div class="col-md-9">
                        <select v-model="organization" class="form-control custom-select text-muted">
                            <option
                                v-for="(orgitem, indorg) in organizationsList"
                                :key="indorg"
                                :value="orgitem"
                                class="text-muted">{{orgitem.dss_name}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Адресат</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" v-model="addressee">
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Вид документа</label>
                    <div class="col-md-9">
                        <select v-model="type" class="form-control custom-select text-muted">
                            <option
                                    v-for="(kinditem, indkind) in kindList"
                                    :key="indkind"
                                    :value="kinditem"
                                    class="text-muted">{{kinditem.dss_name}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="control-label text-right col-md-3 text-muted">Гриф</label>
                    <div class="col-md-9">
                        <select v-model="status" class="form-control custom-select text-muted">
                            <option
                                    v-for="(stampitem, indstamp) in stampList"
                                    :key="indstamp"
                                    :value="stampitem"
                                    class="text-muted">{{stampitem.dss_name}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
  const axios = require('axios')
  export default {
    name: 'properti-document-tab',
    data () {
      return {
        typeDoc: 'Имя автора',
        validClass: 'has-danger',
        isValidRegNnumber: false,
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
      },
      userList () {
        return this.$store.getters.getUserList
      },
      organizationsList () {
        return this.$store.getters.getOrganizationList
      },
      kindList () {
        return this.$store.getters.getKindList
      },
      stampList () {
        return this.$store.getters.getStampList
      },
      isValidRegNumber () {
        return this.$store.getters.getisValidRegNumber
      },
      isValidInitialRegNumber () {
        return this.$store.getters.getisValidInitialRegNumber
      },
      isValidNumberOfPage () {
        return this.$store.getters.getisValidNumberOfPage
      },
      isValidNumberOfAppendix () {
        return this.$store.getters.getisValidNumberOfAppendix
      }
    },
    watch: {
      reg_number () {
        if (this.reg_number.length > 0) {
          this.$store.commit('addIsValidRegNumber', true)
          this.$store.commit('addIncomingReg_number', {reg_number: this.reg_number})
        }
        console.log(this.$store.getters.getIncoming.dss_reg_number)
      },
      reg_date () {
        this.$store.commit('addIncomingReg_date', {reg_date: this.reg_date})
        console.log(this.$store.getters.getIncoming.dsdt_reg_date)
      },
      answer_doc () {
        if (this.answer_doc.length > 0) {
          this.$store.commit('addIsValidInitialRegNumber', true)
          this.$store.commit('addIncomingAnswer_doc', {answer_doc: this.answer_doc})
        }
        console.log(this.$store.getters.getIncoming.dss_initial_reg_number)
      },
      answer_date () {
        this.$store.commit('addIncomingAnswer_date', {answer_date: this.answer_date})
        console.log(this.$store.getters.getIncoming.dsdt_initial_reg_date)
      },
      pages () {
        if (this.pages.length > 0) {
          this.$store.commit('addIsValidNumberOfPage', true)
          this.$store.commit('addIncomingPages', {pages: this.pages})
        }
        console.log(this.$store.getters.getIncoming.dsi_number_of_page)
      },
      application () {
        if (this.pages.length > 0) {
          this.$store.commit('addIsValidNumberOfPage', true)
          this.$store.commit('addIncomingOfAppendix', this.application)
        }
        console.log(this.$store.getters.getIncoming.dsi_number_of_appendix)
      },
      creator_name () {
        console.log(this.creator_name)
        let url = process.env.REST_SERV + 'entity/list'
        let type = 'dm_user'
        let token = localStorage.getItem('user-token')
        let value = this.creator_name.dss_name
        console.log('Токен ' + localStorage.getItem('user-token'))
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            token,
            type,
            value
          },
//      withCredentials: true,
          credentials: 'same-origin'
        })
           .then(response => {
             console.log('' + response.data)
           }
                  // handle success
              )
              .catch(function (error) {
                  // handle error
                console.log(error)
              })
        this.$store.commit('addIncomingCreator_name', {creator_name: this.creator_name.dss_name})
        console.log(this.$store.getters.getIncoming.dss_crsp_name)
      },
      addressee () {
        this.$store.commit('addIncomingAddressee', {addressee: this.addressee})
        console.log(this.$store.getters.getIncoming.dss_adrs_name)
      },
      type () {
        let url = process.env.REST_SERV + 'entity/list'
        let type = 'ddt_document_kind'
        let token = localStorage.getItem('user-token')
        let value = this.type.r_object_id
        console.log('Токен вида:' + localStorage.getItem('user-token'))
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            token,
            type,
            value
          },
//      withCredentials: true,
          credentials: 'same-origin'
        })
           .then(response => {
             console.log(response.data)
           }
                  // handle success
              )
              .catch(function (error) {
                  // handle error
                console.log(error)
              })
        this.$store.commit('addIncomingType', {type: this.type.r_object_id})
        console.log(this.$store.getters.getIncoming.dsid_document_kind)
      },
      status () {
        let url = process.env.REST_SERV + 'entity/list'
        let type = 'ddt_stamp'
        let token = localStorage.getItem('user-token')
        let value = this.type.r_object_id
        console.log('Токен штампа:' + localStorage.getItem('user-token'))
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            token,
            type,
            value
          },
//      withCredentials: true,
          credentials: 'same-origin'
        })
             .then(response => {
               console.log(response.data)
             }
                  // handle success
              )
              .catch(function (error) {
                  // handle error
                console.log(error)
              })
        this.$store.commit('addIncomingStatus', {status: this.status.r_object_id})
        console.log(this.$store.getters.getIncoming.dsid_stamp)
      },
      organization () {
        let url = process.env.REST_SERV + 'entity/list'
        let type = 'ddt_organization'
        let token = localStorage.getItem('user-token')
        let value = this.organization.r_object_id
        console.log('Токен организации:' + localStorage.getItem('user-token'))
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: {
            token,
            type,
            value
          },
//      withCredentials: true,
          credentials: 'same-origin'
        })
              .then(response => {
                console.log(response.data)
              }
                  // handle success
              )
              .catch(function (error) {
                  // handle error
                console.log(error)
              })
        this.$store.commit('addIncomingOrganization', {organizations: this.organization.r_object_id})
        console.log(this.$store.getters.getIncoming.dsid_crsp_org)
      },
      annotation () {
        this.$store.commit('addIncomingAnnotation', {annotation: this.annotation})
        console.log(this.$store.getters.getIncoming.annotation)
      },
      resolution () {
        this.$store.commit('addIncomingResolution', {resolution: this.resolution})
        console.log(this.$store.getters.getIncoming.resolution)
      },
      out_number () {
        this.$store.commit('addIncomingOut_number', {out_number: this.out_number})
        console.log(this.$store.getters.getIncoming.out_number)
      },
      out_date () {
        this.$store.commit('addIncomingOut_date', {out_date: this.out_date})
        console.log(this.$store.getters.getIncoming.out_date)
      }
    },
    props: [
      'statusDoc'
    ]
  }
</script>

<style scoped>
@import '../../assets/css/style.css';
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
