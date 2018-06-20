<script>
// base ajax selector.
import SelectGroup from './select-group'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-teacher-group',

  // component extends base ajax select.
  extends: SelectGroup,

  // ajax resource path
  resourcePath: '/teacher/courses/groups'
}
</script>
