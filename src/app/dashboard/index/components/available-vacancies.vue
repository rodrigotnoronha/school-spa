<script>
export default {
  name: 'dashboard-available-vacancies',
  props: {
    availableVacancies: null,
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
  .small-box.bg-yellow
    .inner
      h3 {{ availableVacancies }}
      |
      p Vagas Dispon&iacute;veis
    |
    .icon
      i.ion.ion-person-add
    |
    router-link.small-box-footer(:to="{name: route}")
      | Veja Mais
      i.fa.fa-arrow-circle-right
</template>
