<script>
  // mask component.
  import Masked from './masked'

  /**
   * ZIP (CEP) Field Component.
   */
  export default {

    /**
     * Component's name
     */
    name: 'f-zip',

    /**
     * Base masked component to extend.
     */
    extends: Masked,

    /**
     * Custom component props.
     */
    props: {
      /**
       * Mask to be applied.
       */
      mask: {
        default: '#####-###'
      }
    }
  }
</script>
