<script>
  // base masked component.
  import BaseMask from './base'

  // default field resources.
  import resources from '../../resources'

  /**
   * Default export.
   */
  export default {
    /**
     * Generic masked.
     */
    name: 'f-masked',

    /**
     * Local Components.
     */
    components: {
      // customized vue-the-mask instance.
      BaseMask
    },

    /**
     * Register the resources mixin.
     */
    mixins: [resources],

    /**
     * Custom methods.
     */
    methods: {

      /**
       * Emit the input event for the parent component.
       *
       */
      updateValue: function (value) {
        this.$emit('input', value)
      }
    },

    /**
     * Custom props.
     */
    props: {
      /**
       * Mask to be applied.
       */
      mask: {
        default: null
      },

      /**
       * Text-Link input types can use the same component.
       * i.e email, password, etc.
       */
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      }
    }
  }
</script>


<template lang="pug">
  base-mask(:type="type", :name="name", :id="name", :value="value",
  :mask="mask",  :masked="false", :label="label", :placeholder="placeholder",
  @focus="focus", @blur="blur", @input="updateValue")
</template>
