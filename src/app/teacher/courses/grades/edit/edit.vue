<script>
import resources from '../resources'
import grades from '@/app/shared/courses/grades/edit/edit'

export default {
  name: 'teacher-grades-form',

  mixins: [grades, resources],

  resourcePath: '/teacher/courses/grades'
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
                          b  {{ grade.quiz.label }}
                    .form-group.col-md-3
                        label Data
                        br
                        label
                          b  {{ grade.quiz.date }}
                    .form-group.col-md-3
                      label Estudante
                      br
                      label
                        b  {{ grade.student.name }}
                    .form-group.col-md-3
                      f-text(label="Nota", type="number", :step="0.1", :min="1", :max="maxScore", v-model="grade.value", :errors="errors['grade.value']")
</template>
