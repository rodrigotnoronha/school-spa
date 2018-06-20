import locales from './locales'
import swal from 'sweetalert'

/**
 * "Metodo" para exibir mensagem solicitando conformação para continuar
 * @param  function fContinue
 * @param  string text
 * @param  string title
 * @param  string confirmButton
 * @param  string cancelButton
 *
 * @return alertModal exibir um alert em modal
 */
export const confirm = (fContinue, text, title, confirmButton, cancelButton) => {
  text = text || locales().toast.confirm.text
  title = title || locales().toast.confirm.title
  confirmButton = confirmButton || locales().toast.confirm.confirmButton
  cancelButton = cancelButton || locales().toast.confirm.cancelButton
  swal({
    title: title,
    text: text,
    type: 'warning',
    showCancelButton: true,
    cancelButtonText: cancelButton,
    confirmButtonColor: '#DD6B55',
    confirmButtonText: confirmButton,
    closeOnConfirm: true
  }, fContinue)
}

/**
 * "Metodo" para exibir mensagem de erro
 * @param  string text
 *
 * @return alertModal exibir um alert em modal
 */
export const error = (text, title) => {
  title = title || locales().toast.error
  swal({
    title: title,
    text: text,
    showConfirmButton: true,
    type: 'error'
  })
}

/**
 * "Metodo" para exibir informações
 * @param  string text
 *
 * @return alertModal exibir um alert em modal
 */
export const info = (text, title) => {
  title = title || locales().toast.info
  swal({
    title: title,
    text: text,
    showConfirmButton: true,
    type: 'info'
  })
}

/**
 * "Metodo" para exibir mensagem de sucesso
 * @param  string text
 *
 * @return alertModal exibir um alert em modal
 */
export const success = (text, title) => {
  title = title || locales().toast.success
  swal({
    title: title,
    text: text,
    timer: 3000,
    showConfirmButton: true,
    type: 'success'
  })
}

/**
 * "Metodo" para exibir mensagem de aviso
 * @param  string text
 *
 * @return alertModal exibir um alert em modal
 */
export const warning = (text, title) => {
  title = title || locales().toast.warning
  swal({
    title: title,
    text: text,
    showConfirmButton: true,
    type: 'warning'
  })
}

export default {
  confirm,
  error,
  info,
  success,
  warning
}
