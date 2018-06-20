import { mapGetters } from 'vuex'
import { get } from 'lodash'

const profiles = {
  admin: 'Administrador',
  responsible: 'Responsável',
  student: 'Aluno(a)',
  teacher: 'Professor(a)'
}

export default {
  ...mapGetters([
    'tenant',
    'tenantsTotal',
    'tenants',
    'isLogged',
    'user',
    'userIsAdmin',
    'userIsResponsible',
    'userIsStudent',
    'userIsTeacher',
    'userLastProfile',
    'userTotalProfiles'
  ]),
  whoAmi () {
    return get(profiles, this.menu, '')
  }
}
