<script>
import Schedule from './components/schedule'

import resources from '../resources'
import crud from '@/crud/form/form'

import { map, get, groupBy, find } from 'lodash'
import { mapMutations } from 'vuex'

const prepareStudent = (student) => {
  return {
    student_id: student.id,
    route_id: student.route_id
  }
}

const schedule = (id = '', start = null, end = null) => ({
  __id__id: new Date() + ':' + id,
  hour_start: start,
  hour_end: end,
  monday_skill_id: null,
  tuesday_skill_id: null,
  wednesday_skill_id: null,
  thursday_skill_id: null,
  friday_skill_id: null
})

export default {
  name: 'groups-form',

  components: {
    Schedule
  },
  data () {
    return {
      title: 'Cadastro de classes',
      subTitle: 'Adicionar nova classe',
      includes: ['students', 'schedules'],
      errors: {
        schedules: {}
      },
      label: null,
      group: {
        id: null,
        course_id: null,
        label: null,
        max_students: null,
        year: null,
        students: [],
        schedules: []
      }
    }
  },
  methods: {
    ...mapMutations('components/select', [
      'setUniqueOptions'
    ]),
    prepareShow (group) {
      const schedulesByGroup = groupBy(group.schedules, 'index')
      const schedules = []

      map(schedulesByGroup, item => {
        const monday = find(item, {day: 'monday'})
        const tuesday = find(item, {day: 'tuesday'})
        const wednesday = find(item, {day: 'wednesday'})
        const thursday = find(item, {day: 'thursday'})
        const friday = find(item, {day: 'friday'})

        schedules.push({
          hour_start: monday.hour_start,
          hour_end: monday.hour_end,
          monday_skill_id: monday.skill_id,
          tuesday_skill_id: tuesday.skill_id,
          wednesday_skill_id: wednesday.skill_id,
          thursday_skill_id: thursday.skill_id,
          friday_skill_id: friday.skill_id
        })
      })

      group.schedules = schedules

      return group
    },
    prepareSave (group) {
      group.students = map(group.students, prepareStudent)

      return group
    },
    afterLoadItem (data) {
      const { label } = data
      this.label = label

      return data
    },
    doStart () {
      this.group.schedules.push(schedule(1))
      this.group.schedules.push(schedule(2))
      this.group.schedules.push(schedule(3))
      this.group.schedules.push(schedule(4))
      this.group.schedules.push(schedule(5))
    },
    doAddSchedule () {
      this.group.schedules.push(schedule())
    },
    doDeleteSchedule (index) {
      // this.group.schedules = [...this.group.schedules.filter(i => {
      //   return i.__id__id !== item.__id__id
      // })]
      this.group.schedules.splice(index, 1)
    }
  },
  mounted () {
    const id = get(this.$route.params, 'id', null)
    if (!id) {
      this.doStart()
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
              h3.box-title(v-if="label") Editar classe/turma: {{ label }}
              h3.box-title(v-if="!label") {{ title }}
              .box-tools.pull-right
                button.btn.btn-primary.btn-success(v-if="!noSave", @click.prevent="doSave")
                  i.fa.fa-check
                  |  Salvar
            .box-body
              div(role='form')
                .box-body
                  .row
                    .form-group.col-md-6
                      f-select-course(:disabled="noSave", label="Curso", v-model="group.course_id", :errors="errors['course_id']", placeholder="Selecione o curso")
                    .form-group.col-md-6
                      f-text(label="Classe/Turma", v-model="group.label", :errors="errors['label']")
                  .row
                    .form-group.col-md-6
                      f-text(type="number", :min="2018", :max="2050", label="Ano", v-model="group.year", :errors="errors['year']")
                    .form-group.col-md-6
                      f-text(type="number", :min="1", :max="100", label="Máximo de alunos", v-model="group.max_students", :errors="errors['max_students']")
                  .row
                    .form-group.col-md-6(v-if="!loading")
                      f-select-student(:disabled="!(!group.id)", :show-labels="true", :searchable="true", :multiple="true", :get-all="true", label="Matrículas", v-model="group.students", placeholder="Selecione os(as) alunos(as)")
                  .row(v-if="!group.id", v-for="student in group.students")
                    .form-group.col-md-6
                      | {{ student.label }}
                    .form-group.col-md-6
                      f-select-route(:unique-loader="true", :get-all="true", v-model="student.route_id")
                  .row
                    .form-group.col-md-12
                      .box
                        .box-header.ui-sortable-handle(style='cursor: move;')
                          h3.box-title Lista de Disciplinas
                          .box-tools.pull-right
                            button.btn.btn-default.pull-right(v-if="!noSave", @click.prevent="doAddSchedule()")
                              i.fa.fa-plus
                              |  Adcionar Hor&aacute;rio
                        .box-body
                          .row
                            .col-md-11
                              .col-md-2 Hor&aacute;rio
                              .col-md-2 Segunda
                              .col-md-2 Ter&ccedil;a
                              .col-md-2 Quarta
                              .col-md-2 Quinta
                              .col-md-2 Sexta
                            .col-md-1
                          .row(v-for="(schedule, index) in group.schedules", :key="schedule.__id__id")
                            .col-md-11
                              schedule(:value="schedule", :errors="errors", :index="index")
                            .col-md-1
                              .form-group
                                br
                                button.btn.btn-xs.btn-danger(@click.prevent="doDeleteSchedule(index)") &times; excluir
</template>
