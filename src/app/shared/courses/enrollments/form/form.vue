<script>
import resources from '../resources'
import crud from '@/crud/form/form'

export default {
  name: 'enrollments-form',

  data () {
    return {
      title: 'Matrículas',
      subTitle: 'Matricular estudante',
      errors: {},
      enrollment: {
        id: null,
        group_id: null,
        student_id: null,
        route_id: null
      }
    }
  },

  mixins: [crud, resources]
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
                button.btn.btn-primary.btn-success(v-if="!noSave", @click.prevent="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .form-group.col-md-4
                    f-select-student(label="Estudante", v-model="enrollment.student_id", :errors="errors['student_id']")
                  .form-group.col-md-4
                    f-select-group(label="Turma", v-model="enrollment.group_id", :errors="errors['group_id']", label-by="complete_label")
                  .form-group.col-md-4
                    f-select-route(label="Rota", v-model="enrollment.route_id", :errors="errors['route_id']")
</template>
