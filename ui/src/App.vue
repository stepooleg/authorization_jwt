<template>
  <div id="app">
    <b-container fluid class="p-0">
    <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import { USER_REQUEST } from './components/store/actions/user'

  export default {
    name: 'app',
    created: function () {
      if (this.$store.getters.isAuthenticated) {
        this.$store.dispatch(USER_REQUEST)
      }
    }
  }
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");
#app {
}
body{
  background-color: #eef5f9;
  font-family: "Poppins", sans-serif;
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
