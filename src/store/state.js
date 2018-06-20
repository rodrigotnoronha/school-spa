/**
 * Global vuex state.
 */

// default export.
export default {

  /**
   * JWT Token and Data.
   */
  jwt: {
    token: null,
    data: null
  },

  /**
   * Basic user information.
   */
  user: {
    id: null,     // user id.
    name: null,   // user name.
    email: null,  // user email.
    tenants: {}   // user tenants.
  },

  /**
   * All user tenants information.
   */
  tenants: [],

  /**
   * Last tenant notifications.
   */
  lastNotifications: {
    data: [],
    meta: {
      when: null,
      tenant: null
    }
  },

  /**
   * Current tenant information.
   */
  tenant: {},

  /**
   * Laravel echo instance.
   */
  echo: null
}
