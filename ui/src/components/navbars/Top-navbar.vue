<template>
    <!--Модуль верхнего навбара -->
    <div class="row">
        <div class="col col-lg-12">
            <!--Верхний навбар-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary-new">
                <div class="col-6">
                    <a class="navbar-brand" href="#">МОЭСК</a>
                </div>
                <form class="col-3 mr-auto">
                    <input class="form-control" type="search" placeholder="Поиск" aria-label="Search">

                </form>
                <div class="right-aside">
                    <button class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header" type="submit">
                        <i class="fas fa-exclamation fa-lg"></i>
                    </button>
                    <button class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header" type="submit">
                        <i class="fas fa-calendar-minus fa-lg"></i>
                    </button>
                    <button class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header" type="submit">
                        <i class="fas fa-user fa-lg"></i>
                    </button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'top-navbar'
  }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
    body{
        background-color: #eef5f9;
        font-family: "Poppins", sans-serif;
    }
    .bg-primary-new{
        background-color: #1e88e5;
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

    .btn-header{
        border: 0px;
    }
</style>
