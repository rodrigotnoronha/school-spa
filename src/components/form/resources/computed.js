// dependencies.
import { isEmpty, isNumber } from 'lodash'

/**
 * Computed properties for form fields.
 */
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
  }

}
