<script>
import user from '@/app/shared/users/search/search'
import resources from '../resources'

export default {
  name: 'students-index',
  props: {
    noAdd: {
      type: Boolean,
      default: true
    },
    noDelete: {
      type: Boolean,
      default: true
    }
  },
  mixins: [user, resources]
}
</script>
