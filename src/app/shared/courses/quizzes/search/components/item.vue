<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'quizzes-index-item',

  mixins: [resources]
}
</script>

<template lang="pug">
tr
  td {{ item.id }}
  td
    strong {{ item.label }}
  td {{ item.schedule.label }}
  td {{ item.date }}
  td {{ item.score }}
  td(v-if="buttonSelect")
    button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
  td(v-if="!noActions")
    slot
    a.btn.btn-circle-micro.btn-danger(@click.prevent="doDelete(item)")
      span.fa.fa-close
</template>
