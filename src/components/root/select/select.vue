 <script>
// import vSelect from "vue-select"
import Multiselect from 'vue-multiselect'

const includes = (str, query) => {
  /* istanbul ignore else */
  if (!str) return false
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

const filterOptions = (options, search, label) => {
  return label
    ? options.filter(option => includes(option[label], search))
    : options.filter(option => includes(option, search))
}

/* eslint-disable no-unused-vars */
const stripGroups = (options) => {
  return options.filter(option => !option.$isLabel)
}

const flattenOptions = (values, label) => {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev.concat(curr)
    }, [])
}

/* eslint-disable no-unused-vars */
const filterGroups = (search, label, values, groupLabel) => {
  return (groups) =>
    groups.map(group => {
      const groupOptions = filterOptions(group[values], search, label)

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

/* eslint-disable no-unused-vars */
const flow = (...fns) => x => fns.reduce((v, f) => f(v), x)

export default {
  name: 'emtudo-select',
  extends: Multiselect,
  props: {
    options: {
      default: []
    },
    hideTags: {
      type: Boolean,
      default: false
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: count => `e mais ${count}`
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: 'Aperter enter para selecionar'
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: 'Selecionado'
    },
    /**
     * String to show when pointing to an alredy selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: 'Aperte enter para remover'
    }
  },
  computed: {
    customPlaceholder: function () {
      if (this.multiple === true && this.hideTags && this.internalValue && this.internalValue.length > 0) {
        if (this.internalValue.length > 1) {
          return this.internalValue.length + ' selecionados'
        }
        return '1 selecionado'
      }
      return this.placeholder
    },
    filteredOptions () {
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase()

      let options = Array.from(this.options).concat()

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label)

        options = this.hideSelected
          ? options.filter(this.isNotSelected)
          : options
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options
      }

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        options.unshift({ isTag: true, label: search })
      }

      return options.slice(0, this.optionsLimit)
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
