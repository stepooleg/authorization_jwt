<template>

    <!--Страница авторизации. Подключение происходит автоматически
    при положительной авторизации проис-->
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row>
            <b-col align-self="center"></b-col>
            <b-col align-self="center" class="mt-3 text-center">
                <h1>Авторизация...</h1>
            </b-col>
            <b-col align-self="center"></b-col>
        </b-row>
        <b-row>
          <b-col align-self="center"></b-col>
            <b-col align-self="center" class="mt-3 text-center">
              <v-form>
                <v-text-field
                  v-model="username"
                  label="Логин"
                  required
                ></v-text-field>
                <v-text-field
                  type="password"
                  v-model="password"
                  label="Пароль"
                  required
                ></v-text-field>
                <v-btn
                    :loading="loading"
                    :disabled="loading"
                    dark
                    @click.native="login"
                    >
                    Войти
                    <span slot="loading" class="custom-loader">
                      <v-icon>cached</v-icon>
                    </span>
              </v-btn>
              </v-form>
            </b-col>
          <b-col align-self="center"></b-col>
        </b-row>
    </b-container>

</template>

<script>
  const axios = require('axios')
  export default {
    name: 'FormAuth',
    data () {
      return {
        username: 'master',
        password: 'master',
        loading: false
      }
    },
    methods: {
      login () {
        this.loading = true
        this.loader = this.loading
        console.log(this.loading)
        const { username, password } = this
        let url = 'http://localhost:8080/simple/login?name=' + username + '&password=' + password
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          // withCredentials: true,
          credentials: 'same-origin'
        })
          .then(resp => {
            const token = resp.data
            console.log(resp)
            if (token !== null && token !== undefined && !token.isEmpty) {
              localStorage.setItem('user-token', token)
             // axios.defaults.headers.common['Authorization'] = localStorage.getItem('user-token')
              this.$router.push('List')
            }
            // localStorage.setItem('user-token', resp.token)
            // Here set the header of your ajax library to the token value.
            // example with axios
            // this.axios.defaults.headers.common['Authorization'] = resp.token
            // commit(AUTH_SUCCESS, resp)
            // dispatch(USER_REQUEST)
            // resolve(resp)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
.v-btn__content{
  color: white;
}

</style>
