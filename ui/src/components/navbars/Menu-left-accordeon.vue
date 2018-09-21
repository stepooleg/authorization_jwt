<template>
    <!-- Модуль меню типа collapse -->
    <div>
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav">
                <li v-show="show" class="nav-small-cap">ЗАДАНИЯ</li>
                <li @click="click(1)"
                    v-bind:class="{ active: 1 == itemIndex }">
                    <a v-bind:class="{'has-arrow' : show }"
                       class="waves-effect waves-dark"
                       aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-star"></i>
                            </div>
                            <div v-show="show"
                                 class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Избранное
                                </span>
                            </div>
                        </div>
                    </a>
                    <transition name="fade">
                    <ul aria-expanded="false" v-if="1 === itemIndex">
                        <li><a href="#">Документ 1</a></li>
                        <li><a href="#">Документ 2</a></li>
                        <li><a href="#">Документ 3</a></li>
                        <li><a href="#">Документ 4</a></li>
                        <li><a href="#">Документ 5</a></li>
                        <li><a href="#">Документ 6</a></li>
                    </ul>
                    </transition>
                </li>
                <li @click="click(2)" v-bind:class="{ active: 2 === itemIndex }">
                    <a v-bind:class="{'has-arrow' : show }" class="waves-effect waves-dark" aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-briefcase-download"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Мои задания
                                </span>
                            </div>
                        </div>
                    </a>
                    <transition name="fade">
                        <ul aria-expanded="false" v-if="2 === itemIndex">
                            <li><a href="#">Просроченные задания</a></li>
                            <li><a href="#">Срок сегодня</a></li>
                            <li><a href="#">Срок через 1-3 дня</a></li>
                            <li><a href="#">Срок через 3-7 дней</a></li>
                            <li><a href="#">Срок больше недели</a></li>
                        </ul>
                    </transition>
                </li>
                <li>
                    <a v-bind:class="{'has-arrow' : show }"
                       class="waves-effect waves-dark"
                       href="#"
                       aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-share"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Задания от<br>
                                    меня
                                </span>
                            </div>
                        </div>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="#">Задание 1</a></li>
                        <li><a href="#">Задание 2</a></li>
                        <li><a href="#">Задание 3</a></li>
                        <li><a href="#">Задание 4</a></li>
                        <li><a href="#">Задание 5</a></li>
                        <li><a href="#">Задание 6</a></li>
                    </ul>
                </li>
                <li>
                    <a v-bind:class="{'has-arrow' : show }" lass="waves-effect waves-dark" aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-tag-multiple"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Метки
                                </span>
                            </div>
                        </div>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="#">Срочно</a></li>
                        <li><a href="#">Входящие</a></li>
                        <li><a href="#">На контроле</a></li>
                    </ul>
                </li>
                <li class="nav-devider"></li>
                <li v-show="show" class="nav-small-cap">ЖУРНАЛЫ</li>
                <li>
                    <a v-bind:class="{'has-arrow' : show }"
                       class="waves-effect waves-dark"
                       aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-server"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Журнал моих<br>
                                    действий
                                </span>
                            </div>
                        </div>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="#">Basic Forms</a></li>
                        <li><a href="#">Form Layouts</a></li>
                        <li><a href="#">Form Addons</a></li>
                        <li><a href="#">Form Material</a></li>
                        <li><a href="#">Floating Lable</a></li>
                    </ul>
                </li>
                <li>
                    <a v-bind:class="{'has-arrow' : show }" class="waves-effect waves-dark" aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle ">
                                <i class="mdi mdi-table-edit"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Журнал моих<br>
                                    действий
                                </span>
                            </div>
                        </div>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="#">Basic Tables</a></li>
                        <li><a href="#">Table Layouts</a></li>
                        <li><a href="#">Data Tables</a></li>
                        <li><a href="#">Footable</a></li>
                        <li><a href="#">Js Grid Table</a></li>
                        <li><a href="#">Responsive Table</a></li>
                        <li><a href="#">Bootstrap Tables</a></li>
                        <li><a href="#">Editable Table</a></li>
                    </ul>
                </li>
                <li>
                    <a v-bind:class="{'has-arrow' : show }" class="waves-effect waves-dark" aria-expanded="false">
                        <div class="row">
                            <div class="col-2 pl-0 pr-0 align-middle">
                                <i class="mdi mdi-basket"></i>
                            </div>
                            <div v-show="show" class="col-10 pl-2 pr-2 align-middle">
                                <span class="hide-menu pr-5">
                                    Корзина
                                </span>
                            </div>
                        </div>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <li><a href="#">Widget Apps</a></li>
                        <li><a href="#">Widget Data</a></li>
                        <li><a href="#">Widget Charts</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
</template>

<script>
  export default {
    name: 'left-accordeon-menu',
    data () {
      return {
        showCollapse: false,
        itemIndex: 0,
        check: false,
        items: [
          {
            name: 'Избранное',
            icon: 'fas fa-star'
          },
          {
            name: 'Мои задания',
            icon: 'fas fa-download',
            list: [
              {
                name: 'Просроченные задания',
                icon: 'fas fa-hourglass'
              },
              {
                name: 'Срок Сегодня',
                icon: 'fas fa-hourglass-end'
              },
              {
                name: 'Срок через 1-3 дня',
                icon: 'fas fa-hourglass-half'
              },
              {
                name: 'Срок через 3-7 дней',
                icon: 'fas fa-hourglass-start'
              },
              {
                name: 'Срок больше недели',
                icon: 'far fa-hourglass'
              }
            ]
          },
          {
            name: 'Задания от меня',
            icon: 'fas fa-share-square'
          },
          {
            name: 'Метки',
            icon: 'fas fa-tags'
          }
        ]
      }
    },
    methods: {
      click (numberPoint) {
        if (numberPoint > 0) {
          this.check = !this.check
          this.check ? this.itemIndex = numberPoint : this.itemIndex = 0
        }
      }
    },
    computed: {
      show () {
        return this.$store.getters.readStatus
      }
    }
  }

</script>

<style scoped>
    .sidebar-nav{
        padding-right: 0;
        padding-left: 0;
    }

    .sidebar-nav ul li a{
        font-size: 1.2rem;
    }
    .sidebar-nav ul li.nav-small-cap{
        font-size: 1.2rem;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .7s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }
    l-menu{
        padding-left: 0px;
        margin-left: 0px;
    }
</style>
<!-- Написать функцию если разворачиваемых пунктов будет несколько-->
