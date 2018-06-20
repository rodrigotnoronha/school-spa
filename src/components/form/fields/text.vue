<script>
  // import field resources mixin.
  import resources from '../resources'
  import fLabel from './label'
  /**
   * Text Field Component.
   */
  export default {
    // component name.
    name: 'f-text',
    components: {fLabel},

    // default text field mixin.
    mixins: [resources],

    // custom component props
    props: {
      /**
       * Text-Link input types can use the same component.
       * i.e email, password, etc.
       */
      type: {
        type: String,
        default: 'text'
      },
      step: {
        type: Number,
        default: 1
      },
      min: {
        type: Number,
        default: -999
      },
      max: {
        type: Number,
        default: 999
      },
      disabled: {
        type: Boolean,
        default: false
      },
      forceNoLabel: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<template lang="pug">
  div.form-group(:class="groupClasses")
    label(v-if="!forceNoLabel") {{ label || placeholder }}
    input.form-control(
      v-if="type !== 'textarea' && type !== 'number'",
      :placeholder="placeholder || label",
      :type="type", @focus="focus", @blur="blur",
      :name="name", :id="name", :value="value",
      :disabled="disabled",
      @input="updateValue")

    input.form-control(
      v-if="type === 'number'",
      :placeholder="placeholder || label",
      :step="step",
      :min="min",
      :max="max",
      :type="type", @focus="focus", @blur="blur",
      :name="name", :id="name", :value="value",
      :disabled="disabled"
      @input="updateValue")

    textarea.form-control(
    v-if="type === 'textarea'",
      :placeholder="placeholder || label",
      :type="type", @focus="focus", @blur="blur",
      :name="name", :id="name", :value="value", rows="4",
      :disabled="disabled",
      @input="updateValue")
    error(:message="errors")
</template>
