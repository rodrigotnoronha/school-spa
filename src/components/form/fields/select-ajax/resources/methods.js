// other dependencies.
import { assign, isEmpty, debounce, map } from 'lodash'
import { mapMutations } from 'vuex'

const addBeforeData = (items, data = []) => {
  const options = assign([], items)
  map(data, (item) => {
    options.unshift(item)
  })

  return options
}

export default {
  ...mapMutations('components/select', [
    'setUniqueLoading',
    'setUniqueOptions',
    'setUniqueStart'
  ]),
  /**
   * Set Add mode.
   */
  setAddMode () {
    this.mode = 'add'
  },

  /**
   * Set select mode.
   */
  setSelectMode () {
    this.mode = 'select'
  },

  setLoading (value) {
    if (this.uniqueLoader) {
      return this.setUniqueLoading(value)
    }

    this.loading = value
  },

  setOptions (values) {
    if (this.uniqueLoader) {
      return this.setUniqueOptions({
        key: this.$options.name,
        values
      })
    }

    this.entities = values
  },

  /**
   * Load ajax options based on select's field query.
   *
   * Default debounce time is set to 300ms.
   */
  doSearch: debounce(function (query) {
    // set the component as 'loading'

    this.setLoading(true)
    // empty the options array.
    this.setOptions([])

    // ignore the search if there is already
    if (this.internalValue && isEmpty(query)) {
      this.setLoading(false)
      return
    }

    const q = {page_limit: 10, ...this.parameters}
    q[this.query] = query

    // do load the remote resources with a query parameter.
    this.$resource.get('/search', q)
      .then(({data}) => { // then the request sussed.
        // set the scope options as the data result.
        this.setOptions(data)
        // disable loading.
        this.setLoading(false)
      })
      .catch(() => { // if some shit happens...
        // disable loading
        this.setLoading(false)
      })
  }, 300),

  addEntity () {
    const createData = assign(this.createDefaults, { [this.createLabelField]: this.addLabel })
    this.$resource.post('', createData).then(({data}) => {
      this.setSelectMode()
      this.$emit('input', data.id)
      // this.value = data.id
      // this.setInternalValue(data.id)
    })
  },

  /**
   * Setup the select internal value.
   *
   * @param value
   */
  setInternalValue (value) {
    // if there is no value, just return
    if (isEmpty(value)) {
      this.internalValue = null
      return
    }
    if (typeof value === 'object') {
      return
    }

    // if there is a default value, try to load it from the api
    this.$resource.get(value, this.parametersToShow)
      .then(({data}) => { // when the result comes back...
        this.internalValue = data
      })
      .catch(() => { // if there was an error...
        // nothing yet.
      })
  },
  refreshAll (clearValue = false) {
    if (this.disabled) {
      return
    }
    this.setLoading(true)

    // if there is a default value, try to load it from the api
    this.$resource.get('', { pagination: false, limit: false, ...this.parameters })
      .then(({data}) => { // when the result comes back...
        this.setUniqueStart({
          key: this.$options.name,
          value: false
        })
        const newData = this.beforeSetData(data, this.beforeData)
        this.setOptions(newData)
        this.internalValue = this.value
        this.setLoading(false)
      })
      .catch(() => { // if there was an error...
        this.setUniqueStart({
          key: this.$options.name,
          value: false
        })
        this.setOptions(this.beforeSetData([], this.beforeData))
        this.internalValue = this.value
        this.setLoading(false)
        // nothing yet.
      })
  },
  getAllValues () {
    if (this.uniqueLoader && this.uniqueStart(this.$options.name)) {
      return
    }
    if (this.uniqueLoader) {
      this.setUniqueStart({
        key: this.$options.name,
        value: true
      })
    }

    this.refreshAll()
  },
  beforeSetData (data, before) {
    return addBeforeData(data, before)
  }
}
