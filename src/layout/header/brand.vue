<script>
export default {
  name: 'header-brand',
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<template lang="pug">
  .navbar-header
    // Sidebar toggle button
    a.sidebar-toggle(href="#", data-toggle="offcanvas", role="button")
      span.sr-only Toggle navigation
</template>
