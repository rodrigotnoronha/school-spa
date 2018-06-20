/**
 * Custom Select field props.
 */
export default {
  // are multiple options available
  multiple: {
    type: Boolean,
    default: false
  },

  // is a value required?
  required: {
    type: Boolean,
    default: true
  },

  // select options
  options: {
    type: Array,
    default: null
  },

  // track by field.
  trackBy: {
    type: String,
    default: 'id'
  },

  // which field should be used as label.
  labelBy: {
    type: String,
    default: 'label'
  },

  // searchable
  searchable: {
    type: Boolean,
    default: true
  },

  searchChange: {
    Type: Function,
    default: (query) => {}
  },
  showLabels: {
    type: Boolean,
    default: false
  },
  hideSelected: {
    type: Boolean,
    default: false
  },

  limit: null
}
