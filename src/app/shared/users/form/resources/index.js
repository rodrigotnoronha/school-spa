import crud from '@/crud/form/form'
import resources from '../../resources'

import components from './components'
import computed from './computed'
import data from './data'
import methods from './methods'

export default {
  mixins: [crud, resources],

  components,
  computed,
  data,
  methods
}
