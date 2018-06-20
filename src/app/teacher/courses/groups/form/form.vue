<script>
import resources from '../resources'
import group from '@/app/shared/courses/groups/form/form'

export default {
  name: 'teacher-groups-form',

  data () {
    return {
      noSave: true
    }
  },

  mixins: [group, resources]
}
</script>
