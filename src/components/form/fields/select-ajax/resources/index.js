// base select field.
import Select from '../../select'
import computed from './computed'
import data from './data'
import methods from './methods'
import props from './props'

export default {
  // base select field.
  extends: Select,

  // ajax resource path
  resourcePath: '',
  computed,
  data,
  props,
  methods,
  created () {
    if (this.getAll) {
      this.getAllValues()
    }
  },
  mounted () {
  }
}
