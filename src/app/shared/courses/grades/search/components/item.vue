<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'grades-index-item',
  mixins: [resources]
}
</script>

<template lang="pug">
tr
  td {{ item.id }}
  td
    strong {{ item.quiz.label }}
  td {{ item.quiz.date }}
  td {{ item.student.name }}
  td {{ item.value }}
  td(v-if="buttonSelect")
    button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
  td(v-if="!noActions")
    slot
</template>
