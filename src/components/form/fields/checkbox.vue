<script>
  // import field resources mixin.
  import resources from '../resources'

  /**
   * Checkbox Field Component.
   */
  export default {
    // component name.
    name: 'f-checkbox',

    // default text field mixin.
    mixins: [resources],

    /**
     * Custom local methods.
     */
    methods: {
      /**
       * Emit the input event for the parent component.
       *
       */
      updateValue: function (event) {
        this.$emit('input', event.target.checked)
      }
    }

  }
</script>

<template lang="pug">
  div.form-group.label-floating(:class="groupClasses")
    input(
    :disabled="disabled",
    type="checkbox", @focus="focus", @blur="blur",
    :name="name", :id="name", :checked="value",
    @change="updateValue")
    label.css-label(v-if="!force-no-label", :for="name", style="height: 29px; padding: 7px 0")
      span {{ label }}
    error(:message="errors")
</template>
