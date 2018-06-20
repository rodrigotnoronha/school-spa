<script>
import Average from './averages/averages'

export default {
  name: 'dashborad-top-absence',
  mixins: [Average]
}
</script>

<template lang="pug">
  .box.box-danger
    .box-header.with-border
      i.fa.fa-thumbs-o-down
      |
      h3.box-title Top Faltantes
      |
      .box-tools.pull-right
        .col-xs-10.pull-right
          f-select(@input="change", v-model="two_month", :options="options")
    .box-body
      ul.products-list.product-list-in-box(v-for="frequency in averages")
        student(:route="routeStudentEdit", :student="frequency.student")
          span.label.label-danger.pull-right {{ frequency.absences }}
    .box-footer.text-center
      router-link.uppercase(:to="{name: route}") Ver mais
</template>
