<script>
import resources from '../resources'
import quiz from '@/app/shared/courses/quizzes/form/form'

import { dateToShow, dateToIso } from '@/helpers/dates'

export default {
  name: 'teacher-quizzes-form',

  methods: {
    onSelectedSchedule (schedule) {
      this.day = schedule.day
      this.quiz.date = null
    },
    prepareSave (quiz) {
      quiz.date = dateToIso(quiz.date)
      delete quiz.schedule

      return quiz
    },

    prepareShow (quiz) {
      this.day = quiz.schedule.day
      this.schedules = [quiz.schedule]
      quiz.group_id = quiz.schedule.group_id
      quiz.date = dateToShow(quiz.date)

      return quiz
    },
    setDataFromGroup (group) {
      this.quiz.date = null
      this.schedules = group.my_schedules
    }
  },

  mixins: [quiz, resources]
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    section.content
      .row
        .col-md-12
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
                    .form-group.col-md-6(style="z-index: 1000")
                      f-select-teacher-group(label="Turma", v-model="quiz.group_id", :errors="errors['group_id']", label-by="complete_label", :parameters="{includes: ['my_schedules']}", @selected="setDataFromGroup")
                    .form-group.col-md-6(style="z-index: 900")
                      label(v-if="!quiz.group_id") Selecione uma turma que tenha disciplina cadastrada, para liberar a seleção de disciplinas
                      f-select(v-if="quiz.group_id", label="Horário/Disciplina", v-model="quiz.schedule_id", :errors="errors['schedule_id']", :options="schedules", :searchable="false", @selected="onSelectedSchedule")

                  .row
                    .form-group.col-md-6(v-if="quiz.schedule_id")
                      f-date(:only-day="day", label="Data", name="date", v-model="quiz.date", :errors="errors['date']")
                    .form-group.col-md-6
                      f-text(label="Nome", v-model="quiz.label", :errors="errors['label']")
                  .row
                    .form-group.col-md-6
                      f-text(label="Valor da prova/trabalho", type="number", v-model="quiz.score", :errors="errors['score']")
                    .form-group.col-md-6
                      f-select-yes-no(label="Prova de recuperação?", v-model="quiz.proof_of_recovery", :errors="errors['proof_of_recovery']")
                  .row
                    .form-group.col-md-6
                      f-select(label="Tipo", v-model="quiz.kind", :errors="errors['kind']", :options="kindOptions", :searchable="false")
</template>
