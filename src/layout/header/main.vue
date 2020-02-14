<script>
import Left from './left'
import Right from './right'
import Brand from './brand'

export default {
  name: 'header-main',
  components: {
    Left,
    Brand,
    Right
  },
  data () {
    return { isOpen: false }
  },
  methods: {
    onToggleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template lang="pug">
  header.main-header
    // Logo
    a.logo(href="/")
      // mini logo for sidebar mini 50x50 pixels
      span.logo-mini
        b S
        | ch
      // logo for regular state and mobile devices
      span.logo-lg
        b Inicio
    nav.navbar.navbar-inverse.navbar-fixed-top(role="navigation")
      brand(@toggle="onToggleMenu")
      .collapse.navbar-collapse(:class="{ in: isOpen }")
        left
        right
</template>
