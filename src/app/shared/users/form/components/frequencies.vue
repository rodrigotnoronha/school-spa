<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
import { isEmpty, filter } from 'lodash'

export default {
  name: 'frequencies',

  computed: {
    ...mapGetters(['user'])
  },
  data () {
    return {
      subjects: [],
      frequencies: [],
      group_id: null,
      month: parseInt(moment().format('M'))
    }
  },
  methods: {
    doLoad () {
      this.frequencies = []
      if (isEmpty(this.group_id)) {
        return
      }
      const userId = (this.userId === this.user.id) ? 'me' : this.userId

      this.$resource.get(userId + '/groups/' + this.group_id + '/frequencies/month/' + this.month)
        .then(({data}) => {
          const prepareShow = frequencies => {
            if (frequencies.length === 0) {
              return
            }
            const keys = Object.keys(frequencies[0])
            const subjects = filter(keys, item => {
              return item !== 'day' && item !== 'school_day'
            })

            this.subjects = subjects

            return frequencies
          }

          this.frequencies = prepareShow(data)
        })
    }
  },
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  watch: {
    'group_id' (value) {
      this.doLoad()
    },
    month (value) {
      this.doLoad()
    }
  },

  resourcePath: '/student/users/'
}
</script>

<template lang="pug">
  div
    table.table.table-bordered.tabela
      tbody
        tr
          th(scope='col')
            .form-group
              f-select-student-group(label="Selecione a série",  v-model="group_id", :get-all="true", :searchable="false", @selected="doLoad")
          th(scope='col')
            .form-group
              f-select-month-disabled-january(label="Mês", v-model="month")
    table.table.table-bordered.table-striped.tabela(v-if="month > 1 && group_id")
      tbody
        tr
          th(:colspan="subjects.length + 1", scope='col', style='text-align: center;text-transform: uppercase;') Matérias
        tr.materias
          th(scope='row') Dia
          td(v-for="subject in subjects") {{ subject }}
        tr(v-for="frequency in frequencies")
          th(scope='row') {{ frequency.day }}
          td(v-for="subject in subjects") {{ frequency[subject] }}
</template>
