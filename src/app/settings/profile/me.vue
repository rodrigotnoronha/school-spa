<script>
import resources from '@/app/shared/users/form/form'

export default {
  name: 'profile',

  data () {
    return {
      title: 'Configurações->Profile',
      links: [
        {
          title: 'Settings',
          route: null,
          icon: 'fa fa-cog'
        },
        {
          title: 'Profile',
          route: 'settings.profile.me',
          icon: 'fa fa-user'
        }
      ]
    }
  },

  methods: {
    afterSave (data, entity) {
      this.$toast.success('Dados alterado com sucesso!')
    },
    afterLoadItem (data) {
      const { name } = data
      this.name = name

      data.id = 'me'

      return data
    }
  },

  mixins: [resources],

  mounted () {
    this.getItem('me')
  },

  resourcePath: 'settings/profile/'
}
</script>
