<script>
export default {
  name: 'advanced',
  data () {
    return {
      search: {
        id: null,
        name: null,
        email: null,
        phone: null,
        country_register: null
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
      f-text(label="Nome", v-model="search.name")
    .col-md-3
      f-email(label="Diretor", v-model="search.director")
    .col-md-2
      f-phone(label="Telefone", v-model="search.phone")
    .col-md-2
      f-document(label="CNPJ", v-model="search.country_register")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
