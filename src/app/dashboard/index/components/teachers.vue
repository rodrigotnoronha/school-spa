<script>
export default {
  name: 'dashboard-teachers',
  props: {
    teachers: null,
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
  .small-box.bg-green
    .inner
      h3 {{ teachers }}
      |
      p Professores
    |
    .icon
      i.ion-social-twitch
    |
    router-link.small-box-footer(:to="{name: route}")
      | Veja Mais
      i.fa.fa-arrow-circle-right
</template>
