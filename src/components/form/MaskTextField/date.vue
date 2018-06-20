<script>
import MaskTextField from './MaskTextField'

export default {
  name: 'date',
  extends: MaskTextField,
  props: {
    clear: {
      type: Boolean,
      default: false
    },
    forceLabel: {
      type: Boolean,
      default: true
    },
    errors: null,
    fieldId: {
      type: String,
      default: 'date'
    },
    mask: { // Mask to input (read format.js)
      type: [String, Array],
      default: () => {
        return [
          {
            mask: '##/##/####'
          }
        ]
      }
    },
    maxlength: { // Maxlength without mask
      type: Number,
      default: 10
    }
  }
}
</script>
