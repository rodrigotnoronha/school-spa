<script>
import Item from './components/item'
import Advanced from './components/advanced'

import resources from '../resources'
import crud from '@/crud/search/search'
import { dateToShow } from '@/helpers/dates'

export default {
  name: 'grades-search',

  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a nota <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },
  methods: {
    prepareShow (grade) {
      grade.quiz.date = dateToShow(grade.quiz.date)

      return grade
    }
  },

  mixins: [crud, resources]
}
</script>
