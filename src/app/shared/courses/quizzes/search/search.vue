<script>
import Advanced from './components/advanced'
import Item from './components/item'
import resources from '../resources'
import crud from '@/crud/search/search'

import { dateToShow } from '@/helpers/dates'

export default {
  name: 'quizzes-index',

  components: {
    Advanced,
    Item
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover a prova/trabalho <b>' + this.currentEntity.label + '</b>?'
      }
    }
  },
  data () {
    return {
      includes: ['schedule']
    }
  },
  methods: {
    prepareShow (quiz) {
      quiz.date = dateToShow(quiz.date)

      return quiz
    }
  },

  mixins: [crud, resources]
}
</script>
