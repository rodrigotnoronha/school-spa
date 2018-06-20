export default {
  uniqueLoader: {
    type: Boolean,
    default: false
  },

  /**
   * Allow the creation of a new item.
   */
  create: {
    type: Boolean,
    default: false
  },

  createDefaults: {
    type: Object,
    default: () => { return {} }
  },

  createLabelField: {
    type: String,
    default: 'label'
  },
  getAll: {
    type: Boolean,
    default: false
  },
  beforeData: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  query: {
    type: String,
    default: 'q'
  },

  /**
   * Add-on search parameters.
   */
  parameters: {
    type: Object,
    default: () => ({})
  },
  parametersToShow: {
    type: Object,
    default: () => ({})
  }
}
