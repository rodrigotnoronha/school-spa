<script>
import { mapGetters } from 'vuex'
import { isEmpty } from 'lodash'

export default {
  name: 'grades',
  computed: {
    ...mapGetters(['user'])
  },
  data () {
    return {
      first: [],
      second: [],
      third: [],
      fourth: [],
      subjects: [],
      group: {
        label: null,
        year: null
      }
    }
  },
  methods: {
    onSelectGroup (group) {
      if (isEmpty(group)) {
        this.grades = []
      } else {
        this.group.label = group.label
        this.group.year = group.year
        this.doLoad(group.id)
      }
    },
    doLoad (groupId) {
      const userId = (this.userId === this.user.id) ? 'me' : this.userId

      this.$resource.get(userId + '/groups/' + groupId + '/grades')
        .then(({data}) => {
          this.first = data.first
          this.second = data.second
          this.third = data.third
          this.fourth = data.fourth
        })
    }
  },
  props: {
    userId: {
      type: String,
      required: true
    }
  },

  resourcePath: '/student/users/'
}
</script>

<template lang="pug">
  div
    div
      .form-group
        f-select-student-group(label="Selecione a série", :get-all="true", :searchable="false", @selected="onSelectGroup")
    table.table.table-bordered.table-striped(v-if="first.length > 0")
      tbody
        tr
          th(rowspan='2', scope='col', style='vertical-align: middle;text-align: center;') Disciplina
          th(colspan='4', scope='col', style='text-align: center;') 1º Bimestre
          th(colspan='3', scope='col', style='text-align: center;') Avaliação / Situação
        tr
          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') AC
          th(style='text-align: center;') % Freq

          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') Situação

        tr(v-for="grade in first")
          td {{ grade.subject }}
          td.vermelho(align='center') {{ grade.grade }}
          td(align='center') {{ grade.absence }}
          td(align='center') {{ grade.justified_absence }}
          td(align='center') {{ grade.percent }}%

          td.vermelho(align='center')
          td(align='center')
          td(align='center')

    table.table.table-bordered.table-striped(v-if="second.length > 0")
      tbody
        tr
          th(rowspan='2', scope='col', style='vertical-align: middle;text-align: center;') Disciplina
          th(colspan='4', scope='col', style='text-align: center;') 2º Bimestre
          th(colspan='3', scope='col', style='text-align: center;') Avaliação / Situação
        tr
          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') AC
          th(style='text-align: center;') % Freq

          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') Situação

        tr(v-for="grade in second")
          td {{ grade.subject }}
          td.vermelho(align='center') {{ grade.grade }}
          td(align='center') {{ grade.absence }}
          td(align='center') {{ grade.justified_absence }}
          td(align='center') {{ grade.percent }}%
          td.vermelho(align='center')
          td(align='center')
          td(align='center')

    table.table.table-bordered.table-striped(v-if="third.length > 0")
      tbody
        tr
          th(rowspan='2', scope='col', style='vertical-align: middle;text-align: center;') Disciplina
          th(colspan='4', scope='col', style='text-align: center;') 3º Bimestre
          th(colspan='3', scope='col', style='text-align: center;') Avaliação / Situação
        tr
          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') AC
          th(style='text-align: center;') % Freq

          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') Situação

        tr(v-for="grade in third")
          td {{ grade.subject }}
          td.vermelho(align='center') {{ grade.grade }}
          td(align='center') {{ grade.absence }}
          td(align='center') {{ grade.justified_absence }}
          td(align='center') {{ grade.percent }}%
          td.vermelho(align='center')
          td(align='center')
          td(align='center')

    table.table.table-bordered.table-striped(v-if="fourth.length > 0")
      tbody
        tr
          th(rowspan='2', scope='col', style='vertical-align: middle;text-align: center;') Disciplina
          th(colspan='4', scope='col', style='text-align: center;') 2º Bimestre
          th(colspan='3', scope='col', style='text-align: center;') Avaliação / Situação
        tr
          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') AC
          th(style='text-align: center;') % Freq

          th(style='text-align: center;') N
          th(style='text-align: center;') F
          th(style='text-align: center;') Situação

        tr(v-for="grade in fourth")
          td {{ grade.subject }}
          td.vermelho(align='center') {{ grade.grade }}
          td(align='center') {{ grade.absence }}
          td(align='center') {{ grade.justified_absence }}
          td(align='center') {{ grade.percent }}%

          td.vermelho(align='center')
          td(align='center')
          td(align='center')
</template>
