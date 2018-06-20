<script>
  // base component.
  import TheMask from 'vue-the-mask'

  import computed from '../../resources/computed'

  /**
   * Default export.
   */
  export default {
    /**
     * Generic masked.
     */
    name: 'base-mask',

    /**
     * Extends the default masked component.
     */
    extends: TheMask,

    /**
     * Override props.
     */
    props: {

      /**
       * No placeholder type check
       */
      placeholder: {
        default: null
      },
      label: {
        default: null
      },
      value: {
        default: null
      }
    },

    /**
     * Custom methods.
     */
    methods: {

      /**
       * Focus event.
       */
      focus () {
        this.$emit('focus')
      },

      /**
       * Blur event.
       */
      blur () {
        this.$emit('blur')
      }

    },
    /**
     * Override some computed properties.
     */
    computed: {
      ...computed,

      /**
       * No Mask as Placeholder should be used.
       */
      placeholderOrMask () {
        return this.placeholder
      }

    }
  }
</script>

<template lang="pug">
div.form-group(:class="groupClasses")
  label {{ label || placeholder }}
  input.form-control(:type="type", @input="refresh($event.target.value)", @focus="focus", @blur="blur", :placeholder="placeholderOrMask")
  slot
</template>
