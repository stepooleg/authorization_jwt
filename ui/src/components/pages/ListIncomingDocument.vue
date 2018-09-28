<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid mt-3">
            <div class="row no-wrap">
                <left-sidebar></left-sidebar>
                <div class="col col">
                    <div class="row">
                        <div class="col col-lg-12">
                            <nav-tabs :table-doc=tuble></nav-tabs>
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
    name: 'ListIncomingDocument',
    data () {
      return {
        tuble: []
      }
    },
    mounted () {
      let token = localStorage.getItem('user-token')
      let type = 'ddt_incoming'
      console.log(token)
      let url = process.env.REST_SERV + 'entity/list'
      axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          token,
          type
        },
//        withCredentials: true,
        credentials: 'same-origin'
      })
          .then(response => {
            this.tuble = 'incoming'
            this.$store.commit('addListInDoc', response.data)
            console.log(response.data)
            console.log(this.$store.getters.getListInDoc)
          }
            // handle success
          )
          .catch(function (error) {
            // handle error
            console.log(error)
          })
    }
  }
</script>

<style scoped>
.container-fluid{
    padding-right: 0;
    padding-left: 0;
}
.no-wrap{
  flex-wrap: nowrap
}
</style>
