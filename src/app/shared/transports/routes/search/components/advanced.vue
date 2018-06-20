<script>
export default {
  name: 'advanced',

  data () {
    return {
      search: {
        id: null,
        label: null
      }
    }
  },
  methods: {
    doFilter () {
      this.$emit('do-filter', this.search)
    }
  }
}
</script>

<template lang="pug">
  .row
    .col-md-1
      f-text(label="ID", v-model="search.id")
    .col-md-3
      f-text(label="Nome", v-model="search.label")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
