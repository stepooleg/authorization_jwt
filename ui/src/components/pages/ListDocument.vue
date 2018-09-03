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
    name: 'ListDocument',
    data () {
      return {
        tuble: []
      }
    },
    mounted () {
      console.log(localStorage.getItem('user-token'))
      let url = 'http://localhost:8090/list'
      axios.post(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'token': localStorage.getItem('user-token'),
          'Content-Type': 'application/json'
        },
//        withCredentials: true,
        credentials: 'same-origin'
      })
          .then(response => {
            this.tuble = response.data
            console.log(this.tuble)
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
