<template>
    <!--Модуль блока "Действия"-->
    <div class="col-12">
        <div class="row">
            <div v-if="!isActive" class="col-11 text-muted mb-2 ml-4">
                Действия:
            </div>
            <div v-else="" class="col-11 text-muted mb-2 ml-3 pl-0 pr-2">
                <hr>
            </div>
        </div>

        <ul class="feeds">
            <li @click="createInDoc">
                <div class="bg-info row ml-2">
                    <div>
                        <i class="mdi mdi-comment-multiple-outline text-white"></i>
                    </div>
                </div>
                <div class="menu col-3 pt-2" v-if="!isActive">Сохранить</div>

            </li>
            <li>
                <div class="bg-success row ml-2">
                    <i class="mdi mdi-check text-white"></i>
                </div>
                <div class="menu col-3 pt-2" v-if="!isActive">Согласовать</div>
            </li>
            <li>
                <div class="bg-warning row ml-2">
                    <i class="mdi mdi-account-plus text-white"></i>
                </div>
                <div class="menu col-8 pt-2 pl-0 pr-0" v-if="!isActive">На доп. согласование</div>
            </li>
            <li>
                <div class="bg-danger row ml-2">
                    <i class="mdi mdi-thumb-down text-white"></i>
                </div>
                <div class="menu col-6 pt-2 " v-if="!isActive">На доработку</div>
            </li>
        </ul>

    </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'action-in-create-document',
  computed: {
    isActive () {
      return this.$store.getters.getglobalshowTaskBar
    }
  },
  methods: {
    clearDoc () {
      let id = this.documentData.id
      let type = 'ddt_incoming'
      let token = localStorage.getItem('user-token')
      let url = process.env.REST_SERV + 'entity/delete'
      axios(url, {
        method: 'DELETE',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          token,
          type,
          id
        },
        // withCredentials: true,
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
      let values = this.$store.getters.getIncoming
      let type = 'ddt_incoming'
      let filekey = this.$store.getters.getIncoming.dsc_content
      let token = localStorage.getItem('user-token')
      let url = process.env.REST_SERV + 'entity/create'
      console.log('=========================================')
      console.log('Токен ' + token)
      console.log('Запрос ' + JSON.stringify(values))
      console.log('Файл ' + JSON.stringify(filekey))
      console.log('=========================================')
      axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          values,
          token,
          type
        },
          // withCredentials: true,
        credentials: 'same-origin'
      })
          .then(resp => {
            console.log(resp)
            this.$router.push('List')
          })
          .catch(err => {
            console.log(err)
            this.$message({
              message: 'Не удалось создать документ.',
              type: 'warning'
            })
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
    .menu{
        font-size: 1rem;
        width: 100%;
    }
</style>
