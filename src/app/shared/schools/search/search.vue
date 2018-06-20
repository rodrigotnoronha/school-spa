<script>
import Item from './components/item'
import Advanced from './components/advanced'
import resources from '@/crud/search/search'

import { get } from 'lodash'

const status = {
  true: 'ativada',
  false: 'desativada'
}

export default {
  name: 'schools-index',

  components: {
    Item,
    Advanced
  },
  data () {
    return {
      prefixRouter: 'school.schools.',
      entities: 'schools',
      schools: [],
      title: 'Escolas',
      titleCreate: 'Adicionar escola',
      subTitle: '',
      columns: {
        id: 'ID',
        name: 'Nome da escola',
        'director.name': 'Diretor',
        'address.label': 'Endereço',
        'phones.work': 'Telefone',
        active: 'Status'
      }
    }
  },
  methods: {
    prepareShow (data) {
      const item = {...data}
      item.active = get(status, data.active, false)

      return item
    }
  },

  mixins: [resources],

  resourcePath: '/school/schools/schools'
}
</script>
