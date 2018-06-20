var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var common = require('./common.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG: true
}, common)
