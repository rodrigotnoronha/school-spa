<script>
// base ajax selector.
import SelectAjax from './select-ajax/select-ajax'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-course',

  // component extends base ajax select.
  extends: SelectAjax,

  // ajax resource path
  resourcePath: '/v1/search/courses/courses',
  props: {
    query: {
      type: String,
      default: 'name'
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
