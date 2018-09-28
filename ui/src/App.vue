<template>
  <div id="app">
    <b-container fluid class="p-0" :style="{fontFamily: editFont}">
        {{editFont}}
    <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import { USER_REQUEST } from './store/actions/user'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    created: function () {
      if (this.$store.getters.isAuthenticated) {
        this.$store.dispatch(USER_REQUEST)
      }
    },
    computed: {
      editFont () {
        return this.$store.getters.getFont
      }
    }
  }
</script>

<style>
  @import 'https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900';
  @import 'https://fonts.googleapis.com/css?family=Istok+Web|M+PLUS+1p|Montserrat|Noto+Sans';
  .v-tabs__div{ text-transform: none !important; }

  html, body {
    height: 100%;
    font-family: "Roboto", sans-serif;
    background-color: #eef5f9;
  }

.tab_star a{
  color: #455a64;
}

.popover-body ul li{
  list-style-type: none;
  margin-left: -30px;
}
.collapse-list ul li{
  color: #455a64;
  list-style-type: none;
  margin-left: -30px;
}
</style>
