<script>
// base ajax selector.
import SelectAjax from './select-ajax/select-ajax'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-user',

  // component extends base ajax select.
  extends: SelectAjax,

  // ajax resource path
  resourcePath: '/v1/search/users/users',
  props: {
    query: {
      type: String,
      default: 'name'
    }
  }
}
</script>
