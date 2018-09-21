<template>
    <!--Модуль вывода содержимого документа-->
    <div class="col-12 align-content-center">
        <div class="row mt-3">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList2"
            list-type="picture">
            <el-button size="small" type="primary">Нажмите для загрузки</el-button>
            <div slot="tip" class="el-upload__tip">pdf/doc файлы размером не более 500kb</div>
          </el-upload>
        </div>
    </div>
</template>

<script>
require('vue-dropify/dist/vue-dropify.css')
import vueDropify from 'vue-dropify'
const axios = require('axios')
export default {
  name: 'document-frame-create',
  data () {
    return {
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  components: {
    vueDropify
  },
  methods: {
    uploadFile (event) {
      const URL = 'http://foobar.com/upload'
      let data = new FormData()
      data.append('name', 'my-picture')
      data.append('file', event.target.files[0])
      console.log(event.target.files[0])
      let config = {
        header: {
          'Content-Type': 'application/pdf'
        }
      }
      axios.put(
        URL,
        data,
        config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/style.css';
@import '../../assets/plugins/dropify/dist/css/dropify.css';
.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}

</style>
