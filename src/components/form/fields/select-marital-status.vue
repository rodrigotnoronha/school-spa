<script>
import Select from './select'

export default {
  name: 'f-select-marital-status',
  extends: Select,
  props: {
    options: {
      type: Array,
      default: () => [
        {
          id: 'married',
          label: 'Casado'
        },
        {
          id: 'single',
          label: 'Solteiro'
        },
        {
          id: 'widower',
          label: 'Viúvo'
        },
        {
          id: 'divorced',
          label: 'Separado'
        }
      ]
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
