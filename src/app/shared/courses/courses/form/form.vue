<script>
import crud from '@/crud/form/form'
import resources from '../resources'

export default {
  name: 'courses-form',
  mixins: [crud, resources],
  data () {
    return {
      selectOrAdd: 'add',
      course: {
        id: null,
        label: null,
        min_frequency: null,
        min_grade: null
      },
      title: 'Cadastro de cursos',
      subTitle: 'Adicionar novo curso'
    }
  }
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
                  .form-group.col-md-6
                    f-text(label="Nome", v-model="course.label", :errors="errors['label']")
                  .form-group.col-md-6
                    f-text(label="Frequência mínima", v-model="course.min_frequency", :errors="errors['min_frequency']")
                  .form-group.col-md-6
                    f-text(label="Nota mínima", v-model="course.min_grade", :errors="errors['min_grade']")
                  .clearfix
</template>
