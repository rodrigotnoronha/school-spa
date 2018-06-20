<script>
import { mapGetters } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  name: 'auth-forgot',

  computed: {
    ...mapGetters(['isLogged']),
    isValid () {
      return !isEmpty(this.forgot.email)
    }
  },
  data () {
    return {
      forgot: {
        route: null,
        email: null
      },
      sent: false,
      loading: false
    }
  },

  methods: {
    doSend () {
      this.loading = true
      this.$resource.post('', this.forgot).then(({data}) => {
        this.$toast.warning(data.status)
        this.sent = true
        this.loading = false
      }).catch((er) => {
        this.loading = false
      })
    }
  },

  mounted () {
    this.forgot.route = document.location.origin + this.$router.resolve({name: 'auth.password.reset', params: {token: '{token}'}}).href
    this.forgot.email = this.$route.query.email || null
  },

  resourcePath: '/auth/password/email'
}
</script>

<template lang="pug">
  .row(v-if="!isLogged")
    .login-box
      .login-box-body
        form(@submit.prevent="doSend($event)")
          p.login-box-msg Esqueci minha senha
          .form-group.has-feedback
            input.form-control(type="email", placeholder="Email", v-model="forgot.email")
          .row
            .col-xs-4.pull-right
              button.btn.btn-primary.btn-block(type="submit", :disabled="!isValid") Recuperar
</template>
