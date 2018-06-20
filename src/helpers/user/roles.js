/**
 * User Roles Helper.
 */

import { get } from 'lodash'

export const hasRole = (user, role) => {
  if (role === 'guest') {
    return true
  }

  if (user.is_admin) {
    return true
  }

  // get the current role from the user
  const userRole = get(user, 'role', 'guest')

  return userRole === role
}
