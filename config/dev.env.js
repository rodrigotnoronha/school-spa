var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var common = require('./import-common')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEBUG: true
}, common)
