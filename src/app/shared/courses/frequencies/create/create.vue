<script>
import resources from '../resources'
import crud from '@/crud/form/form'

import { map } from 'lodash'
import { dateToIso } from '@/helpers/dates'

export default {
  name: 'frequencies-form',
  data () {
    return {
      title: 'Cadastro de frequência',
      subTitle: 'Adicionar frequência',
      errors: {
        studends: {}
      },
      frequency: {
        id: null,
        date: null,
        schedule_id: null,
        value: null,
        studends: []
      },
      day: null,
      students: [],
      schedules: []
    }
  },
  methods: {
    setDataFromGroup (group) {
      this.students = map(group.students, (student) => {
        return {
          ...student,
          id: student.id,
          student_id: student.id,
          present: true,
          justified_absence: false
        }
      })
      this.schedules = group.my_schedules
    },
    onSelectedSchedule (schedule) {
      this.day = schedule.day
      this.frequency.date = null
    },
    prepareSave (frequency) {
      frequency.students = map(this.students, student => {
        return {
          student_id: student.id,
          present: student.present,
          justified_absence: (!student.present) ? student.justified_absence : false
        }
      })

      frequency.date = dateToIso(frequency.date)

      return frequency
    }
  },

  mixins: [crud, resources],

  resourcePath: '/school/courses/frequencies/several'
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    section.content
      .row
        .col-sm-12
          // Default box
          .box.box-success
            .box-header.with-border
              h3.box-title {{ title }}
              .box-tools.pull-right
                button.btn.btn-primary.btn-success(@click.prevent="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .row
                    .form-group.col-md-4(style="z-index: 1000")
                      f-select-group(label="Turma", v-model="frequency.group_id", :errors="errors['group_id']", label-by="complete_label", :parameters="{includes: ['my_schedules.skill', 'students']}", @selected="setDataFromGroup")
                    .form-group.col-md-4(style="z-index: 900")
                        div.form-group(v-if="!frequency.group_id")
                          label Selecione uma turma, para liberar a seleção de horário
                        f-select(v-if="frequency.group_id", label="Horário", v-model="frequency.schedule_id", :errors="errors['schedule_id']", :options="schedules", :searchable="false", @selected="onSelectedSchedule")
                    .form-group.col-md-4(v-if="frequency.schedule_id")
                      f-date(:only-day="day", label="Data", v-model="frequency.date", :errors="errors['date']")
                  .row
                    .form-group.col-md-6
                      label
                        b Estudante
                    .form-group.col-md-3
                      label
                        b Presente
                    .form-group.col-md-3
                      label
                        b Falta justificada
                  .row(v-for="(student, index) in students", :key="student.id")
                    .form-group.col-md-6
                      | {{ student.label }}
                    .form-group.col-md-3
                      input(type="checkbox", v-model="students[index].present", :errors="errors['students.' + index + '.present']")
                    .form-group.col-md-3(v-if="!students[index].present")
                      input(type="checkbox", v-model="students[index].justified_absence", :errors="errors['students.' + index + '.justified_absence']")
</template>
