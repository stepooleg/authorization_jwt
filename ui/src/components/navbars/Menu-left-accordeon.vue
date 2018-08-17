<template>
    <!-- Модуль меню типа collapse -->
    <div class="nav flex-column nav-pills mt-3 mb-3" role="tablist"
         aria-orientation="vertical">
        <div id="accordion" role="tablist" aria-multiselectable="true">
            <div class="tab_star" v-for="(item, index) in items" :key="index">
                <div class="r-menu mt-3" role="tab">
                <a block
                   href="#"
                   v-bind:aria-controls="index"
                   class="r-menu mt-3"
                   @click="showCollapse = !showCollapse">
                    <i class="fas fa-angle-right"></i>
                    <i v-bind:class="item.icon"></i>
                    {{item.name}}
                </a>
                </div>
                <transition name="fade">
                    <div class="collapse-list"
                                v-bind:id="index"
                                role="tabpanel"
                         v-show="showCollapse">
                        <ul>
                            <li v-if="item.list" v-for="it in item.list" :key="it.id">
                                <i class="fas fa-angle-right"></i>
                                <i v-bind:class="it.icon"></i>
                                <a class="r-menu mt-3" href="#">
                                    {{it.name}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'left-accordeon-menu',
    data () {
      return {
        showCollapse: false,
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
    }
  }

</script>

<style scoped>
    .r-menu{
        font-size: 1.175rem;
    }
    .collapse-list ul li{
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to  {
        opacity: 0;
    }

</style>
<!-- Написать функцию если разворачиваемых пунктов будет несколько-->
