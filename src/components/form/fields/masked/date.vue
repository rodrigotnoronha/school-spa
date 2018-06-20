<script>
  // mask component.
  import Masked from './masked'

  /**
   * Phone Field Component.
   */
  export default {

    /**
     * Component's name
     */
    name: 'f-date',

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
        default: () => ['##/##/####']
      }
    }
  }
</script>
