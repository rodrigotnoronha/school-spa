<script>
// base ajax selector.
import SelectCourse from './select-course'

/**
 * Contact Select Field Component.
 */
export default {
  // component name.
  name: 'f-select-teacher-course',

  // component extends base ajax select.
  extends: SelectCourse,

  // ajax resource path
  resourcePath: '/teacher/courses/courses'
}
</script>
