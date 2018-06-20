<script>
export default {
  name: 'best-averages-students',
  props: {
    student: {
      type: Object,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    total: null
  }
}
</script>

<template lang="pug">
  li.item
    .product-img
      img(:src='student.avatar', :alt='student.name')
    |
    .product-info
      router-link.product-title(:to="{name: route, params: {id: student.id}}")
        | {{ student.name }}
        slot
          span.label.label-success.pull-right {{ total }}
</template>
