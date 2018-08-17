<template>
    <div>
        <top-navbar></top-navbar>
        <div class="container-fluid">
            <div class="row mt-2">
                <left-sidebar></left-sidebar>
                <div class="col col-lg-10">
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
      axios.post('http://localhost:9000/list')
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

</style>
