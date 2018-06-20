<script>
import Advanced from './components/advanced'
import Item from './components/item'

import resources from '../resources'
import crud from '@/crud/search/search'

export default {
  name: 'groups-search',

  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a classe <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },
  data () {
    return {
      includes: ['course'],
      columns: {
        id: 'ID',
        'course.label': 'Curso',
        label: 'Turma',
        year: 'Ano',
        max_students: 'Capacidade máxima',
        available_vacancies: 'Vagas'
      }
    }
  },

  mixins: [crud, resources]
}
</script>
