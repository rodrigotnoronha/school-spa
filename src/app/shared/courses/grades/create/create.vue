<script>
import resources from '../resources'
import crud from '@/crud/form/form'
import { map } from 'lodash'

export default {
  name: 'grades-form',
  data () {
    return {
      title: 'Cadastro de notas',
      subTitle: 'Adicionar nova nota',
      errors: {
        studends: {}
      },
      grade: {
        id: null,
        student_id: null,
        quiz_id: null,
        value: null,
        studends: []
      },
      students: [],
      quizzes: [],
      maxScore: 100
    }
  },
  methods: {
    setDataFromGroup (group) {
      this.students = map(group.students, (student) => {
        return {
          ...student,
          id: student.id,
          student_id: student.id,
          grade: 0
        }
      })
      this.quizzes = group.quizzes
    },
    setMaxScoreFromQuiz (quiz) {
      this.maxScore = quiz.score
    },
    prepareSave (grade) {
      grade.students = this.students

      return grade
    }
  },

  mixins: [crud, resources],

  resourcePath: '/school/courses/grades/several'
}
</script>

<template lang="pug">
  page(:title="title", :links="links")
    section.content
      .row
        .col-sm-12.col-md-6
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
                      f-select-group(label="Turma", v-model="grade.group_id", :errors="errors['group_id']", label-by="complete_label", :parameters="{includes: ['quizzes', 'students']}", @selected="setDataFromGroup")
                    .form-group.col-md-6(style="z-index: 900")
                        label(v-if="!grade.group_id") Selecione uma turma que tenha prova cadastrada, para liberar a seleção de prova/trabalho
                        f-select(v-if="grade.group_id", label="Prova/Trabalho", v-model="grade.quiz_id", :errors="errors['quiz_id']", :options="quizzes", :searchable="false", @selected="setMaxScoreFromQuiz")
                  .row
                    .form-group.col-md-6
                      label
                        b Estudante
                    .form-group.col-md-6
                      label
                        b Nota
                  .row(v-for="(student, index) in students", :key="student.id")
                    .form-group.col-md-6
                      | {{ student.label }}
                    .form-group.col-md-3
                      f-text(type="number", :force-no-label="true", :min="0", :max="maxScore" v-model="students[index].grade", :errors="errors['students.' + index + '.grade']")
</template>
