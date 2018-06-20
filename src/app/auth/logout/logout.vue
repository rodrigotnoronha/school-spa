<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout']),
    doLogout () {
      this.logout()
        .then(() => {
          this.$router.push({name: 'auth.login'})
        })
    }
  },
  mounted () {
    this.doLogout()
  }
}
</script>

<template lang="pug">
  div
</template>
