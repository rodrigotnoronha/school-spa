<script>
import { isEmpty, get } from 'lodash'
import { dateToIso } from '@/helpers/dates'

const getGrade = (item) => {
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

  search.value = getGrade(item)
  search['quiz'] = {
    date: getDate(item)
  }
  if (isEmpty(search.quiz.date)) {
    delete search.quiz
  }

  return search
}

export default {
  name: 'advanced',

  data () {
    return {
      search: {
        id: null,
        value: {
          start: null,
          end: null
        },
        date: {
          start: '',
          end: ''
        },
        quiz: {
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
      .col-md-2
        f-text(label="ID", v-model="search.id")
      .col-md-5
        f-text(label="prova", v-model="search.quiz.label")
      .col-md-5
        f-text(label="Estudante", v-model="search.student.name")
    .row
      .col-md-3
        f-date(label="Data inicial", v-model="search.date.start")
      .col-md-3
        f-date(label="Data final", v-model="search.date.end")
      .col-md-3
        f-text(type="number", :min="0", :max="100", label="Nota inicial", v-model="search.value.start")
      .col-md-3
        f-text(type="number", :min="0", :max="100", label="Nota final", v-model="search.value.end")
    .row
      .col-md-1.text-right
        label &emsp;
        button.btn-primary.btn.form-control(@click.prevent="doFilter()") Filtrar
</template>
