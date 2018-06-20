import store from '@/store'
import { get, size } from 'lodash'
import toast from '@/plugins/toast/toast'
import { hasRole } from '@/helpers/user/roles'

const matched = (to) => size(to.matched) > 0

const granted = (to, user) => {
  const hasPermission = hasRole(user, get(to, 'meta.role', 'admin'))
  if (hasPermission) {
    return true
  } else {
    toast.error('Você não tem permissão para acessar essa página.', false, {position: 'center'})
    return false
  }
}

/**
 * Runs before each route change.
 *
 * @param to
 * @param from
 * @param next
 */
export default (to, from, next) => {
  // setup page title (not vue handled).
  document.title = get(to, 'meta.title', 'Escola Municipal')

  // bypass user setup if route does not need auth.
  if (to.meta.auth === false) { return next() }

  // dispatch the user info actions and continue the request after.
  return store.dispatch('setupUser')
    .then((user) => {
      if (matched(to) && granted(to, user)) {
        return next()
      } else {
        return next({ name: 'index' })
      }
    })
    .catch(() => {
      return next({ name: 'auth.login' })
    })
}
