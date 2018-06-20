import methods from './methods'
import props from './props'
import data from './data'
import computed from './computed'
import components from './components'

export default {
  methods,
  props,
  data,
  computed,
  components,
  mounted () {
    this.internalValue = this.value
  }
}
