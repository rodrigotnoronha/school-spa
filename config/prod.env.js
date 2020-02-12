var merge = require('webpack-merge')
var common = require('./import-common')

module.exports = merge({
  API_URL: '"https://escola-app.herokuapp.com/"',
  NODE_ENV: '"production"',
  DEBUG: false
}, common)
