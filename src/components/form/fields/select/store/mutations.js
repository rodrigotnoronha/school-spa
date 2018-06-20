export default {
  setUniqueLoading (state, value) {
    state.uniqueLoading = value
  },
  setUniqueOptions (state, options) {
    state.uniqueOptions[options.key] = options.values
  },
  setUniqueStart (state, options) {
    state.uniqueStart[options.key] = options.value
  }
}
