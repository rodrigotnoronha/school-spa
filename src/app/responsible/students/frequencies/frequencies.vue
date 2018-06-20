<script>
import Frequencies from '@/app/shared/users/form/components/frequencies'

export default {
  name: 'student-frequencies',

  components: {
    Frequencies
  }
}
</script>

<template lang="pug">
  page(title="Minhas Frequências", sub-title="")
    section.content
      .row
        .col-md-12
          .box.box-success
            .box-header.with-border
              h3.box-title Minhas Frequências
              .box-tools.pull-right
            .box-body
              div(role='form')
                .box-body
                  frequencies(user-id="me")
</template>
