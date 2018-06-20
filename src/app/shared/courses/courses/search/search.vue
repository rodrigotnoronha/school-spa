<script>
import crud from '@/crud/search/search'
import resources from '../resources'
import Item from './components/item'
import Advanced from './components/advanced'

export default {
  name: 'courses-index',

  components: {
    Item,
    Advanced
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover o curso <b>' + this.currentEntity.label + '</b>?'
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
