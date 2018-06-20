<script>
import MaskTextField from '../../MaskTextField/MaskTextField'
import resources from './resources'

export default {
  name: 'zip',
  mixins: [MaskTextField, resources]
}
</script>

<template lang="pug">
  field.form-group(
    :force-label="forceLabel",
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
