import { get } from 'lodash'

export default () => {
  if (get(process.env, 'NODE_ENV') !== 'production') {
    return
  }

  if (window.location.protocol !== 'https:') {
    window.location.href = window.location.href.replace('http:', 'https:')
  }
}
