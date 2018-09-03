<template>
    <!--Блок парасемров документа на вкладке Основные-->
    <div class="col-12 bg-white ml-3">
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">Статус документа:</div>
            <div class="col-7 text-blue">
                {{statusDoc.status}}
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">Рег номер:</div>
            <div class="col-7 text-blue">
                <input v-model="statusDoc.number"
                       type="text"
                       class="form-control"
                       id="exampleInputNumber">
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">Дата регистрации:</div>
            <div class="col-7 text-blue">
                <input v-model="statusDoc.date"
                       type="date"
                       class="form-control"
                       id="exampleInputDate">
                <i class="far fa-calendar-alt date-field-r"></i>
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">В ответ на:</div>
            <div class="col-7 text-blue mid-tab">
                <a href="#">
                    Вх. {{statusDoc.number}}
                </a>
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-12">
                <div class="form-group">
                    <label class="text-muted"
                           for="exampleFormControlShortDescription">
                        Краткое описание
                    </label>
                    <textarea class="form-control"
                              id="exampleFormControlShortDescription"
                              rows="5">
                    </textarea>
                </div>
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">Адресат:</div>
            <div class="col-7 text-blue"></div>
        </div>
        <div class="row mt-4 ">
            <ol>
                <li>
                    <a href="#" class="text-blue">
                        {{statusDoc.adress}}
                        <i class="fas fa-user-times fa-1x fr"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="text-blue">ПАО Транснефть-Технологии
                        <i class="fas fa-user-times fa-1x fr"></i>
                    </a>
                </li>
                <li><a href="#" class="text-blue">
                    <i class="fas fa-user-plus"></i>
                </a>
                </li>
            </ol>
        </div>
        <div class="row mt-4">
            <div class="col-2 text-muted pl-2 pr-0">Автор:</div>
            <div class="col-10 text-blue">
                <b>
                    <div class="row">
                        <div class="col-3">
                            <img
                                    v-bind:src="statusDoc.img.src"
                                    alt="user"
                                    class="img-circle mr-3"
                                    style="width: 70px"/>
                        </div>
                        <div class="col-9">
                            <span class="summary">{{statusDoc.author}}</span>
                            <br>
                            <span v-for="(doc, ind) in statusDoc.typeList" :key="ind" class="text-muted small-tab">
                                {{doc}}
                            </span>
                        </div>
                    </div>
                </b>
            </div>
        </div>
        <div class="row mt-4 ">
            <div class="col-5 text-muted pl-2 pr-0">Дата создания:</div>
            <div class="col-7 text-blue">{{statusDoc.date}}</div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'properti-document-tab',
    props: [
      'statusDoc'
    ],
    mounted () {
      console.log(this.statusDoc)
    }
  }
</script>

<style scoped>
    body{
        background-color: #eef5f9;
        font-family: "Poppins", sans-serif;
    }

    .text-blue{
        color: #1e88e5;
    }
    .small-tab{
        font-size: 0.9rem;
    }
    .mid-tab{
        font-size: 1rem;
    }
    hr{
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn ul li{
        list-style-type: none;
        margin-left: -30px;
    }
    .toggle-btn-line ul li{
        display: inline;
        list-style-type: none;
    }
    .date-field-r{
        position: absolute;
        float: right;
        right: 20px;
        top: 10px;
    }
    .fr{
        float: right;
        margin-left: 10px;
        margin-top: 5px;
    }
</style>
