<script>
import { isEmpty, get } from 'lodash'

const getFrequency = (item) => {
  const start = getValue(item.value, 'start')
  const end = getValue(item.value, 'end')

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

const getValue = (value, key) => {
  return get(value, key, null)
}

const prepareSearch = (item) => {
  const search = {...item}

  search.value = getFrequency(item)

  return search
}

export default {
  name: 'advanced',
  data () {
    return {
      search: {
        present: null,
        justified_absence: null,
        subject: {
          label: null
        },
        student: {
          name: null
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
  div
    .row
      .col-md-3
        f-text(label="Estudante", v-model="search.student.name")
      .col-md-3
        f-text(label="Disciplina", v-model="search.subject.label")
      .col-md-3
        f-select-yes-no-both(label="Presente", v-model="search.present")
      .col-md-3
        f-select-yes-no-both(label="Falta justificada", v-model="search.justified_absence")
    .row
      .col-md-1.text-right
        label &emsp;
        button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
