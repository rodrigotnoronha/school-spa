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
    name: 'f-phone',

    /**
     * Base masked component to extend.
     */
    mixins: [Masked],

    /**
     * Custom component props.
     */
    props: {

      /**
       * Mask to be applied.
       */
      mask: {
        default: () => ['## ####-####', '## #####-####']
      },
      label: {
        default: null
      }
    }

  }
</script>
