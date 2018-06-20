<script>
export default {
  name: 'dashboard-students',
  props: {
    students: null,
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
  .small-box.bg-aqua
    .inner
      h3 {{ students }}
      |
      p Estudantes
    |
    .icon
      i.ion-social-twitch
    |
    router-link.small-box-footer(:to="{name: route}")
      | Veja Mais
      i.fa.fa-arrow-circle-right
</template>
