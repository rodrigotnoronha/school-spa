import { mapActions } from 'vuex'

export default {
  ...mapActions(['setupJWT', 'updateUserData']),
  onSelectTenant (tenant) {
    this.$resource.post('/change', { tenant_id: tenant.id })
      .then(({data}) => {
        this.$toast.success('Suas ações agora terão efeitos na escola: ' + tenant.name)
        this.setupJWT(data.token)
          .then(() => {
            this.updateUserData(data.user)
            this.$router.push({name: 'dashboard.index'})
          })
      })
      .catch(() => {
        const currentTenant = {...this.tenant}

        this.school = currentTenant
      })
  },
  doStart () {
    this.school = {...this.tenant}
  },
  doToggleMenu (menu) {
    if (this.menu === menu) {
      this.menu = ''
    } else {
      this.menu = menu
    }
  }
}
