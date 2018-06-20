<script>
import resources from '@/app/dashboard/index/shared'

export default {
  name: 'dashboard-index-roles-admin',

  mixins: [resources],

  resourcePath: '/school/dashboard'
}
</script>

<template lang="pug">
  div
    .row
      .col-md-3.pull-right
        f-select(v-model="year", :options="dashboard.years")
    .row
      .col-lg-3.col-xs-6
        students(v-if="!loading", :students="dashboard.students", route="school.students.index")
      .col-lg-3.col-xs-6
        teachers(v-if="!loading", :teachers="dashboard.teachers", route="school.teachers.index")
      .col-lg-3.col-xs-6
        available-vacancies(
          v-if="!loading",
          :available-vacancies="dashboard.available_vacancies",
          route="school.courses.groups.index")
      .col-lg-3.col-xs-6
        transports(v-if="!loading", :transports="dashboard.vehicles", route="school.transports.vehicles.index")
    .row
      .col-md-12
        frequencies(
          v-if="!loading",
          :frequencies="dashboard.frequencies",
          v-model="year",
          :years="dashboard.years")
    |
    .row
      .col-md-3
        best-averages(
          v-if="!loading",
          v-model="two_month",
          :averages="dashboard.best_averages",
          route="school.courses.grades.index",
          route-student-edit="school.students.edit")
      .col-md-3
        worst-averages(
          v-if="!loading",
          v-model="two_month",
          :averages="dashboard.worst_averages",
          route="school.courses.grades.index",
          route-student-edit="school.students.edit")
      .col-md-3
        top-absences(
          v-if="!loading",
          v-model="two_month",
          :averages="dashboard.top_absences",
          route="school.courses.frequencies.index",
          route-student-edit="school.students.edit")
      birthdays(:birthdays="dashboard.birthdays", route="school.users.edit", v-model="birthday")
</template>
