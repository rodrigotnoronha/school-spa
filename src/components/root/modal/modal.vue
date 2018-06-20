<script>
import ModalHeader from './header'
import ModalBody from './body'
import ModalFooter from './footer'

export default {
  name: 'modal',
  components: {
    ModalHeader,
    ModalBody,
    ModalFooter
  },
  methods: {
    modal (value) {
      const visible = value || this.visible

      if (visible) {
        window.$(this.$el).modal({
          show: true,
          keyboard: false
        })
      } else {
        window.$(this.$el).modal('hide')
      }
    }
  },
  mounted () {
    this.modal()

    var self = this

    window.$(this.$el).on('shown.bs.modal', function () {
      self.$emit('toggle', true)
    })

    window.$(this.$el).on('hidden.bs.modal', function () {
      self.$emit('toggle', false)
    })
  },
  watch: {
    visible (value) {
      this.modal(value)
    }
  },
  props: {
    title: {
      type: String
    },
    header: {
      type: Boolean,
      default: true
    },
    footer: {
      type: Boolean,
      default: true
    },
    buttonClose: {
      type: String,
      default: 'Fechar'
    },
    visible: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>

<template lang="pug">
  div.modal.fade
    div.modal-dialog
      div.modal-content
        modal-header(:title='title', v-show="header")
          template(slot="header")
        modal-body
          slot
        modal-footer(:title="buttonClose", v-show="footer")
          template(slot="footer")
</template>
