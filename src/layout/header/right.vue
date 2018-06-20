<script>
import { mapGetters } from 'vuex'

export default {
  name: 'header-right',
  computed: {
    ...mapGetters(['isLogged', 'user'])
  }
}
</script>

<template lang="pug">
  ul.nav.navbar-nav.navbar-right(style="margin-right: 10px")
    router-link(:to="{name: 'auth.login'}", tag="li", v-if="!isLogged")
      a Entrar

    li.dropdown.user.user-menu(v-if="isLogged")
      a.dropdown-toggle(href="", data-toggle="dropdown", role="button", aria-expanded="true")
        img.user-image(:src='user.avatar', :alt='user.name')
        span.hidden-xs {{ user.name }}
        span.caret
      ul.dropdown-menu(role="menu")
        li.user-header
          p
            | {{ user.name }}
        li.user-body
        li
          .pull-left
            router-link(:to="{name: 'settings.profile.me'}")
              a.btn.btn-default.btn-flat Profile
          .pull-right
            router-link.pull-left(:to="{name: 'auth.logout'}")
              a.btn.btn-default.btn-flat Logout
</template>
