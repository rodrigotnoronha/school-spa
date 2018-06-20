import components from './components'
import data from './data'
import methods from './methods'
import watch from './watch'

export default {
  components,
  data,
  methods,
  watch,
  mounted () {
    this.get()
  }
}
