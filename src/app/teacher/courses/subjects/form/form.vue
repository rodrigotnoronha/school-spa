<script>
import resources from '../resources'
import subject from '@/app/shared/courses/subjects/form/form'

export default {
  name: 'teacher-subjects-form',
  data () {
    return {
      noSave: true
    }
  },

  mixins: [subject, resources]
}
</script>
