<script>
import resources from '../resources'
import crud from '@/crud/search/search'
import moment from 'moment'
import Item from './components/item/item'
import Advanced from './components/advanced/advanced'

const dateToShow = date => moment(date).format('DD/MM')

export default {
  name: 'two_months-index',
  mixins: [crud, resources],
  components: {
    Item,
    Advanced
  },
  computed: {
    getMessageConfirmation () {
      return {
        message: 'Tem certeza que deseja remover os bimestres do ano <b>' + this.currentEntity.id + '</b>?'
      }
    }
  },
  data () {
    return {
      search: {
        id: moment().format('YYYY'),
        page: 1,
        limit: 100
      },
      columns: {
        id: 'Ano',
        first: '1º bimestre',
        second: '2º bimestre',
        third: '3º bimestre',
        fourth: '4º bimestre'
      }
    }
  },
  methods: {
    prepareShow (item) {
      item.first = dateToShow(item.start1) + ' a ' + dateToShow(item.end1)
      item.second = dateToShow(item.start2) + ' a ' + dateToShow(item.end2)
      item.third = dateToShow(item.start3) + ' a ' + dateToShow(item.end3)
      item.fourth = dateToShow(item.start4) + ' a ' + dateToShow(item.end4)

      return item
    }
  },
  props: {
    activeFilter: {
      type: Boolean,
      default: true
    }
  }
}

</script>
