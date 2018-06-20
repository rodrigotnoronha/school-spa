<script>
import { mapActions, mapGetters } from 'vuex'
import { isEmpty, get } from 'lodash'

const credentials = {
  username: 'admin@user.com',
  password: 'abc123'
}

export default {
  name: 'auth-login',

  computed: {
    ...mapGetters(['isLogged']),
    isValid () {
      return !isEmpty(this.user.username) && !isEmpty(this.user.password)
    }
  },

  data () {
    return {
      user: {
        username: null,
        password: null,
        remember: true
      }
    }
  },

  methods: {
    ...mapActions(['setupJWT', 'updateUserData', 'logout']),
    doReset () {
      this.user = {
        username: null,
        password: null,
        remember: true
      }
      if (get(process.env, 'NODE_ENV') === 'development') {
        this.user = {...this.user, ...credentials}
      }
    },
    doLogin () {
      this.logout()
      this.$resource.post('', this.user)
        .then(({data}) => {
          this.doReset()
          Promise.all([
            this.setupJWT(data.token),
            this.updateUserData(data.user)
          ]).then(() => {
            this.$router.push({name: 'dashboard.index'})
          })
        }).catch(() => {
          this.user.password = null
        })
    }
  },

  mounted () {
    this.doReset()
    if (this.modal === true) {
      return
    }
  },

  props: {
    modal: {
      type: Boolean,
      default: false
    }
  },

  resourcePath: '/auth/login'
}
</script>

<template lang="pug">
  .row(v-if="!isLogged")
    .login-box
      .login-box-body
        form(@submit.prevent="doLogin()")
          p.login-box-msg Entre com seus dados
          .form-group.has-feedback
            input.form-control(type="email", placeholder="Email", v-model="user.username")
          .form-group.has-feedback
            input.form-control(type="password", placeholder="Senha", v-model="user.password")
          .row
            .col-xs-8
              .checkbox.icheck
                label
                  input(i-check="", type="checkbox", v-model="user.remember")
                  |  Lembrar de mim
            .col-xs-4
              button.btn.btn-primary.btn-block.btn-flat(type="submit", :disabled="!isValid") Entrar
          router-link(:to="{name: 'auth.forgot', query: {email: user.username}}")
            a Esqueci a senha
</template>
