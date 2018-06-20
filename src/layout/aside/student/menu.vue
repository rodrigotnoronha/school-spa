<script>
export default {
  name: 'student-menu'
}
</script>

<template lang="pug">
  ul.sidebar-menu(data-widget='tree')
    li.header Menu Alunos
    li(v-if="false")
      a(href='#')
        i.fa.fa-dashboard
        span Painel
    router-link(tag="li", :to="{name: 'student.grades'}")
      a(href='#')
        i.fa.fa-graduation-cap
        span Minhas Notas
    router-link(tag="li", :to="{name: 'student.frequencies'}")
      a(href='#')
        i.fa.fa-user
        span Minhas Frequências
    li(v-if="false")
      a(href='#')
        i.fa.fa-envelope-o
        span Notificações
        span.pull-right-container
          small.label.pull-right.bg-blue 12
    router-link(tag="li", :to="{name: 'settings.profile.me'}")
      a(href='#')
        i.fa.fa-cogs
        span Configurações
        span.pull-right-container
</template>
