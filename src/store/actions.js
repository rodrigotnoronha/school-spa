/**
 * Global vuex actions.
 */
import { http } from '@/plugins/http'
import { loadToken } from '@/helpers/jwt/parser'
// import { expired, refreshable } from 'helpers/jwt/utils'
import { get, isEmpty } from 'lodash'
import { get as find, set, clear } from '@/helpers/storage'

export default {
  loadLastNotifications: ({commit, getters}) => {
    if (getters.notificationsExpired) {
      return http.get('/tenant/notifications/last').then((response) => {
        commit('setLastNotifications', response)
        return response
      })
    }
  },

  setupJWT: ({ commit, getters, dispatch }, tokenString = null) => {
    // if no token was passed, get it from the store.
    const currentToken = tokenString || get(getters.jwt, 'token')
    return loadToken(currentToken) // load the token
      .then((token) => {
        commit('setJWT', token)
        return token
      })
  },

  changeTenant: (store, tenantId) => {
    return http.post('/tenant/change', { tenant_id: tenantId })
  },

  updateUserData: ({commit}, user) => {
    commit('setUserData', user)
    set('user', user)
    return user
  },

  updateAvatar: ({commit, getters}, avatar) => {
    commit('setAvatar', avatar)
    set('user', getters.user)

    return avatar
  },

  logout: ({ commit }) => {
    commit('clearUserData')
    // return http.post('/auth/logout')
    clear()
  },

  setupUser: ({ getters, dispatch, commit }) => {
    return dispatch('setupJWT').then(() => {
      return find('user')
        .then(user => !isEmpty(user) ? user : http.get('/auth/user').then(({data}) => data))
        .then(user => {
          commit('setUserData', user)
          set('user', user)
          return user
        })
    })
  }
}
