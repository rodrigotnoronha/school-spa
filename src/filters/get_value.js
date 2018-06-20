import { get } from 'lodash'

export default (item, params = null, value = null) => get(item, params, value)
