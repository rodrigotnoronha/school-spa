// dependencies.
import { mapGetters } from 'vuex'
import { isEmpty, isNumber } from 'lodash'

export default {
  /**
   * Is the input value empty?
   *
   * @returns {boolean}
   */
  isEmpty () {
    return this.value !== true && this.value !== false && !isNumber(this.value) && isEmpty(this.value)
  },

  /**
   * Define the form group classes.
   * @returns {Object}
   */
  groupClasses () {
    return {
      'label-floating': !(isEmpty(this.label)),  // there is a label present?
      'has-error': !isEmpty(this.errors),        // there are errors?
      'is-empty': this.isEmpty,                  // is the value empty?
      'is-focused': this.focused,                // is this input focused?
      'disabled': this.disabled                  // is the input disabled?
    }
  },
  ...mapGetters('components/select', [
    'uniqueLoading',
    'uniqueOptions',
    'uniqueStart'
  ]),
  getLoading () {
    const loading = (this.uniqueLoader) ? this.uniqueLoading : this.loading

    return loading
  },
  getOptions () {
    return (this.uniqueLoader) ? this.uniqueOptions(this.$options.name) : this.entities
  }
}
