<script>
export default {
  name: 'parent-menu'
}
</script>

<template lang="pug">
  ul.sidebar-menu(data-widget='tree')
    li.header Menu Responsáveis
    li(v-if="false")
      a(href='#')
        i.fa.fa-dashboard
        span Painel
    router-link(tag="li", :to="{name: 'responsible.students.index'}")
      a(href='#')
        i.fa.fa-user
        span Alunos
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
