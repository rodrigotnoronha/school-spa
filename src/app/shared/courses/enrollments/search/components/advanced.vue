<script>
export default {
  name: 'advanced',

  data () {
    return {
      search: {
        student_id: null,
        route_id: null,
        group_id: null
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
    .col-md-3
      f-select-student(label="Estudante", v-model="search.student_id")
    .col-md-3
      f-select-group(label="Turma", v-model="search.group_id")
    .col-md-3
      f-select-route(label="Rota", v-model="search.route_id")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
