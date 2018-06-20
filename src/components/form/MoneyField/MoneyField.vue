<script>
// base field component
import Field from '../Field/Field'
// default props
import propsList from '../props'
// default methods
import DefaultMethods from '../methods'
import AwesomeMask from 'awesome-mask'

export default {
  name: 'money_field',
  components: {
    Field
  },
  directives: {
    mask: AwesomeMask
  },
  props: Object.assign({}, propsList, {}),
  methods: Object.assign({}, DefaultMethods, {
    // custom methods for field here
  })
}
</script>

<template lang="pug">
  field(
    :force-no-label="forceNoLabel",
    :value="value",
    :errorMessage="errorMessage",
    :fieldId="fieldId",
    :label="label",
    :placeholder="placeholder",
    :show-tooltip="showTooltip"
    )
      div.input-group
        span.input-group-addon
          strong R$
        input.form-control(
          type="text"
          :name="fieldId"
          :value="value"
          v-mask="'money'"
          @input="updateValue($event.target.value)"
          :placeholder="placeholder || label"
          )
</template>

<style scoped>
  input[type=text] { text-align:right }
</style>
