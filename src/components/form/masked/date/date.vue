<script>
import MaskTextField from '../../MaskTextField/MaskTextField'

export default {
  name: 'masked-date',
  mixins: [MaskTextField],
  props: {
    clear: {
      type: Boolean,
      defautl: false
    },
    forceLabel: {
      type: Boolean,
      default: true
    },
    errors: null,
    fieldId: {
      type: String,
      default: 'date'
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      default: () => {
        return [
          {
            mask: '##/##/####'
          }
        ]
      }
    },
    maxlength: { // Maxlength without mask
      type: Number,
      default: 10
    }
  }
}
</script>

<template lang="pug">
  field.form-group(
    :force-no-label="forceNoLabel",
    :value="value",
    :errorMessage="errorMessage",
    :fieldId="fieldId",
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
