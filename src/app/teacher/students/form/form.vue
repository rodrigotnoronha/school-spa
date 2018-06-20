<script>
import user from '@/app/shared/users/form/form'
import resources from '../resources'

export default {
  name: 'student-form',
  mixins: [user, resources],
  data () {
    return {
      subTitle: 'Adicionar novo(a) aluno(a)'
    }
  }
}
</script>
