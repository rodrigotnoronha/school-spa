<script>
export default {
  name: 'teacher-menu'
}
</script>

<template lang="pug">
  ul.sidebar-menu(data-widget='tree')
    li.header Menu Professores
    li(v-if="false")
      a(href='#')
        i.fa.fa-dashboard
        span Painel
    li
      a()
        i.fa.fa-th-large
        span Classes
        span.pull-right-container
          i.fa.fa-angle-left.pull-right
      ul
        router-link(tag="li", :to="{name: 'teacher.courses.groups.index'}")
          a(href='#')
            i.fa.fa-circle-o
            |  Classes
        router-link(tag="li", :to="{name: 'teacher.courses.subjects.index'}")
          a(href='#')
            i.fa.fa-circle-o
            |  Disciplinas
        router-link(tag="li", :to="{name: 'teacher.courses.frequencies.index'}")
          a(href='#')
            i.fa.fa-circle-o
            |  Frequência
        router-link(tag="li", :to="{name: 'teacher.courses.grades.index'}")
          a(href='#')
            i.fa.fa-circle-o
            |  Notas
        router-link(tag="li", :to="{name: 'teacher.courses.quizzes.index'}")
          a(href='#')
            i.fa.fa-circle-o
            |  Provas e Trabalhos
    router-link(tag="li", :to="{name: 'teacher.students.index'}")
      a(href='#')
        i.fa.fa-user
        span Alunos
    router-link(tag="li", :to="{name: 'teacher.responsibles.index'}")
      a(href='#')
        i.fa.fa-user
        span Pais Aluno
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
