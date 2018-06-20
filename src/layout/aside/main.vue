<script>
import resources from './resources'

export default {
  name: 'resultsystems-aside',
  mixins: [resources]
}
</script>

<template lang="pug">
  aside.main-sidebar(v-if="isLogged")
    // sidebar: style can be found in sidebar.less
    section.sidebar
      // Sidebar user panel
      .user-panel
        .pull-left.image
          img.img-circle(:src="user.avatar", :alt="user.name")
        .pull-left.info
          p {{ user.name }}
          a(href="#", @click.prevent="setCurrentProfile('professor')")
            i.fa.fa-circle.text-success
            |  {{ whoAmi }}
      // search form
      div(style="z-index: 99999999")
        f-select(:options="tenants", v-model="school.id", label-by="name", @selected="onSelectTenant", :multiple="false")
      form.sidebar-form(action="#", method="get", v-if="false")
        .input-group
          input.form-control(type="text", name="q", placeholder="Buscar Aluno..")
          span.input-group-btn
            button#search-btn.btn.btn-flat(type="submit", name="search")
              i.fa.fa-search
      ul.sidebar-menu(data-widget='tree')
        router-link(:to="{name: 'dashboard.index'}", tag="li")
          a(href='#')
            i.fa.fa-dashboard
            span Painel
      template(v-if="userTotalProfiles > 1")
        ul.sidebar-menu(data-widget='tree')
          li(v-if="userIsAdmin", :class="{active: menu === 'admin'}")
            a(href="#", @click.prevent="doToggleMenu('admin')")
              span Menu Admin
            admin-menu(v-if="userIsAdmin && menu === 'admin'")
          li(v-if="userIsStudent", :class="{active: menu === 'student'}")
            a(href="#", @click.prevent="doToggleMenu('student')")
              i.fa.fa-user
              span Menu Alunos
            student-menu(v-if="userIsStudent && menu === 'student'")
          li(v-if="userIsResponsible", :class="{active: menu === 'responsible'}")
            a(href="#", @click.prevent="doToggleMenu('responsible')")
              i.fa.fa-users
              span Menu Responsáveis
            responsible-menu(v-if="userIsResponsible && menu === 'responsible'")
          li(v-if="userIsTeacher", :class="{active: menu === 'teacher'}")
            a(href="#", @click.prevent="doToggleMenu('teacher')")
              i.fa.fa-graduation-cap
              span Menu Professores
            teacher-menu(v-if="userIsTeacher && menu === 'teacher'")
      template(v-if="userTotalProfiles === 1")
        admin-menu(v-if="userIsAdmin")
        responsible-menu(v-if="userIsResponsible")
        student-menu(v-if="userIsStudent")
        teacher-menu(v-if="userIsTeacher")
</template>
