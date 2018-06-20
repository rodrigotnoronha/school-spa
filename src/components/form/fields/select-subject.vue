<script>
// base ajax selector.
import SelectAjax from './select-ajax/select-ajax'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-subject',

  // component extends base ajax select.
  extends: SelectAjax,

  // ajax resource path
  resourcePath: '/v1/search/courses/subjects',
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
    }
  }
}
</script>
