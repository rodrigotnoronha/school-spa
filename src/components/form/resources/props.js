/**
 * Default field props.
 */
export default {

  /**
   * Field name. will also be used as ID.
   */
  name: {
    type: String,
    default: null
  },

  /**
   * Disabled?
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * Force No Label?
   */
  forceNoLabel: {
    type: Boolean,
    default: false
  },

  /**
   * Field label.
   */
  label: {
    type: String,
    default: null
  },

  /**
   * Field placeholder, should be omitted for normal fields.
   * Only use this when with a select.
   */
  placeholder: {
    type: String,
    default: null
  },

  /**
   * Error list or string for field errors.
   */
  errors: {
    default: null
  },

  /**
   * Input value.
   */
  value: {
    default: () => {
    }
  }
}
