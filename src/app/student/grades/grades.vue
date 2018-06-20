<script>
import Grades from '@/app/shared/users/form/components/grades'

export default {
  name: 'student-grades',

  components: {
    Grades
  }
}
</script>

<template lang="pug">
  page(title="Minhas Notas", sub-title="")
    section.content
      .row
        .col-md-12
          .box.box-success
            .box-header.with-border
              h3.box-title Minhas Notas
              .box-tools.pull-right
            .box-body
              div(role='form')
                .box-body
                  grades(user-id="me")
</template>
