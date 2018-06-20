export default {
  value (current) {
    this.internalValue = current
  },
  internalValue (value) {
    this.$emit('input', value)
    this.$emit('change', value)
  }
}
