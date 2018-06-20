import { isEmpty } from 'lodash'
import bootbox from 'bootbox'

export default (callback, title = null, label = null, message = null, cancel = null, reversal = false) => {
  if (isEmpty(title)) {
    title = reversal ? 'Confirmar Cancelamento' : 'Confirmar Remoção'
  }
  if (isEmpty(message)) {
    message = reversal ? 'Tem certeza que deseja cancelar esse registro?' : 'Tem certeza que deseja remover esse registro?'
  }

  if (isEmpty(label)) {
    label = reversal ? '<i class="fa fa-fw fa-reply"></i> Cancelar' : '<i class="fa fa-fw fa-check"></i> Remover'
  }

  if (isEmpty(cancel)) {
    cancel = 'Cancelar'
  }

  bootbox.confirm({
    title,
    message,
    buttons: {
      cancel: {
        label: '<i class="fa fa-fw fa-times"></i>' + cancel
      },
      confirm: {
        label
      }
    },
    callback: (confirmed) => {
      callback(confirmed)
    }
  })
}
