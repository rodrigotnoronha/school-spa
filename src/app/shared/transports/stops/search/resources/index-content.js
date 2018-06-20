import resources from '../../resources'
import crud from '@/crud/search/search-content'

import components from './components'
import data from './data'

export default {
  mixins: [crud, resources],
  components,
  data
}
