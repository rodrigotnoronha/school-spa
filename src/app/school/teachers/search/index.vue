<script>
import user from '@/app/shared/users/search/search'
import resources from '../resources'

export default {
  name: 'teacher-index',
  mixins: [user, resources],
  data () {
    return {
      subTitle: 'Lista de professores(as)'
    }
  }
}
</script>
