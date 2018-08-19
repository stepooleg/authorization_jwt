<template>
    <div>
        <b-form>
            <b-form-group id="exampleInputGroup1"
                          label="Login:"
                          label-for="exampleInput1"
                          description="Введите логин">
                <b-form-input id="exampleInput1"
                              type="text"
                              v-model="username"
                              required
                              placeholder="Введите логин">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Password"
                          label-for="exampleInput2">
                <b-form-input id="exampleInput2"
                              type="password"
                              v-model="password"
                              required
                              placeholder="Введите пароль">
                </b-form-input>
            </b-form-group>
            <b-button @click="login" type="button" variant="primary">Отправить</b-button>
        </b-form>
    </div>
</template>

<script>
  const axios = require('axios')
  export default {
    name: 'FormAuth',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        const { username, password } = this
        let url = 'http://localhost:8090/auth?username=' + username + '&password=' + password
        axios(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
//        withCredentials: true,
          credentials: 'same-origin'
        })
          .then(resp => {
            const token = resp.data
            console.log(token)
            if (token !== null && token !== undefined && !token.isEmpty) {
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

</style>
