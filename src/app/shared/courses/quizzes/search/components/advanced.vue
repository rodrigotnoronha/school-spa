<script>
import { isEmpty, get } from 'lodash'
import { dateToIso } from '@/helpers/dates'

const getDate = (item) => {
  const start = getValue(item.date, 'start')
  const end = getValue(item.date, 'end')

  if (isEmpty(start) && isEmpty(end)) {
    return
  }

  if (isEmpty(start)) {
    return ['0000-00-00', dateToIso(end)]
  }
  if (isEmpty(end)) {
    return [dateToIso(start), '0000-00-00']
  }
  return [dateToIso(start), dateToIso(end)]
}

const getValue = (value, key) => {
  return get(value, key, null)
}

const prepareSearch = (item) => {
  const search = {...item}

  search.date = getDate(item)

  if (isEmpty(search.date)) {
    delete search.date
  }

  return search
}

export default {
  name: 'advanced',

  data () {
    return {
      search: {
        id: null,
        label: null,
        skill: {
          label: null
        },
        date: {
          start: null,
          end: null
        },
        proof_of_recovery: null
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
    .col-md-2
      f-text(label="Prova/Trabalho", v-model="search.label")
    .col-md-2
      f-text(label="Disciplina", v-model="search.skill.label")
    .col-md-2
      f-date(label="Data inicial", v-model="search.date.start")
    .col-md-2
      f-date(label="Data final", v-model="search.date.end")
    .col-md-2
      f-select-yes-no-both(label="Prova de recuperação", v-model="search.proof_of_recovery")
    .col-md-1.text-right
      label &emsp;
      button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
