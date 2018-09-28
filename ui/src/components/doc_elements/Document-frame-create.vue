<template>
    <!--Модуль вывода содержимого документа-->

    <div class="col-12 align-content-center">
        <div class="row mt-3">
            <el-upload
                    class="upload-demo"
                    ref="upload"
                    :file-list="fileList"
                    :action="URL"
                    :http-request="submitFile">
                <el-button slot="trigger" size="small" type="primary">Выберете файл</el-button>

                <div class="el-upload__tip" slot="tip">doc/pdf файлы размером не более 500kb</div>
            </el-upload>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'document-frame-create',
  data () {
    return {
      URL: process.env.REST_SERV + 'entity/uploadfile',
      fileList: []
    }
  },
  methods: {
    submitFile (file) {
      let data = new FormData()
      data.append('file', file.file)
      console.log(data)
      console.log(file.file)
      axios(this.URL, {
        method: 'Post',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        },
        data: data,
        // withCredentials: true,
        credentials: 'same-origin'
      })
       .then(response => {
         this.$store.commit('addIncomingContent', response.data)
         console.log(response.data)
       }
           // handle success
       )
       .catch(function (error) {
             // handle error
         console.log(error)
       })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/style.css';
@import '../../assets/plugins/dropify/dist/css/dropify.css';
.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}

</style>
