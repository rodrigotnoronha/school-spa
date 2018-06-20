<script>
import Item from './components/item'
import Advanced from './components/advanced'

import resources from '../resources'
import crud from '@/crud/search/search'
import { get } from 'lodash'
import { dateToShow } from '@/helpers/dates'

export default {
  name: 'frequencies-index',
  components: {
    Item,
    Advanced
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a frequência <b>' + get(this.currentEntity, 'student.name') + '</b>?'
      }
    }
  },
  data () {
    return {
      includes: ['student', 'subject']
    }
  },
  methods: {
    prepareShow (frequency) {
      frequency.date = dateToShow(frequency.date)
      frequency.justified_absence = (frequency.present) ? '' : ((frequency.justified_absence) ? 'sim' : 'não')
      frequency.present = (frequency.present) ? 'sim' : 'não'

      return frequency
    }
  },

  mixins: [crud, resources]
}
</script>
