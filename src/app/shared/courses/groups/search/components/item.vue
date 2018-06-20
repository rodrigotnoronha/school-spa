<script>
import resources from '@/crud/search/components/item'

export default {
  name: 'groups-index-item',
  mixins: [resources]
}
</script>

<template lang="pug">
tr
  td {{ item.id }}
  td
    | {{ item.course.label }}
  td
    strong {{ item.label }}
  td
    | {{ item.year }}
  td {{ item.max_students }}
  td {{ item.available_vacancies }}
  td(v-if="buttonSelect")
    button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
  td.text-right(v-if="!noActions")
    slot
    a.btn.btn-circle-micro.btn-danger(v-if="!noDelete", @click.prevent="doDelete(item)")
      span.fa.fa-close
</template>
