<template>
  <input
  class="form-control"
  :placeholder="placeholder"
  type="text"
  @keyup="keyup"
  @change="change"
  v-model="value"
  :maxlength="max" />
</template>

<script>
import { format } from './format'

export default {
  name: 'mask_input',
  data () {
    return {
      value: null
    }
  },
  props: {
    current: {
      type: String,
      default: null
    },
    mask: {
      type: [String, Array],
      required: true
    },
    max: {
      type: Number,
      default: 255
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    keyup (event) {
      event.preventDefault()
      if (this.value === null || typeof (this.value) === 'undefined') {
        return
      }
      if (this.value !== null) {
        this.value = this.value.replace(/[^0-9]+/g, '')
      }
      this.value = format(this.value, this.mask)
    },
    change (event) {
      event.preventDefault()
      this.$emit('input', this.value)
      this.$emit('change', this.value)
    }
  },
  mounted () {
    this.value = format(this.current, this.mask)
  },
  watch: {
    current (val) {
      if (val !== this.value) {
        this.value = format(this.current, val)
      }
    }
  }
}
</script>
