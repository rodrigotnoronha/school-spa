import Vue from 'vue'
import locales from '@/locales'

const get = function () {
  return locales[Vue.config.lang]
}

export default () => get()
