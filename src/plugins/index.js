// import plugins
import http from './http'
import tenant from './tenant'
import toast from './toast'

/**
 * Default export.
 *
 * @param Vue
 * @param store
 * @param router
 */
export default (Vue, store, router) => {
  // setup http
  Vue.use(http, { store, router })

  // setup tenant methods.
  Vue.use(tenant, store)

  // setup toast
  toast(Vue)
}
