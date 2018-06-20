<template>

</template>
<script>
import { isEmpty } from 'lodash'
import bootbox from 'bootbox'

export default {
  name: 'confirm',
  props: {
    data: { // Data to send to function confirmed
      required: true
    },
    show: { // If true, create bootbox confirm
      type: Boolean,
      required: true
    },
    reversal: { // If true, reversal label, title and message without dont information label, title and message
      type: Boolean,
      default: false
    },
    label: { // Label of bootbox confirm
      default: null
    },
    title: { // Title of bootbox confirm
      default: null
    },
    message: { // Message of bootbox confirm
      default: null
    }
  },
  methods: {
    // Exec bootbox.confirm to create prompt of confirmation
    confirmation () {
      let title = this.title
      let message = this.message
      let label = this.label

      if (isEmpty(title)) {
        title = this.reversal ? 'Confirmar Cancelamento' : 'Confirmar Remoção'
      }
      if (isEmpty(message)) {
        message = this.reversal ? 'Tem certeza que deseja cancelar esse registro?' : 'Tem certeza que deseja remover esse registro?'
      }

      if (isEmpty(label)) {
        label = this.reversal ? '<i class="fa fa-fw fa-reply"></i> Cancelar' : '<i class="fa fa-fw fa-check"></i> Remover'
      }
      bootbox.confirm({
        title,
        message,
        buttons: {
          cancel: {
            label: '<i class="fa fa-fw fa-times"></i> Cancelar'
          },
          confirm: {
            label: label
          }
        },
        callback: (confirmed) => {
          if (confirmed === true) {
            this.$emit('confirmed', this.data)
          } else {
            this.$emit('canceled')
          }
        }
      })
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.confirmation()
      }
    }
  }
}
</script>
