<script>
import resources from '@/crud/search/components/advanced'

export default {
  name: 'subjects-index-advanced',
  data () {
    return {
      search: {
        id: null,
        label: null
      }
    }
  },
  mixins: [resources]
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
