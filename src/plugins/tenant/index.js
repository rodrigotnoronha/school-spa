import { get } from 'lodash'

export default function install (Vue, store) {
  window.addEventListener('storage', (e) => {
    if (e.key === 'emtudo-user' && get(e, 'newValue')) {
      window.location.reload()
    }
  })
}
