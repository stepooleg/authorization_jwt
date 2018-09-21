var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TIKET_SERV: '"http://localhost:8090/"',
  REST_SERV: '"http://localhost:8080/"'
})
