<script>
  // import field resources mixin.
  import resources from '../resources'

  /**
   * Text Field Component.
   */
  export default {
    // component name.
    name: 'f-password',

    // default text field mixin.
    mixins: [resources]
  }
</script>

<template lang="pug">
  div.form-group.label-floating(:class="groupClasses")
    label.control-label(v-if="label") {{ label }}
    input.form-control(
    :placeholder="placeholder",
    type="password", @focus="focus", @blur="blur",
    :name="name", :id="name",
    @input="updateValue")
    error(:message="errors")
    slot
</template>
