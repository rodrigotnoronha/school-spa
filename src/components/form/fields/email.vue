<script>
  // import field resources mixin.
  import resources from '../resources'

  /**
   * Text Field Component.
   */
  export default {
    // component name.
    name: 'f-email',

    // default text field mixin.
    mixins: [resources]
  }
</script>

<template lang="pug">
  div.form-group.label-floating(:class="groupClasses")
    label.control-label(v-if="label") {{ label }}
    input.form-control(
      :placeholder="placeholder || label",
      type="email", @focus="focus", @blur="blur",
      :name="name", :id="name", :value="value"
      @input="updateValue")
    error(:message="errors")
</template>
