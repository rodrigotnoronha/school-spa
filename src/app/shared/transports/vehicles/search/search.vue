<script>
import Advanced from './components/advanced'
import Item from './components/item'

import resources from '../resources'
import crud from '@/crud/search/search'

export default {
  name: 'vehicles-index',

  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover o veículo <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },

  mixins: [crud, resources]
}
</script>
