<script>
import resources from '../resources'
import group from '@/app/shared/courses/groups/search/search'

export default {
  name: 'teacher-groups-index',

  props: {
    noDelete: {
      type: Boolean,
      default: true
    }
  },

  mixins: [group, resources]
}
</script>
