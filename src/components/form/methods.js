// default methods for form fields
export default {
  updateValue: function (value) {
    this.$emit('input', value)
  }
}
