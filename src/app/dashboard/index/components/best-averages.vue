<script>
import Average from './averages/averages'

export default {
  name: 'dashborad-best-averages',
  extends: Average
}
</script>

<template lang="pug">
  .box.box-primary
    .box-header.with-border
      i.fa.fa-thumbs-o-up
      |
      h3.box-title Melhores M&eacute;dias
      |
      .box-tools.pull-right
        .col-xs-10.pull-right
          f-select(@input="change", v-model="two_month", :options="options")
    .box-body
      ul.products-list.product-list-in-box(v-for="grade in averages")
        student(:route="routeStudentEdit", :student="grade.student")
          span.label.label-success.pull-right {{ grade.grade }}
    .box-footer.text-center
      router-link.uppercase(:to="{name: route}") Ver mais
</template>
