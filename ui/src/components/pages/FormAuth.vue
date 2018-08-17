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
            <b-button @click="login" type="submit" variant="primary">Отправить</b-button>
        </b-form>
    </div>
</template>

<script>
  import {AUTH_REQUEST} from '../store/actions/auth'
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
        this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
         // this.$router.push('/list')
        })
      }
    },
//     methods: {
//       onSubmit (evt) {
//         evt.preventDefault()
//         console.log(this.login)
//         let url = 'http://localhost:8080/ticketservice-2.0.0/auth?login=' +
//         this.postBody.login +
//         '&pass=' + this.postBody.pass
//         axios(url, {
//           method: 'POST',
//           mode: 'no-cors',
//           headers: {
//             'Content-Type': 'application/json'
//           },
// //        withCredentials: true,
//           credentials: 'same-origin'
//         })
//           .then(response => {
//             console.log(response.data)
//             const token = response.data
//             localStorage.setItem('user-token', token) // store the token in localstorage
//             resolve(response)
//             this.$router.push({name: 'List'})
//           }
//             // handle success
//           )
//           .catch(function (error) {
//             // handle error
//             console.log(error)
//           })
//       },
    onReset (evt) {
      evt.preventDefault()
        /* Reset our form values */
      this.login = ''
      this.pass = ''
    }
  }
</script>

<style scoped>

</style>
