<script>
import MaskTextField from '../../MaskTextField/MaskTextField'
import resources from './resources'

export default {
  name: 'f-time',
  mixins: [MaskTextField, resources],
  props: {
    errors: null,
    fieldId: {
      type: String,
      default: 'time'
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      default: () => {
        return [
          {
            mask: '##:##'
          }
        ]
      }
    }
  }
}
</script>

<template lang="pug">
  field.form-group(
    :class="groupClasses",
    :force-no-label="forceNoLabel",
    :value="value",
    :errorMessage="errorMessage",
    :fieldId="fieldId",
    :label="label",
    placeholder="00:00",
    :showTooltip="showTooltip",
    )
    input.form-control(
      :placeholder="placeholder || label",
      type="text",
      @keydown="keydown",
      @keyup="keyup",
      @change="change",
      v-model="valueInput",
      :maxlength="5",
      size="2"
      )
    error(:message="errors")
</template>

<style scoped>
  .help-block {
    color: #E24C41
  }
</style>
