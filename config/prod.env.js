var merge = require('webpack-merge')
var common = require('./import-common')

module.exports = merge({
  API_URL: '"http://localhost:8000/"',
  NODE_ENV: '"production"',
  DEBUG: false
}, common)
