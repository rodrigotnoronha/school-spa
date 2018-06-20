// dependencies.
import token from './token'
import flatten from './flatten'
import messages from './messages'

/**
 * Request interceptors.
 *
 * @param http
 * @param store
 * @param router
 */
export default (http, store, router) => {
  // handle http messages.
  http.interceptors.response.use(messages.success, messages.error)

  // flatten data
  http.interceptors.response.use(flatten.success, flatten.error)

  // set authorization token.
  http.interceptors.request.use(token(store, router), error => error)
}
