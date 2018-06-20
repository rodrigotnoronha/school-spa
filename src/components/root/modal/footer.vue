<script>
export default {
  name: 'modal-footer',
  methods: {
    toggle () {
      this.$emit('toggle')
    },
    start () {
      if (typeof (this.title) === 'undefined') {
        this.title = 'Fechar'
      }
    }
  },
  data () {
    return {
    }
  },
  props: [
    'title'
  ],
  mounted () {
    this.start()
  }
}
</script>

<template lang="pug">
  div.modal-footer
    slot
      button.btn.btn-default(type="button", data-dismiss="modal") {{ title }}
</template>
