/**
 * Dashboard module vuex store.
 */

import * as getters from './getters'   // getters.
import mutations from './mutations'    // mutations.
import state from './state'            // state.

/**
 * Export store resources.
 */
export default {
  namespaced: true, // make sure the module store gets it's own namespace.
  getters,
  mutations,
  state
}
