<script>
export default {
  name: 'crud-index-item',

  methods: {
    doDelete (item) {
      this.$emit('on-deleted', item)
    },
    doSelect (item) {
      this.$emit('on-selected', item)
    }
  },

  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    keys: {
      type: Array,
      default: () => ([])
    },
    buttonSelect: {
      type: Boolean,
      default: false
    },
    noActions: {
      type: Boolean,
      default: false
    },
    noDelete: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template lang="pug">
  tr
    template(v-for="key in keys")
      td {{ item[key] }}
    td(v-if="buttonSelect")
      button.btn.btn-primary.pull-right(@click.prevent="doSelect(item)") Selecionar
    td(v-if="!noActions")
      slot
      a.btn.btn-circle-micro.btn-danger(v-if="!noDelete", @click.prevent="doDelete(item)")
        span.fa.fa-close
</template>
