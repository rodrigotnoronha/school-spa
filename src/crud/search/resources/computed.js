import { get, map } from 'lodash'

export default {
  data () {
    return this[this.entities]
  },
  getSearchColumns () {
    const searchColumns = Object.keys(this.searchColumns)

    return map(searchColumns, (column) => get(this.searchColumns, column))
  },
  getColumns () {
    const columns = Object.keys(this.columns)

    return map(columns, (column) => get(this.columns, column))
  },
  getKeys () {
    return Object.keys(this.columns)
  }
}
