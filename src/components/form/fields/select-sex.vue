<script>
import select from './select'

/**
 * Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-sex',

  // default form field resources.
  mixins: [select],

  // custom select props
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          {id: null, label: 'Não informado'},
          {id: 'male', label: 'Masculino'},
          {id: 'female', label: 'Feminino'}
        ]
      }
    },
    searchable: {
      type: Boolean,
      default: false
    }
  }
}
</script>
