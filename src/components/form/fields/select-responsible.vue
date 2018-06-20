<script>
// base ajax selector.
import SelectUser from './select-user'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-responsible',

  // component extends base ajax select.
  extends: SelectUser,

  // ajax resource path
  resourcePath: '/v1/search/users/responsibles'
}
</script>
