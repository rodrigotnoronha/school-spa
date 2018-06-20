<script>
import select from './select'

/**
 * Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-active',

  // default form field resources.
  mixins: [select],

  // custom select props
  props: {
    options: {
      type: Array,
      default: () => {
        return [
          {id: true, label: 'Ativo'},
          {id: false, label: 'Inativo'}
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
