import resources from '../../resources'
import data from './data'
import components from './components'
import computed from './computed'
import methods from './methods'
import mounted from './mounted'
import props from './props'

export default {
  mixins: [resources],
  data,
  components,
  computed,
  methods,
  mounted,
  props,
  resourcePath: ''
}
