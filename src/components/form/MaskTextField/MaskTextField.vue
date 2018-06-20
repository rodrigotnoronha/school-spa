<script>
import { format } from './format'
import Error from '../Helpers/Error.vue'
import { isEmpty, isNumber } from 'lodash'

// base field component
import TextField from '../TextField/TextField'

const keyValids = [
  'Control',
  'Enter',
  'Tab',
  'Delete',
  'Backspace',
  'Home',
  'End',
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight'
]

const copyCutOrPast = (event) => {
  return (['KeyC', 'KeyX', 'KeyV'].includes(event.code) && event.ctrlKey)
}

export default {
  name: 'mask_text_field',
  extends: TextField,
  components: {
    Error
  },
  computed: {
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
  },
  data () {
    return {
      valueInput: null
    }
  },
  props: {
    clear: {
      type: Boolean,
      default: true
    },
    forceNoLabel: {
      type: Boolean,
      default: false
    },
    forceLabel: {
      type: Boolean,
      default: true
    },
    fieldId: {
      type: String,
      default: ''
    },
    value: { // Default value
      type: String,
      default: null
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      required: true
    },
    maxlength: { // Maxlength without mask
      type: Number,
      default: 255
    }
  },
  methods: {
    // Formats when keydown
    keydown (event) {
      const isNumber = new RegExp(/[0-9]/g)
      if (!(keyValids.includes(event.key)) && !isNumber.exec(event.key)) {
        if (!copyCutOrPast(event)) {
          event.preventDefault()
        }
      }
    },
    // Formats when keyup
    keyup (event) {
      event.preventDefault()
      if (isEmpty(this.valueInput)) {
        return
      }
      this.valueInput = format(this.valueInput.replace(/[^0-9]+/g, ''), this.mask)
    },
    // Call event when changes
    change (event) {
      event.preventDefault()
      const value = (this.clear) ? this.valueInput.replace(/[^0-9]+/g, '') : this.valueInput
      this.$emit('input', value)
      this.$emit('change', value)

      this.afterChange(value)
    },
    afterChange (value) {
    }
  },
  mounted () {
    this.valueInput = format(this.value, this.mask)
  },
  watch: {
    // Watch default value changes
    value (newValue) {
      this.valueInput = format(newValue, this.mask)
    }
  }
}
</script>

<template lang="pug">
  field(
    :force-no-label="forceNoLabel",
    :value="value",
    :errorMessage="errorMessage",
    :fieldId="fieldId",
    :label="label + forceLabel ",
    :placeholder="placeholder",
    :showTooltip="showTooltip",
    )
    input.form-control(
      :placeholder="placeholder || label",
      type="text",
      @keydown="keydown",
      @keyup="keyup",
      @change="change",
      v-model="valueInput",
      :maxlength="maxlength"
      )
    error(:message="errors")
</template>
