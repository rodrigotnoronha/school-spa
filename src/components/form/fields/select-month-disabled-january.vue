<script>
import Select from './select'
import { map } from 'lodash'

const options = () => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  return map(months, (month, index) => {
    return {
      id: index + 1,
      label: month,
      $isDisabled: (index === 0)
    }
  })
}

export default {
  name: 'month',
  extends: Select,
  props: {
    options: {
      type: Array,
      default: () => options()
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
