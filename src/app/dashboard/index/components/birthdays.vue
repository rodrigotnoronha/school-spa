<script>
export default {
  name: 'dashboard-birthdays',

  data () {
    return {
      birthday: 'today'
    }
  },
  methods: {
    change () {
      this.$emit('input', this.birthday)
    }
  },
  mounted () {
    this.birthday = this.value
  },
  props: {
    birthdays: {
      type: Array,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    value: null
  }
}
</script>

<template lang="pug">
  .col-md-3
    .box.box-primary
      .box-header.with-border
        i.fa.fa-birthday-cake
        |
        h3.box-title Aniversariantes
        |
        .box-tools.pull-right
          .col-xs-10.pull-right
            f-select(@input="change", v-model="birthday", :options="[{id: 'today', label: 'Hoje'}, {id: 'week', label: 'Semana'}, {id: 'month', label: 'mês'}]")
      // /.box-header
      .box-body
        ul.products-list.product-list-in-box
          li.item(v-for="birthday in birthdays", :key="birthday.id")
            .product-img
              img(:src='birthday.avatar', :alt='birthday.name')
            |
            .product-info
              router-link.product-title(:to="{name: route, params: {id: birthday.id}}")
                | {{ birthday.name }}
                span.label.label-success.pull-right {{ birthday.age }} Anos
</template>
