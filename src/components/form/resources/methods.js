/**
 * Default field methods.
 */
export default {
  /**
   * Emit the input event for the parent component.
   *
   */
  updateValue: function (event) {
    this.$emit('input', event.target.value)
    this.$emit('change', event.target.value)
  },

  /**
   * Set the input as focused.
   */
  focus () {
    this.focused = true
  },

  /**
   * Set the input as not focused (blur/focus-off)
   */
  blur () {
    this.focused = false
  }
}
