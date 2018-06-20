<script>
import Advanced from './components/advanced'
import Item from './components/item'

import crud from '@/crud/search/search'
import resources from '../resources'

export default {
  name: 'routes-index',
  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a rota <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },
  methods: {
    beforeSearch (data) {
      const search = {...data}

      return search
    }
  },

  mixins: [crud, resources]
}
</script>
