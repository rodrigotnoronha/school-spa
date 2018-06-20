<script>
import Item from './components/item'
import crud from '@/crud/search/search'
import resources from '../resources'

export default {
  name: 'users-index',

  componentes: {
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover o usuário <b>' + this.currentEntity.name + '</b>?'
      }
    }
  },
  data () {
    return {
      entities: 'users',
      users: [],
      title: 'Usuários',
      subTitle: 'Usuários',
      titleCreate: 'Adicioanr usuário',
      columns: {
        id: 'ID',
        name: 'Nome do usuário',
        'address.label': 'Endereço',
        'phones.work': 'Telefone',
        active: 'Status'
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
