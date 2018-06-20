import resources from '../../resources'
import crud from '@/crud/search/search'

import components from './components'
import data from './data'
import computed from './computed'

export default {
  mixins: [crud, resources],
  components,
  computed,
  data
}
