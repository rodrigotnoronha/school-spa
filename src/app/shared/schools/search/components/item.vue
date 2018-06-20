<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'schools-index-item',

  mixins: [resources]
}
</script>

<template lang="pug">
tr
  td {{ item.id }}
  td
    strong {{ item.name }}
  td {{ item.director.name }}
  td {{ item.address.label }}
  td {{ item.phones.work }}
  td
    span.label.label-success {{ item.active }}
  td(v-if="buttonSelect")
    button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
  td(v-if="!noActions")
    slot
    a.btn.btn-circle-micro.btn-danger(@click.prevent="doDelete(item)")
      span.fa.fa-close
</template>
