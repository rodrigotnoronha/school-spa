<script>
import resources from '../resources'
import crud from '@/crud/form/form'
import { dateToShow } from '@/helpers/dates'

export default {
  name: 'grades-edit',
  data () {
    return {
      title: 'Editar de nota',
      subTitle: 'Editar nota',
      errors: {
      },
      grade: {
        id: null,
        label: null,
        student_id: null,
        quiz_id: null,
        quiz: {},
        value: null,
        student: {}
      },
      maxScore: null,
      includes: ['student', 'quiz']
    }
  },
  methods: {
    afterLoadItem (grade) {
      this.maxScore = grade.quiz.score

      return grade
    },
    prepareShow (grade) {
      grade.quiz.date = dateToShow(grade.quiz.date)

      return grade
    }
  },

  mixins: [crud, resources],

  resourcePath: '/school/courses/grades'
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
                    .form-group.col-md-3
                        label Prova
                        br
                        label
                          b  {{ grade | getValue('quiz.label') }}
                    .form-group.col-md-3
                        label Data
                        br
                        label
                          b  {{ grade.quiz.date }}
                    .form-group.col-md-3
                      label Estudante
                      br
                      label
                        b  {{ grade | getValue('student.name') }}
                    .form-group.col-md-3
                      f-text(label="Nota", type="number", :step="0.1", :min="1", :max="maxScore", v-model="grade.value", :errors="errors['grade.value']")
</template>
