<template>
    <!--Блок карточек Лиска согласования-->
    <div class="bg-white">
        <div class="col-12 text-blue">
          <toggle-btn-line-log></toggle-btn-line-log>
            <div class="row mt-2">
                <div class="col-12 bg-white ml-2">
                    <div class="title-log text-blue">
                        <b>Этап 1:</b>
                    </div>
                    <div class="card">
                        <div class="card-body" >
                            <h4 class="card-title">Лист согласования</h4>
                            <div class="chat-box"
                                 id="container"
                                 style="overflow-y: auto; width: auto; max-height: 500px;">
                                <!--chat Row -->
                                <ul class="chat-list">
                                    <!--chat Row -->
                                    <li v-bind:class="{odd : msg.name == null}"
                                        v-for="(msg, index) in maintext"
                                        :key="index">
                                        <div class="chat-img">
                                            <img
                                                    v-bind:src="msg.image"
                                                    alt="user"
                                                    v-show="msg.image != null">
                                        </div>
                                        <div class="chat-content">
                                            <h5>{{msg.name}}</h5>
                                            <div v-bind:class="msg.classmsg">
                                                {{msg.message}}
                                            </div>
                                        </div>
                                        <div
                                                class="chat-time"
                                                v-if="index === maintext.length-1"
                                                id="element">10:56 am
                                        </div>
                                        <div
                                                class="chat-time"
                                                v-else>10:56 am
                                        </div>
                                    </li>
                                    <!--chat Row -->
                                </ul>
                            </div>
                        </div>
                        <div class="card-body b-t">
                            <div class="row">
                                <div class="col-8" v-bind:class="{'has-danger' : isError}">
                                    <textarea
                                            v-model="textsend"
                                            placeholder="Введите свое сообщение"
                                            class="form-control"
                                            v-bind:class="{'form-control-danger' : isError}">
                                    </textarea>
                                </div>
                                <div class="col-4 text-right">
                                    <button
                                            v-scroll-to="{ el: '#element' }"
                                            type="button"
                                            class="btn btn-info btn-circle btn-lg"
                                            @click="posts(textsend)"><i
                                            class="far fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--<div class="body-log border-left border-weight border-primary">-->
                        <!--<div>-->
                            <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                            <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                            <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                            <!--<document-card-log :card-in=docCardIn class="c-feedback ml-4"></document-card-log>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="title-log text-blue">-->
                        <!--<b>Этап 2:</b>-->
                    <!--</div>-->
                    <!--<div class="body-log border-left border-weight border-primary">-->
                        <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                        <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                        <!--<document-card-log :card-in=docCardIn class="bg-light"></document-card-log>-->
                        <!--<document-card-log :card-in=docCardIn class="c-feedback ml-4"></document-card-log>-->
                    <!--</div>-->
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
        cardIn: this.docCardIn,
        textsend: '',
        isError: false,
        options: {
          height: 'auto',
          start: 'bottom'
        },
        maintext: []
      }
    },
    methods: {
      posts () {
        const mainmsg = {
          name: null,
          message: '',
          image: null,
          classmsg: 'box bg-light-inverse'
        }
        if (this.textsend !== '') {
          this.isError = false
          mainmsg.message = this.textsend
          this.maintext.push(mainmsg)
          this.textsend = ''
        } else {
          this.isError = true
        }
      }
    },
    computed: {
      textChat () {
        return this.$store.getters.getChat
      }
    },
    mounted () {
      this.maintext = this.$store.getters.getChat
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
    .chat-list li .chat-content{
        width:100%
    }
    .chat-time{
        display: none;
        width: 100px
    }
</style>
