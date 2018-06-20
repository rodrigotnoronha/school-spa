<script>
import resources from '../resources'
import subject from '@/app/shared/courses/subjects/search/search'

export default {
  name: 'teacher-subjects-index',

  props: {
    noActions: {
      type: Boolean,
      default: true
    }
  },

  mixins: [subject, resources]
}
</script>
