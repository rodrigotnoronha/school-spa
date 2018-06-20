import { get, map } from 'lodash'

const unique = {}

export const existsUniqueKey = (key) => {
  return get(unique, key, false)
}

export const setUniqueKey = (key) => {
  unique[key] = true
}

export const deleteUniqueKey = (key) => {
  delete unique[key]
}

export const deleteAllUniqueKey = () => {
  map(Object.keys(unique), (key) => {
    delete unique[key]
  })
}
