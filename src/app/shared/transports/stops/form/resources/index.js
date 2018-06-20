import resources from '../../resources'
import crud from '@/crud/form/form'

import data from './data'
import methods from './methods'
import props from './props'

export default {
  mixins: [crud, resources],
  data,
  methods,
  props
}
