// dependencies.
import axios from 'axios'
import interceptors from './interceptors'
import resources from './resources'
import actions from './resources/actions'
import baseURL from './baseURL'

// create a axios client for the api.
export const http = axios.create({ baseURL })

// create a axios client for local requests (legacy app).
export const localHttp = axios.create()

// define and export the resource actions.
export const resource = (basePath) => actions({ $http: http }, basePath)

// plugin install.
export default function install (Vue, {store, router}) {
  // enable api http client interceptors.
  interceptors(http, store, router)

  // define $http into vue prototype.
  Object.defineProperty(Vue.prototype, '$http', {
    get () {
      return http
    }
  })

  // enable app (legacy) http client interceptors
  interceptors(localHttp, store, router)

  // define $http into vue prototype.
  Object.defineProperty(Vue.prototype, '$localHttp', {
    get () {
      return localHttp
    }
  })

  // register resources.
  resources(Vue)
}
