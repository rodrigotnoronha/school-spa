<script>
import MaskTextField from '../../MaskTextField/MaskTextField'

export default {
  name: 'phone',
  mixins: [MaskTextField],
  props: {
    forceLabel: {
      type: Boolean,
      default: true
    },
    errors: null,
    fieldId: {
      type: String,
      default: 'phone'
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      default: () => {
        return [
          {
            mask: '####-####'
          },
          {
            min: 9,
            max: 9,
            mask: '#.####-####'
          },
          {
            min: 10,
            max: 10,
            mask: '## ####-####'
          },
          {
            min: 11,
            max: 11,
            mask: '## #.####-####'
          }
        ]
      }
    },
    maxlength: { // Maxlength without mask
      type: Number,
      default: 13
    }
  }
}
</script>

<template lang="pug">
  field.form-group(
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
