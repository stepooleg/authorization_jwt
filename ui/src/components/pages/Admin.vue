<template>

    <!--Страница админки. -->
    <b-container class="bv-example-row bv-example-row-flex-cols">
        <b-row>
            <b-col align-self="center"></b-col>
            <b-col align-self="center" class="mt-3 text-center">
                <h1>Проверка запросов</h1>
            </b-col>
            <b-col align-self="center"></b-col>
        </b-row>
        <b-row>
          <b-col cols="2" align-self="center"></b-col>
            <b-col align-self="center" class="mt-3 text-center">
              <v-form>
                <v-textarea
                  v-model="pushQuery"
                  label="Запрос"
                  required
                  row-height=100
                  rows=10
                ></v-textarea>
                <v-btn
                    color="primary"
                    dark
                    @click.native="executeQuery"
                    >
                    Отправить
              </v-btn>
              </v-form>
            </b-col>
          <b-col cols="2" align-self="center"></b-col>
        </b-row>
        <b-row>
            <b-col align-self="center"></b-col>
            <b-col align-self="center" class="mt-3 text-center">
                <h1>Время запроса: {{time}}</h1>
                <v-data-table
                  :headers="headers"
                  :items="typeDoc"
                  hide-actions
                  class="elevation-1"
                  v-if="typeDoc.length>0"
                >
                  <template slot="items" slot-scope="props">
                    <td>{{ props.item.r_object_id }}</td>
                    <td class="text-xs-right">{{ props.item.dss_name}}</td>
                  </template>
                </v-data-table>
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
        pushQuery: '',
        typeDoc: '',
        time: '',
        headers: [
          {
            text: 'r_object_id',
            align: 'left',
            sortable: false,
            value: 'r_object_id'
          },
          { text: 'dss_name', value: 'dss_name' }
        ]
      }
    },
    methods: {
      executeQuery () {
        this.loading = true
        this.loader = this.loading
        console.log(this.loading)
        let url = process.env.TIKET_SERV + 'system/query'
        axios(url, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          params: {
            token: localStorage.getItem('user-token'),
            xql: this.pushQuery
          },
          // withCredentials: true,
          credentials: 'same-origin'
        })
          .then(resp => {
            const items = resp.data
            this.typeDoc = items.res
            this.time = items.time
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
button{
  background-color: blue
}

</style>
