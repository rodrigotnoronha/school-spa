<script>
import { mapGetters } from 'vuex'

export default {
  name: 'admin-menu',
  computed: {
    ...mapGetters(['userIsAdmin', 'userIsMaster'])
  }
}
</script>

<template lang="pug">
ul.sidebar-menu(data-widget='tree')
  li.header Menu Admin
  li(v-if="false")
    a(href='#')
      i.fa.fa-dashboard
      span Painel
  li
    a()
      i.fa.fa-th-large
      span Geral
      span.pull-right-container
        i.fa.fa-angle-left.pull-right
    ul
      router-link(tag="li", :to="{name: 'school.calendars.two_months.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Bimestres
      router-link(tag="li", :to="{name: 'school.calendars.school_days.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Calendário Escolar
  li
    a()
      i.fa.fa-th-large
      span Classes
      span.pull-right-container
        i.fa.fa-angle-left.pull-right
    ul
      router-link(tag="li", :to="{name: 'school.courses.courses.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Cursos
      router-link(tag="li", :to="{name: 'school.courses.groups.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Classes
      router-link(tag="li", :to="{name: 'school.courses.subjects.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Disciplinas
      router-link(tag="li", :to="{name: 'school.courses.frequencies.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Frequência
      router-link(tag="li", :to="{name: 'school.courses.enrollments.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Matrículas
      router-link(tag="li", :to="{name: 'school.courses.grades.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Notas
      router-link(tag="li", :to="{name: 'school.courses.quizzes.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Provas e Trabalhos
  router-link(v-if="userIsMaster", tag="li", :to="{name: 'school.schools.index'}")
    a(href='#')
      i.fa.fa-institution
      span Escolas
  router-link(tag="li", :to="{name: 'school.teachers.index'}")
    a(href='#')
      i.fa.fa-graduation-cap
      span Professores
  router-link(tag="li", :to="{name: 'school.users.index'}")
    a(href='#')
      i.fa.fa-user-plus
      span Usuários
  router-link(tag="li", :to="{name: 'school.students.index'}")
    a(href='#')
      i.fa.fa-user
      span Alunos
  router-link(tag="li", :to="{name: 'school.responsibles.index'}")
    a(href='#')
      i.fa.fa-users
      span Responsáveis
  li
    a()
      i.fa.fa-bus
      span Transporte
      span.pull-right-container
        i.fa.fa-angle-left.pull-right
    ul
      router-link(tag="li", :to="{name: 'school.transports.stops.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Paradas
      router-link(tag="li", :to="{name: 'school.transports.routes.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Rotas
      router-link(tag="li", :to="{name: 'school.transports.vehicles.index'}")
        a(href='#')
          i.fa.fa-circle-o
          |  Veículos
  li(v-if="false")
    a(href='#')
      i.fa.fa-envelope-o
      span Notificações
      span.pull-right-container
        small.label.pull-right.bg-blue 12
  li.treeview(v-if="false")
    a(href='#')
      i.fa.fa-bar-chart
      span Relatórios
      span.pull-right-container
        i.fa.fa-angle-left.pull-right
    ul.treeview-menu
      li
        a(href='#')
          i.fa.fa-circle-o
          |  Frequência
      li
        a(href='#')
          i.fa.fa-circle-o
          |  Notas
      li
        a(href='#')
          i.fa.fa-circle-o
          |  Provas e Trabalhos
  router-link(tag="li", :to="{name: 'settings.profile.me'}")
    a(href='#')
      i.fa.fa-cogs
      span Configurações
      span.pull-right-container
</template>
