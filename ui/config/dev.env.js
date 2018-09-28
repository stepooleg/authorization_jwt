var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  TIKET_SERV: '"http://192.168.42.74:9091/ts/"',
  REST_SERV: '"http://192.168.42.74:8080/sedo/"'
})
