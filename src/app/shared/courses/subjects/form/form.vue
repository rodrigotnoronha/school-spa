<script>
import resources from '../resources'
import crud from '@/crud/form/form'
import { map } from 'lodash'

const prepareTeacher = (teacher) => {
  return {
    teacher_id: teacher.id
  }
}

export default {
  name: 'subjects-form',

  data () {
    return {
      title: 'Cadastro de disciplinas',
      subTitle: 'Adicionar nova disciplina',
      errors: {},
      label: null,
      subject: {
        id: null,
        label: null,
        teachers: []
      },
      includes: ['teachers']
    }
  },
  methods: {
    afterLoadItem (data) {
      const { label } = data
      this.label = label

      return data
    },
    prepareSave (subject) {
      subject.teachers = map(subject.teachers, prepareTeacher)

      return subject
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
              h3.box-title(v-if="label") Editar disciplina: {{ label }}
              h3.box-title(v-if="!label") {{ title }}
              .box-tools.pull-right
                button.btn.btn-primary.btn-success(v-if="!noSave", @click.prevent="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .form-subject.col-md-6
                    f-text(label="Disciplina", v-model="subject.label", :errors="errors['label']")
                  .row
                    .col-sm-12 Professores(as)
                  .row.col-md-6(v-if="!loading")
                    f-select-teacher(:multiple="true", :searchable="true", :get-all="true", placeholder="Selecione o(a) professor(a)", v-model="subject.teachers")
</template>
