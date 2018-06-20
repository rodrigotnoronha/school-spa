<script>
import { isEmpty, get } from 'lodash'

const getCapacity = (item) => {
  const start = getValue(item.capacity, 'start')
  const end = getValue(item.capacity, 'end')

  if (isEmpty(start) && isEmpty(end)) {
    return
  }
  if (isEmpty(start)) {
    return [0, end]
  }
  if (isEmpty(end)) {
    return [start, 999]
  }
  return [start, end]
}

const getValue = (capacity, key) => {
  return get(capacity, key, null)
}

const prepareSearch = (item) => {
  const search = {...item}

  search.capacity = getCapacity(item)

  return search
}

export default {
  name: 'advanced',
  data () {
    return {
      search: {
        id: null,
        label: null,
        board: null,
        capacity: {
          start: null,
          end: null
        }
      }
    }
  },

  methods: {
    doFilter () {
      this.$emit('do-filter', prepareSearch(this.search))
    }
  }
}
</script>

<template lang="pug">
  .row
    .col-md-1
      f-text(label="ID", v-model="search.id")
    .col-md-3
      f-text(label="Nome", v-model="search.label")
    .col-md-3
      f-text(label="Marca", v-model="search.board")
    .col-md-2
      f-text(:step="1", type="number", label="Capacidade inicial", v-model="search.capacity.start")
    .col-md-2
      f-text(:step="1", type="number", label="Capacidade final", v-model="search.capacity.end")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
