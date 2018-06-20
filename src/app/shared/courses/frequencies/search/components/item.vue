<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'frequencies-index-item',
  mixins: [resources]
}
</script>

<template lang="pug">
tr
  td {{ item.date }}
  td
    strong {{ item | getValue('subject.label') }}
  td {{ item | getValue('student.name') }}
  td {{ item.present }}
  td {{ item.justified_absence }}
  td(v-if="buttonSelect")
    button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
  td(v-if="!noActions")
    slot
</template>
