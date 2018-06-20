<script>
import Advanced from './components/advanced'
import Item from './components/item'

import resources from '../resources'
import crud from '@/crud/search/search'

export default {
  name: 'subjects-index',
  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a disciplina <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },

  mixins: [crud, resources]
}
</script>
