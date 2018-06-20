<script>
import Select from './select'

export default {
  name: 'f-select-yes-no',
  extends: Select,
  props: {
    options: {
      type: Array,
      default: () => [
        {id: null, label: 'Ambos(as)'},
        {id: true, label: 'Sim'},
        {id: false, label: 'Não'}
      ]
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
