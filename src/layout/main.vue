<script>
import RootHeader from './header/main.vue'
import RootAside from './aside/main.vue'
import RootContent from './content/main.vue'
import Auth from '@/app/auth/form/login.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters(['isLogged']),
    isAuthRoute () {
      return this.$route.path.indexOf('auth') > -1
    },
    authenticateRequired () {
      return (this.$route.meta.auth === undefined || this.$route.meta.auth === true)
    }
  },
  components: {
    RootHeader,
    RootContent,
    RootAside,
    Auth
  },
  data () {
    return {
      showAuth: false
    }
  },
  methods: {
    logged (auth) {
      this.showAuth = auth || false
    }
  }
}
</script>

<template lang="pug">
  #app.wrapper
    header
      root-header
    aside
      root-aside
    root-content
    .control-sidebar-bg
</template>

<style src="assets/sass/app.scss" lang="sass">
</style>
