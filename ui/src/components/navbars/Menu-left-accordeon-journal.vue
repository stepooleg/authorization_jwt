<template>
    <!-- Модуль меню типа collapse журнала-->
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
    name: 'left-bottom-accordeon-menu',
    data () {
      return {
        showCollapse: false,
        items: [
          {
            name: 'Журнал моих действий',
            icon: 'fas fa-server'
          },
          {
            name: 'Журнал моих действий',
            icon: 'fas fa-edit'
          },
          {
            name: 'Корзина',
            icon: 'fas fa-trash-alt'
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
</style>
