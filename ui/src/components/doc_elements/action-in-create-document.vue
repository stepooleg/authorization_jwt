<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12 pr-0">
       
        <div class="row mb-3">
            <div class="col-12 pr-0">
                <div class="row">
                    <div class="col-2 pl-0 pr-0 collapse-list">
                        <button @click="createInDoc" type="button" class="btn btn-success btn-circle"><i class="far fa-flag"></i> </button>
                    </div>
                    <div class="col-10 pl-0">
                        <div class="font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            Зарегестрировать
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12 pr-0">
                <div class="row">
                    <div class="col-2 pl-0 pr-0 collapse-list">
                        <button type="button" class="btn btn-danger btn-circle"><i class="mdi mdi-close"></i> </button>
                    </div>
                    <div class="pl-0 col-10">
                        <div class=" font-tab-mid">
                            <i class="fas fa-angle-left"></i>
                            Удалить
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'action-in-create-document',
  methods: {
    clearDoc () {
      let document = this.documentData.id
      axios({
        method: 'DELETE',
        mode: 'no-cors',
        url: 'http://localhost:8080/ddt_incoming/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          document
        },
//        withCredentials: true,
        credentials: 'same-origin'
      })
        .then(response => {
          this.$router.push('List')
        }
            // handle success
        )
        .catch(function (error) {
            // handle error
          console.log(error)
        })
    },
    createInDoc () {
      let create = this.$store.getters.getIncoming
      console.log(create)
      axios({
        method: 'POST',
        mode: 'no-cors',
        url: 'http://localhost:8080/simple/login/',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          create
        },
//        withCredentials: true,
        credentials: 'same-origin'
      })
          .then(response => {
            this.tuble = response.data
            // this.$store.commit('addList', response.data)
            this.$router.push('List')
          }
            // handle success
          )
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
    .font-tab-mid{
        margin-top: 15px;
        font-size: 1rem;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list{
        color: #455a64;
        list-style-type: none;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }
</style>
