<script>
import { mapActions } from 'vuex'

export default {
  name: 'auth-reset',
  data () {
    return {
      reset: {
        token: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      loading: false
    }
  },
  mounted () {
    this.reset.token = this.$route.params.token
  },
  methods: {
    ...mapActions(['setupJWT']),
    doReset () {
      this.loading = true
      this.$http.post('/auth/password/reset', this.reset).then(({ data, meta }) => {
        this.$toast.success(meta.message)
        this.setupJWT(data.token)
          .then(() => {
            this.$router.push({ name: 'index' })
          })
      }).catch((er) => {
        this.loading = false
      })
    }
  }
}
</script>

<template lang="pug">
  .row
    .login-box
      .login-box-body
        p.login-box-msg Recuperar senha!
          form(v-on:submit.prevent="doReset")
            div.fields
              f-email(name="email", label="Email", v-model="reset.email")
              f-password(name="passowrd", label="Nova senha", v-model="reset.password")
              f-password(name="password_confirmation", label="Confirme a senha", v-model="reset.password_confirmation")
            spinner(:show="loading")
            div.buttons(v-if="!loading")
              button.btn.btn-primary(type="submit") Alterar senha

</template>
