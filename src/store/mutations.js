/**
 * Global mutations.
 */

import { find, get } from 'lodash'

// default export.
export default {

  /**
   * Set global user data.
   *
   * @param state
   * @param userData
   */
  setUserData (state, userData) {
    const currentTenant = find(get(userData, 'tenants'), { 'current': true })
    state.user = userData
    state.tenants = get(userData, 'tenants', [])
    state.tenant = currentTenant
  },

  /**
   * @param state
   * @param avatar
   */
  setAvatar (state, avatar) {
    state.user.avatar = avatar
  },

  /**
   * Clear user data.
   *
   * @param state
   */
  clearUserData (state) {
    state.user = { id: null, name: null, email: null, role: null, tenants: {} }
    state.tenant = {}
    state.tenants = []
  },

  /**
   * Set user JWT token into local store.
   *
   * @param state
   * @param jwt
   */
  setJWT (state, jwt) {
    // set raw token data.
    state.jwt = jwt
  },

  setLastNotifications (state, notifications) {
    state.lastNotifications = notifications
  },

  clearLastNotifications (state) {
    state.lastNotifications = {
      data: [],
      menta: {
        when: null,
        tenant: null
      }
    }
  }
}
