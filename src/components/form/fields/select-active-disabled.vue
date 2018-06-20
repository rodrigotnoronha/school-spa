<script>
import Select from './select'
export default {
  name: 'f-select-active-disabled',
  extends: Select,
  props: {
    options: {
      type: Array,
      default: () => [
        {id: true, label: 'Ativo'},
        {id: false, label: 'Desativado'}
      ]
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
