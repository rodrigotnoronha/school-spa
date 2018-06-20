<script>
import Admin from './roles/admin'
import NoProfile from './roles/no-profile'
import Responsible from './roles/responsible'
import Student from './roles/student'
import Teacher from './roles/teacher'
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard-index',

  components: {
    Admin,
    NoProfile,
    Responsible,
    Student,
    Teacher
  },

  computed: {
    ...mapGetters(['userProfile'])
  }
}
</script>

<template lang="pug">
  div
    header.page-header.row
    section.content-header
      h1
        | Painel Principal
    // Main content
    section.content
      // Small boxes (Stat box)

      no-profile
      admin(v-if="userProfile === 'admin'")
      // responsible(v-if="userProfile === 'responsible'")
      // student(v-if="userProfile === 'student'")
      // teacher(v-if="userProfile === 'teacher'")
      // no-profile(v-if="!userProfile")
</template>
