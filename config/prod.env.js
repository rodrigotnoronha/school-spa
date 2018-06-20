var merge = require('webpack-merge')
var common = require('./common.env')

module.exports = merge({
  API_URL: '"http://localhost:8000/"',
  NODE_ENV: '"production"',
  DEBUG: false
}, common)
