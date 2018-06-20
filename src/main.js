// import Password from 'vue-password-strength-meter'
// https://github.com/apertureless/vue-password-strength-meter?ref=madewithvuejs
import Vue from 'vue'

Vue.config.productionTip = false

import App from '@/layout/main'
import router from './router'
import store from './store'
import RootComponents from './components'
import filters from './filters'
// import locales from './locales'
import Plugins from './plugins'
import VueFloatLabel from 'vue-float-label'
import Bootstrap from './bootstrap'
Bootstrap(Vue, store, router)

Vue.use(VueFloatLabel)

// register plugins
Plugins(Vue, store, router)

filters(Vue)

// root components
RootComponents(Vue)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
