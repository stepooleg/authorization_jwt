<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid mt-3">
            <div class="row no-wrap">
                <left-sidebar></left-sidebar>
                <div class="col ml-2">
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
    name: 'ListDocument',
    data () {
      return {
        tuble: []
      }
    },
    mounted () {
      console.log(localStorage.getItem('user-token'))
      let url = process.env.REST_SERV + 'tasks/all'
      axios(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
//        withCredentials: true,
        credentials: 'same-origin'
      })
          .then(response => {
            this.tuble = response.data
            this.$store.commit('addList', response.data.list)
            console.log(response.data)
            console.log(this.$store.getters.getList)
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
