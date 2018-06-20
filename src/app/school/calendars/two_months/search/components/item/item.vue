<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'two_months-index-item',
  mixins: [resources]
}
</script>

<template lang="pug">
  tr
    td
      strong {{ item.id }}
    td {{ item.first }}
    td {{ item.second }}
    td {{ item.third }}
    td {{ item.fourth }}
    td(v-if="!noActions")
      slot
</template>
