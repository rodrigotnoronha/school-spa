<script>
export default {
  name: 'advanced',
  data () {
    return {
      search: {
        id: null,
        name: null,
        email: null,
        phone: null
      }
    }
  },
  methods: {
    doFilter () {
      this.$emit('do-filter', this.prepareSearch(this.search))
    },
    prepareSearch (search) {
      return search
    }
  }
}
</script>

<template lang="pug">
  .row
    .col-md-1
      f-text(label="ID", v-model="search.id")
    .col-md-3
      f-text(label="Nome", v-model="search.name")
    .col-md-3
      f-email(label="Email", v-model="search.email")
    .col-md-2
      f-phone(label="Telefone", v-model="search.phone")
    .col-md-1.text-right
      label &emsp;
      button.btn-success.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
