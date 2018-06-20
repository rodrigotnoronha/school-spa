export default {
  forceLabel: {
    type: Boolean,
    default: true
  },
  errors: null,
  fieldId: {
    type: String,
    default: 'phone'
  },
  mask: { // Mask to input (read format.js)
    type: [String, Array],
    default: () => {
      return [
        {
          mask: '##.###-###'
        }
      ]
    }
  },
  maxlength: { // Maxlength without mask
    type: Number,
    default: 10
  }
}
