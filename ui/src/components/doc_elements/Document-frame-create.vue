<template>
    <!--Модуль вывода содержимого документа-->
    <div class="col-12 align-content-center">
      
      
      <div class="row mt-3">
        <div class="col">Введите значение штрихкода</div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            id="ex">
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">или добавьте файл</div>
      </div>
      <div class="row mt-3">
        <div class="col mt-3">
          <div class="dropify-wrapper">
            <div class="dropify-message">
              <span class="file-icon"></span> 
              <p>Drag and drop a file here or click</p>
              <p class="dropify-error">Ooops, something wrong appended.</p>
            </div>
            <div class="dropify-loader"></div>
            <div class="dropify-errors-container">
              <ul></ul>
            </div>
            <input type="file" id="input-file-now" class="dropify">
            <button type="button" class="dropify-clear">Remove</button>
            <div class="dropify-preview">
              <span class="dropify-render"></span>
              <div class="dropify-infos">
                <div class="dropify-infos-inner">
                  <p class="dropify-filename">
                    <span class="file-icon"></span> 
                    <span class="dropify-filename-inner"></span>
                  </p>
                  <p class="dropify-infos-message">Drag and drop or click to replace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
</template>

<script>
require('vue-dropify/dist/vue-dropify.css')
import vueDropify from 'vue-dropify'
export default {
  name: 'document-frame-create',
  components: {
    vueDropify
  }
}
</script>

<style scoped>
@import '../../assets/css/style.css';
@import '../../assets/plugins/dropify/dist/css/dropify.css';

</style>
