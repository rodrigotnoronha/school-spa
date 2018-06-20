<script>
import MaskTextField from '../../MaskTextField/MaskTextField'

const mask = () => {
  let text = ''
  for (let i = 0; i < 255; i++) {
    text += '#'
  }

  return text
}

export default {
  name: 'onlynumber',
  mixins: [MaskTextField],
  props: {
    forceLabel: {
      type: Boolean,
      default: true
    },
    errors: null,
    fieldId: {
      type: String,
      default: 'onlynumber'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      default: () => {
        return [
          {
            mask: mask()
          }
        ]
      }
    },
    maxlength: { // Maxlength without mask
      type: Number,
      default: 255
    }
  }
}
</script>

<template lang="pug">
  field(
    :force-label="forceLabel",
    :force-no-label="forceNoLabel",
    :value="value",
    :errorMessage="errorMessage",
    :field-id="fieldId",
    :label="label",
    :placeholder="placeholder",
    :showTooltip="showTooltip",
    )
    input.form-control(
      :placeholder="placeholder || label",
      :disabled="disabled"
      type="text",
      @keydown="keydown",
      @keyup="keyup",
      @change="change",
      v-model="valueInput",
      :maxlength="maxlength"
      )
    error(:message="errors")
</template>

<style scoped>
  .help-block {
    color: #E24C41
  }
</style>
