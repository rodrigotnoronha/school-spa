<script>
import resources from '../resources'
import frequencies from '@/app/shared/courses/frequencies/edit/edit'

export default {
  name: 'frequencies-form',

  mixins: [frequencies, resources],

  resourcePath: '/teacher/courses/frequencies'
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
                    .form-group.col-md-2
                        label Prova
                        br
                        label {{ frequency.subject.label }}
                    .form-group.col-md-2
                        label Data
                        br
                        label {{ frequency.date }}
                    .form-group.col-md-4
                        label Estudante
                        br
                        label
                          b  {{ frequency.student.name }}
                    .form-group.col-md-2
                      label Present
                      br
                      input(type="checkbox", v-model="frequency.present", :errors="errors['present']")
                    .form-group.col-md-2(v-if="!frequency.present")
                      label Falta Justificada
                      br
                      input(type="checkbox", v-model="frequency.justified_absence", :errors="errors['justified_absence']")
</template>
