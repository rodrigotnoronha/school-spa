<script>
// base ajax selector.
import SelectAjax from './select-ajax/select-ajax'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-skill',

  // component extends base ajax select.
  mixins: [SelectAjax],

  // ajax resource path
  resourcePath: '/v1/search/courses/skills',
  props: {
    query: {
      type: String,
      default: 'label'
    },
    getAll: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Selecione a disciplina'
    }
  }
}
</script>
