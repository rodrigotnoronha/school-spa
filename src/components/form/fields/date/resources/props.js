import optionsProps from './optionsProps'

export default {
  onlyDay: null,
  value: '',
  required: false,
  errors: {},
  label: null,
  options: {
    type: Object,
    default () {
      return optionsProps()
    }
  },
  limit: {
    type: Array,
    default () {
      return []
    }
  }
}
