// default props for all form methods
export default {
  fieldId: {
    default: ''
  },
  errorMessage: {
    default: null
  },
  name: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  forceLabel: {
    type: Boolean,
    default: false
  },
  forceNoLabel: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ''
  },
  showTooltip: {
    type: Boolean,
    default: false
  },
  value: {
    default: () => {
    }
  }
}
