<script>
import resources from '../resources'
import crud from '@/crud/search/search'

import Item from './components/item'
import Advanced from './components/advanced'

export default {
  name: 'enrollments-index',
  components: {
    Item,
    Advanced
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a classe <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },

  mixins: [crud, resources]
}
</script>
