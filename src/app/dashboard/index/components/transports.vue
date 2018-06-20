<script>
export default {
  name: 'dashboard-transports',
  props: {
    transports: null,
    route: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
  .small-box.bg-red
    .inner
      h3 {{ transports }}
      |
      p Transportes
    |
    .icon
      i.ion-social-twitch
    |
    router-link.small-box-footer(:to="{name: route}")
      | Veja Mais
      i.fa.fa-arrow-circle-right
</template>
