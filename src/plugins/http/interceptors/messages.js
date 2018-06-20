import { get } from 'lodash'
import toast from '@/plugins/toast/toast'

/**
 * Handle API messages.
 *
 */
export default {
  success (response) {
    const status = response.status

    if (status === 201 || status === 202) {
      const message = get(response, 'data.meta.message') || 'Operação realizada com sucesso.'
      toast.success(message)
    }
    return response
  },
  error (error) {
    const status = get(error, 'response.status')

    const message = get(error, 'response.data.meta.message') || 'Falha ao realizar operação.'

    if (status >= 400 && status <= 599) {
      toast.error(message)
    }

    return Promise.reject(error)
  }
}
